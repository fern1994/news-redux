import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
// import Main from './containers/Main';
import PrivateRoute from './containers/route/PrivateRoute';
import TemplateHome from './containers/template/TemplateHome';
import TemplateAdmin from './containers/template/TemplateAdmin';
import configureStore from './store';

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Router>
          <div>
            <Route exact path="/" render={() => (
              <Redirect to="/home/index" />
            )} />
            <Route path='/home' component={TemplateHome} />
            <PrivateRoute path='/admin' component={TemplateAdmin} />
          </div>
        </Router>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  , document.getElementById('root'));