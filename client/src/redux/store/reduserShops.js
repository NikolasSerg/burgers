import {FETCH_SHOPS} from  '../types';

const initialState = [];
export default function shopsReducers (state = initialState, action) {
    switch (action.type) {
        case FETCH_SHOPS:
        return {...state, shops: action.payload};

        default:
            return state;
    }
}

export const loadShops = (payload) => ({type: FETCH_SHOPS, payload})
