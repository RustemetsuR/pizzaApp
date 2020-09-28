import axios from '../../axiosPizzas';
const { FETCH_GET_ORDERS_SUCCESS, FETCH_GET_ORDERS_FAILURE, SET_TOTAL_ORDERS } = require("../actionTypes");


const getOrdersSuccess = value => {
    return { type: FETCH_GET_ORDERS_SUCCESS, value };
};

const getOrdersFailure = error => {
    return { type: FETCH_GET_ORDERS_FAILURE, error };
};

export const setTotalOrders = value => {
    return { type: SET_TOTAL_ORDERS, value };
};

export const fetchOrdersData = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/orders.json');
            dispatch(getOrdersSuccess(response.data));
        } catch (e) {
            dispatch(getOrdersFailure(e));
        };
    };
};