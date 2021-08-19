import {put, takeEvery, call} from 'redux-saga/effects';
import {FETCH_SHOPS} from "../types";
import {loadShops} from "../store/reduserShops";

const shopsList = () => {
    fetch('http://localhost:5000/home')
}

function* loadShopsWorker() {
    let data = yield call(shopsList)
    let json = yield call(JSON.parse(data))
    yield put(loadShops(json))
}

function* watcherLoadShops() {
    yield takeEvery(FETCH_SHOPS, loadShopsWorker)
}