import * as actiontypes from '../constants/productConstants';
import axios, { Axios } from 'axios';
export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type: actiontypes.GET_PRODUCTS_REQUEST});
        const {data} = await Axios.get("/api/products");
        dispatch({
          type: actiontypes.GET_PRODUCTS_SUCCESS,
          payload:data
        })
    } catch (error) {
        dispatch({
            type: actiontypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message:error.message,
        })
    }
};
export const getProductsDetails = () => async (dispatch) => {
    try {
        dispatch({type: actiontypes.GET_PRODUCTS_DETAILS_REQUEST});
        const {data} = await Axios.get("/api/products/${id}");
        dispatch({
          type: actiontypes.GET_PRODUCTS_DETAILS_SUCCESS,
          payload:data
        })
    } catch (error) {
        dispatch({
            type: actiontypes.GET_PRODUCTS_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message:error.message,
        })
    }
};
export const removeProductDetails = ()  => (dispatch) => {
    dispatch({
        type:actiontypes.GET_PRODUCT_DETAIL_RESET,
    })
};