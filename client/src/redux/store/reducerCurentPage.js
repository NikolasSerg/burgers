import {SET_CURRENT_PAGE} from "../types";

const initialState = {

}

export default function currentPageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {...action.payload};

        default:
            return state;
    }

}

export const loadCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload});
