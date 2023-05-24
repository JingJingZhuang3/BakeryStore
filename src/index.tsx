import { mergeStyles } from 'office-ui-fabric-react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { App } from './App';
import { rootReducers } from './reducers/rootReducers';
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
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  