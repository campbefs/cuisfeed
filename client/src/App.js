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
import Search from './pages/Search';
import Post from './pages/Post';
import PostOld from './pages/PostOld';


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
    'Profile',
    'Create Post'
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [searchSubmit, setSearchSubmit] = useState(0);

  
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          {!Auth.loggedIn() ? (
          <Welcome/>
           ) : (
             <>
              <TopNav
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  searchSubmit = {searchSubmit}
                  setSearchSubmit={setSearchSubmit}
              />
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
                <Route path='/search' component={Search} />
                {/* <Route path="/none" render={(setCurrentPage) => <Search {...setCurrentPage, searchInput} title={`Search Page`} />} /> */}

                <Route exact path='/post' component={Post} />
                <Route exact path='/post/:postId' component={PostOld} />
                {/* catch all route */}
                <Route component={Search} />
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
