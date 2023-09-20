import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { PokemonProvider } from './context/context/PokemonContext';
import { client } from './apollo/apollo/apollo';
import { Error } from './components/Error';
import { Home } from './components/Home';
import { PokemonDetail } from './components/PokemonDetail';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <PokemonProvider>
        <RouterProvider router={router} />
      </PokemonProvider>
    </ApolloProvider>
  </React.StrictMode>
);