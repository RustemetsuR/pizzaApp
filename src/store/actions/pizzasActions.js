import axios from '../../axiosPizzas';
const { FETCH_GET_PIZZAS_SUCCESS, FETCH_GET_PIZZAS_FAILURE, ADD_NEW_PIZZA_SUCCESS, ADD_NEW_PIZZA_FAILURE, GET_ID } = require("../actionTypes");

const getPizzasSuccess = value => {
    return { type: FETCH_GET_PIZZAS_SUCCESS, value };
};

const getPizzasFailure = error => {
    return { type: FETCH_GET_PIZZAS_FAILURE, error };
};

const addNewPizzaSuccess = value => {
    return { type: ADD_NEW_PIZZA_SUCCESS , value};
};

const addNewPizzaFailure = error => {
    return { type: ADD_NEW_PIZZA_FAILURE, error };
};

export const getId = value =>{
    return {type: GET_ID, value};
};

export const fetchAddNewPizza = data => {
    return async dispatch => {
        try {
            await axios.post('/pizzas.json', data);
            dispatch(addNewPizzaSuccess());
        } catch (e) {
            dispatch(addNewPizzaFailure(e));
        };
    };
};

export const fetchGetPizzasData = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/pizzas.json');
            dispatch(getPizzasSuccess(response.data));
        } catch (e) {
            dispatch(getPizzasFailure(e));
        };
    };
};