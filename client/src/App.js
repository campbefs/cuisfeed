import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';

import Welcome from './pages/Welcome';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import Home from './pages/Home';

import MyProfile from './pages/MyProfile';
import UserProfile from './pages/UserProfile';
import RecipeSearch from './pages/RecipeSearch';
import Post from './pages/Post';


const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:3001/graphql'
  // uri: 'graphql',
});

const authLink = setContext((__, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ``,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})


function App() {

  const [pages] = useState([
    'Home',
    'Search',
    'Discover',
    'Notifications',
    'Inbox',
    'My Recipe Book',
    'Profile'
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          {!Auth.loggedIn() ? (
          <Welcome/>
           ) : (
             <>
              <TopNav/>
              <div className="left-bar">
                <LeftNav
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
              <Switch>
                <Route exact path='/' component={Welcome} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/myprofile/' component={MyProfile}/>
                <Route exact path='/profile/:username' component={UserProfile}/>
                <Route exact path='/recipesearch' component={RecipeSearch} />
                <Route exact path='/post/:postId' component={Post} />
              </Switch>
             </>
           )}
          
          {/* <Nav/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
          </Switch> */}
        </>
      </Router>

    {/* <Welcome/> */}

    </ApolloProvider>
  );
}

export default App;
