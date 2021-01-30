import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from './styles/global';
import { clientGraphql } from './services/index';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <ApolloProvider client={clientGraphql}>
      <Routes />
      <GlobalStyle />
    </ApolloProvider>
  </Router>
);

export default App;
