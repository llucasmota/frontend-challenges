import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from './styles/global';
import { clientGraphql } from './services/index';
import Routes from './routes';

const App: React.FC = () => (
  <ApolloProvider client={clientGraphql}>
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </ApolloProvider>
);

export default App;
