import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import App from './modules/App';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

function AppRoot() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

export default AppRoot;
