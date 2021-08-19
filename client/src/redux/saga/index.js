import {all} from 'redux-saga/effects';
import {loadShops} from "../store/reduserShops";

export function* rootWatcher() {
    yield all([loadShops()])
}
