import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PizzaForm from '../../components/PizzaForm/PizzaForm';
import Container from '../../components/UI/Container/Container';
import { fetchAddNewPizza } from '../../store/actions/pizzasActions';

const AddNewPizza = props => {

    const dispatch = useDispatch();

    const [pizzaData,setPizzaData] = useState({
        name: '',
        price: '', 
        image: '',
    });

    const pizzaDataChanged = event =>{
        const name = event.target.name;
        const value = event.target.value;

        const pizzaDataCopy = {
            ...pizzaData,
            [name]: value,
        };
        setPizzaData(pizzaDataCopy);
        console.log(pizzaData);
    };

    const addNewPizza = event =>{
        event.preventDefault();
        dispatch(fetchAddNewPizza(pizzaData));
        props.history.replace('/');
    };

    return (
        <div>
            <Container>
                <PizzaForm 
                submit={addNewPizza}
                changeHandler={pizzaDataChanged}
                valueName={pizzaData.name}
                valuePrice={pizzaData.price}
                valueImage={pizzaData.image}/>
            </Container>
        </div>
    );
};

export default AddNewPizza;