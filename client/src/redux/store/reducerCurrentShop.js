import {FETCH_CURRENT_SHOP} from "../types";


const initialState = {
    currentShop: {}
}

export default function currentShopReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENT_SHOP:
            return {...state, currentShop: action.payload};

        default:
            return state;
    }
}
export const loadCurrentShop = (payload) => ({type: FETCH_CURRENT_SHOP, payload})