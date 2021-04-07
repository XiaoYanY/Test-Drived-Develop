import ReactDom from 'react-dom';
import React from 'react';
import Main from './Main/Main.js';
import store from './store.js';
import { Provider } from 'react-redux';

ReactDom.render(
    <Provider store={store}>
        <Main />
    </Provider>
, document.getElementById('root'));  

