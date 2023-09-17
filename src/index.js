import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { PokemonProvider } from './context/context/PokemonContext';
import { client } from './apollo/apollo/apollo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </ApolloProvider>
  </React.StrictMode>
);