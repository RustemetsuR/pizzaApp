import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../axiosPizzas';
import PizzaForm from '../../components/PizzaForm/PizzaForm';
import Container from '../../components/UI/Container/Container';

const EditPizza = props => {
    const id = useSelector(state => state.pizzas.id);
    const [pizzaData, setPizzaData] = useState({
        name: '',
        price: '',
        image: '',
    });

    useEffect(() =>{
        const fetchPizzaData = async() =>{
            const response = await axios.get('/pizzas/' + id + '.json');
            setPizzaData(response.data);
        };
        fetchPizzaData().catch(console.error());
    },[id]);

    const changedData = event => {
        const name = event.target.name;
        const value = event.target.value;

        const pizzaDataCopy = {
            ...pizzaData,
            [name]: value,
        };

        setPizzaData(pizzaDataCopy);
        console.log(pizzaData);
    };

    const changePizzaData = async event =>{
        event.preventDefault();
        await axios.put('/pizzas/' + id + '.json', pizzaData);

        props.history.replace('/');
    };

    return (
        <div>
            <Container>
                <PizzaForm 
                submit={changePizzaData}
                changeHandler={changedData}
                valueName={pizzaData.name}
                valuePrice={pizzaData.price}
                valueImage={pizzaData.image}
                />
            </Container>
        </div>
    );
};

export default EditPizza;