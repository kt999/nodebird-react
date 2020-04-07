import { LOG_IN } from '../reducers/user';
import {error} from "next/dist/build/output/log";
import { all, call,delay, fork, put, takeEvery,take } from 'redux-saga/effects';


function loginAPI() {
    // 서버에 요청을 보내는 부분
    return "hihi";
}

function* login() {
    try {
        //call -> sync
        yield call(loginAPI);

        yield put({ // put은 dispatch 동일
            type: LOG_IN,
            data:{
                nickname: "kt999",
            }
        });

        console.log("tes");

    } catch (e) { // loginAPI 실패
        console.error(e);
    }
}

function* watchLogin() {
    yield take(LOG_IN, login);
}


export default function* userSaga () {
    yield all([
        fork(watchLogin),
    ]);
};