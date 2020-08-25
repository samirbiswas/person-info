import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    const totalSalary = cart.reduce((total,b)=> total += b.salary,0);

    return (
        <div>
            <h2>Person Counter: {cart.length}</h2>
   
            <h3>Total Salary:{totalSalary}</h3>
        </div>
    );
};

export default Cart;