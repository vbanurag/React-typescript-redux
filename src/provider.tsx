import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';

import rootReducer from "./reducers/index";
import IndexContainer from "./components/indexContainer";

const createStoreWithMiddleWare = applyMiddleware(ReduxThunk, promiseMiddleware())(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(rootReducer)}>
        <IndexContainer />
    </Provider>,
    document.getElementById("app")
    );