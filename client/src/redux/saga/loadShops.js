import {put, takeEvery, call} from 'redux-saga/effects';
import {FETCH_SHOPS} from "../types";
import {loadShops} from "../store/reduserShops";

const shopsList = () => fetch('http://localhost:5000/home')

function* loadShopsWorker() {
    let data = yield call(shopsList)
    let json = yield call(() => new Promise(res => res(data.json())))
    yield put(loadShops(json))
}

export function* watcherLoadShops() {
    yield takeEvery(FETCH_SHOPS, loadShopsWorker)
}