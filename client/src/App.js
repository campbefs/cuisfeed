import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Main from './components/Main';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import UserProfile from './components/UserProfile';
// import LikedPost from './components/LikedPosts';
import RecipeSearch from './components/RecipeSearch'
import Post from './components/Post';

import { ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import ApolloClient from 'apollo-boost';

// const httpLink = createHttpLink({
//   // uri: 'http://localhost:3001/graphql',
//   uri: 'graphql',

// });

// const authLink = setContext((__, { headers}) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ``,
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// if (process.env.NODE_ENV === 'production') {
//   let uri = '/graphql'
// } else {
//   let uri = 'http://localhost:3001/graphql'
// }

const client = new ApolloClient({

  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  // uri: 'http://localhost:3001/graphql'
  uri: process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:3001/graphql'
});

function App() {
  const pages = {};

  const path = window.location.pathname.split("/")[1].toLowerCase();
  console.log(path);

  let component = <Main />;
  if (pages[path]) {
    component = pages[path]
  }

  const [page, setPage] = useState(component);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          {<Nav setPage={setPage} pages={pages} />}
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/myprofile" component={MyProfile} />
            <Route exact path="/profile/:username" component={UserProfile} />
            <Route exact path="/searchrecipes" component={RecipeSearch} />
            <Route exact path="/post/:postId" component={Post} />

          </Switch>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
