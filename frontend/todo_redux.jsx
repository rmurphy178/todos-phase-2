import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { applyMiddleware } from 'redux';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  store.dispatch((dispatch) => {
  console.log('If this prints out, the thunk middleware is working!');
});
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
