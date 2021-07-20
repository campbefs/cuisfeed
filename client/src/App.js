import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';

import Welcome from './pages/Welcome';
import Nav from './components/Nav';
import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
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

  // useEffect(() => {
  //   window.location.href = "/";
  // });
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          {!Auth.loggedIn() ? (
          <Welcome/>
           ) : (
             <>
              <Nav/>
              <Switch>
                <Route exact path='/' component={Welcome} />
                <Route exact path='/home' component={Home} />
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
