import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* history tells ReactRouter how it should work with the current url in the browser */}
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route
          path="resources" //wrapping the component with our HOC function, requireAuth
          component={requireAuth(Resources)}
        />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
