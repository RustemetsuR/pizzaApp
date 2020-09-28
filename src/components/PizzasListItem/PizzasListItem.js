import React from 'react';
import './PizzasListItem.css';

const PizzasListItem = props => {
    return (
        <div className='pizza-list-item-box'>
            <img className='pizza-image' src={props.image} alt={props.name} />
            <div className='pizza-info-box'>
                <h3 className='pizza-name'>{props.name}</h3>
                <p className='pizza-price'>{props.price} KGS</p>
                <div className='pizza-btn-box'>
                    <button className='pizza-btn pizza-btn-edit' onClick={props.edit}>Edit</button>
                    <button className='pizza-btn pizza-btn-delete' onClick={props.delete}>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default PizzasListItem;