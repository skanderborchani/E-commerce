import * as actionTypes from '../constants/cartConstants';
import axios, { Axios } from 'axios';
import { json } from 'express/lib/response';
export const addtocart = (id, qte) => async (dispatch, getState) => {
    const {data} = await Axios.get('/api/products/${id}');
    dispatch({
        type: actionTypes.ADD_TO_CARD,
        payload:{
            product: data._id,
            name:data.name,
            imageurl=data.imageurl,
            description=data.description,
            price=data.price,
            size:data.size,
            countInStock=data.countInStock,
            qte
        }
    })
    localStorage.setItem('cart', JSON.stringify(getstate().cartIteams));
};
export const removeFromCart = (id) => (dispatch, getstate) => {
    dispatch({
      type:actionTypes.REMOVE_FROM_CART,
      payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartIteams))
};