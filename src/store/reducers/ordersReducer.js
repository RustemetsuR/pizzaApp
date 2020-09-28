import { FETCH_GET_ORDERS_SUCCESS, FETCH_GET_ORDERS_FAILURE, SET_TOTAL_ORDERS } from "../actionTypes";

const initialState = {
    error: null,
    orders: [],
    oneOrder: [],
    totalOrders: [],
}


const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GET_ORDERS_SUCCESS:
            return { ...state, orders: action.value };
        case FETCH_GET_ORDERS_FAILURE:
            return { ...state, error: action.error };
        case SET_TOTAL_ORDERS:
            return { ...state, totalOrders: action.value, };
        default:
            return { ...state };
    };
};

export default ordersReducer;