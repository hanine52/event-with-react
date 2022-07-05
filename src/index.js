import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {configureStore} from '../src/app/store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';

const rootEl = document.getElementById('root');

const store = configureStore();

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
        <App />
      </BrowserRouter>
    </Provider>
    , rootEl)
}

if (module.hot) {
  module.hot.accept('./app/layout/App', function() {
    setTimeout(render);
  })
}

render();