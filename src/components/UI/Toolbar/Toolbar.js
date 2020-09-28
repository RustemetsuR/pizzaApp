import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.css';
import Container from '../Container/Container';

const Toolbar = () => {
    return (
        <header className='header-nav'>
            <Container>
                <h2 className='header-title'>Turtle Pizza Admin</h2>
                <div className='nav-box'>
                    <NavLink to='/'>Pizzas</NavLink>
                    <NavLink to='/orders'>Orders</NavLink>
                </div>
            </Container>
        </header>
    );
};

export default Toolbar;