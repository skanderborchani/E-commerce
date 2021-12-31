import React from 'react';
import "./CartScreen.css";
import CartIteams from '../components/CartIteams';
const CartScreen = () => {
    return (
        <div className='cartscreen'> 
            <div className='cartscreen_left'>
                <h2>Shopping cart</h2>
                <CartIteams />
            </div>
            <div className='cartscreen_right'>
                <div className='cartscreen_info'>
                    <p>Subtotal(0) iteams</p>
                </div>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default CartScreen;
