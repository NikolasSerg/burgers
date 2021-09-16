import {SET_CURRENT_PAGE} from "../types";

const initialState = {
    currentShop: {}
}

export default function currentPageReducer(state = {}, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            console.log(action.payload, ' - action.payload in REDUCER')
            return {...state, currentShop: action.payload};

        default:
            return state;
    }

}

export const loadCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload});

