import React from 'react';
import ReactDOM from 'react-dom';
//Provider
//ReactとReduxを接続して使えるようになる
import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import App from './App';

export const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);