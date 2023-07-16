import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles } from 'office-ui-fabric-react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducers } from './reducers/rootReducer';
import { Auth0Provider } from '@auth0/auth0-react';

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#root)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
const domain = "dev-8p9fbskf.us.auth0.com";
const clientId = "WQAATEKJSAzkBAMBq0h5GevpwCJuFGWt";
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain ? domain : ""}
      clientId={clientId ? clientId : ""}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
