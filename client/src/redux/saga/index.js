import {all} from 'redux-saga/effects';
import {watcherLoadShops} from "./loadShops";

export function* rootWatcher() {
    yield all([watcherLoadShops()])
}
