import React from 'react';
import Head from "next/head";
import withRedux from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from "redux";
import AppLayout from "../components/layout";
import PropTypes from "prop-types";

import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import reducer from '../reducers';

const NodeBird = ({Component,store}) => {


    return (
        <>
            <Provider store = {store}>
                <Head>
                    <title>kt999</title>
                </Head>
                <AppLayout>
                    <Component/>
                </AppLayout>
            </Provider>
        </>
    )
};

NodeBird.propTypes = {
    Component : PropTypes.elementType,
    store : PropTypes.object,
};

export default withRedux( (initialState, options) => {

    //middlewares and combind
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const enhancer = compose(
        applyMiddleware(...middleware),
    );

    const store = createStore(reducer,initialState,enhancer);

    sagaMiddleware.run(rootSaga);

    return store;
})(NodeBird);