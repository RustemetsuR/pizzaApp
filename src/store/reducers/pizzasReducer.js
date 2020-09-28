import { 
    ADD_NEW_PIZZA_FAILURE, 
    ADD_NEW_PIZZA_SUCCESS, 
    FETCH_GET_PIZZAS_FAILURE, 
    FETCH_GET_PIZZAS_SUCCESS,
    GET_ID } from "../actionTypes";

const initialState = {
    error: null,
    pizzas: [],
    id: '',
};


const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GET_PIZZAS_SUCCESS:
            return { ...state, pizzas: action.value };
        case FETCH_GET_PIZZAS_FAILURE:
            return { ...state, error: action.error };
        case ADD_NEW_PIZZA_SUCCESS:
            return { ...state};
        case ADD_NEW_PIZZA_FAILURE:
            return { ...state, error: action.error };
        case GET_ID:
            return { ...state, id: action.value};
        default:
            return { ...state };
    };
};

export default pizzasReducer;