import React from 'react';
import './PizzaForm.css';

const PizzaForm = props => {
    return (
        <div className='form-box'>
            <form onSubmit={props.submit}>
            <div className='input-box'>
                <label htmlFor='name'>Name : </label>
                <input onChange={props.changeHandler} required id='name' name='name' value={props.valueName}/>
            </div>
            <div className='input-box'>
                <label htmlFor='price'>Price : </label>
                <input onChange={props.changeHandler} required id='price' name='price' value={props.valuePrice}/>
                KGS
            </div>
            <div className='input-box'>
                <label htmlFor='image'>Image : </label>
                <input onChange={props.changeHandler} required id='image' name='image' value={props.valueImage}/>
            </div>
            <button typeof='submit'>Save</button>
        </form>
        </div>
    );
};

export default PizzaForm;