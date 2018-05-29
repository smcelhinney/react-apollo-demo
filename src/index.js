import { injectGlobal } from 'styled-components';
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import client from './client/boost';
// import client from './client/advanced';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Catamaran|Cinzel|Goudy+Bookletter+1911');

  body {
    font-family: 'Cinzel', serif;
    background-image: url('http://www.pngmart.com/files/3/Iron-Man-Transparent-Background.png');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: bottom right;
    display: flex;
    height: 100vh;
    width: 100%;
  }

  #index {
    flex: 1
  }
`

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(WrappedApp, document.getElementById('index'));
