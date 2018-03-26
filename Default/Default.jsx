/**
 * Created by YINYI on 2018/3/14.
 */

import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

import './common'

import RouterMap from './router/routerMap'

let store = configureStore()

render (
    <Provider store={store}>
        <RouterMap history={hashHistory} />
    </Provider>,
    document.getElementById("root")
);
