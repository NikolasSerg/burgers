import {SET_CURRENT_SHOP} from "../types";

const initialState = {
    currentShop: {}
}

export default function currentShopReducer(state = {}, action) {
    switch (action.type) {
        case SET_CURRENT_SHOP:
            console.log(action.payload, ' - action.payload in REDUCER')
            return {...state, currentShop: action.payload};

        default:
            return state;
    }

}

export const CurrentShop = (payload) => ({type: SET_CURRENT_SHOP, payload});

