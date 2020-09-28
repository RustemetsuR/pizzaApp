import React, { useEffect } from 'react';
import Container from '../../components/UI/Container/Container';
import './PizzasList.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetPizzasData, getId } from '../../store/actions/pizzasActions';
import PizzasListItem from '../../components/PizzasListItem/PizzasListItem';
import axios from '../../axiosPizzas';

const PizzasList = props => {

    const dispatch = useDispatch();

    const allPizzas = useSelector(state => state.pizzas.pizzas);

    useEffect(() => {
        dispatch(fetchGetPizzasData());
    }, [dispatch, allPizzas]);

    const deletePizza = async id => {
        await axios.delete('/pizzas/' + id + '.json');
    };

    const edit = id => {
        dispatch(getId(id))
        props.history.push('/edit');
    };

    return (
        <div className='pizzas-box'>
            <Container>
                <div className='pizza-list-toolbar'>
                    <h3 className='pizza-list-title'>Pizzas : </h3>
                    <NavLink to='/addNewPizza'>Add New Pizza</NavLink>
                </div>
                <div className='pizzas-list-box'>
                    {allPizzas.length !== 0 ?
                        Object.keys(allPizzas).map(p => (
                            <PizzasListItem
                                key={p}
                                image={allPizzas[p].image}
                                name={allPizzas[p].name}
                                price={allPizzas[p].price}
                                edit={() => edit(p)}
                                delete={() => deletePizza(p)} />
                        ))
                        : null}
                </div>

            </Container>
        </div>
    );
};

export default PizzasList;