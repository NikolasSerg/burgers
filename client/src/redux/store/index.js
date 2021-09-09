import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "../saga";
import shopsReducers from './reduserShops';
import currentPageReducer from "./reducerCurentPage";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    shopsReducers,
    currentPageReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher);