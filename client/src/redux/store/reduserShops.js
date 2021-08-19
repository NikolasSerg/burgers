import {FETCH_SHOPS, SET_SHOPS} from '../types';

const initialState = {
    shops: []
};
export default function shopsReducers (state = initialState, action) {
    switch (action.type) {
        case SET_SHOPS:
        return {...state, shops: action.payload};

        default:
            return state;
    }
}

export const loadShops = (payload) => ({type: SET_SHOPS, payload})
export const asyncloadShops = () => ({type: FETCH_SHOPS})
