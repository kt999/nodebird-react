import { LOG_IN_REQUEST,LOG_IN } from '../reducers/user';
import {error} from "next/dist/build/output/log";
<<<<<<< HEAD
import { all, call,delay, fork, put, takeEvery } from 'redux-saga/effects';
import Router from 'next/router';
=======
import { all, call,delay, fork, put, takeEvery,take } from 'redux-saga/effects';
>>>>>>> a3f9667cc8cc7837ba00830c32e2b869d0b3cf24


function loginAPI(loginData) {
    // 서버에 요청을 보내는 부분
    console.log(loginData);
    return "hihi";
}

function* login(action) {
    try {
        //call -> sync
        const result = yield call(loginAPI,action.data);

        yield put({ // put은 dispatch 동일
            type: LOG_IN,
            data:action.data
        });

        Router.push('/');

    } catch (e) { // loginAPI 실패
        console.error(e);
    }
}

function* watchLogin() {
<<<<<<< HEAD
    yield takeEvery(LOG_IN_REQUEST, login);
};
=======
    yield take(LOG_IN, login);
}
>>>>>>> a3f9667cc8cc7837ba00830c32e2b869d0b3cf24


export default function* userSaga () {
    yield all([
        fork(watchLogin),
    ]);
};