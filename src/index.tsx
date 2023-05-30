import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles } from 'office-ui-fabric-react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducers } from './reducers/rootReducers';
// import { logoutUser, setCurrentUser } from './actions/UserActions';
// import setAuthToken from './utils/setAuthToken';
// import jwt_decode from 'jwt-decode';

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

ReactDOM.render(
  //The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
