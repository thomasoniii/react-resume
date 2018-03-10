import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

const engine = createEngine('resume');
const localStorageMiddleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(localStorageMiddleware, reduxThunk)(createStore);

const store = createStoreWithMiddleware(
  storage.reducer(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const loadStorage = storage.createLoader(engine);
loadStorage(store)
  .then( (newState) => {
    console.log("NEW STATE IS : ", newState);
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>
      ,
      document.getElementById('root')
    );
    registerServiceWorker();
  });
