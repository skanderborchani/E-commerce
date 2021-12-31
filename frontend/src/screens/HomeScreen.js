import React from 'react';
import "./HomeScreen.css";
import { useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {getProducts as listProducts} from '../Redux/actions/productActions';

const HomeScreen = () => {
    const dispatch =useDispatch();
    const getProducts=useSelector(state => state.getProducts);
    const { products,loading,error} =getProducts;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return 
        <div className='homescreen'>
            <h2 className='homescreen-title'>description:</h2>
            <p>Welcome to identity we sell used clothing with a hight quality with the cheapest prices you can dream off we can help you find your own style and embrace your inner beast stay updated with our web site </p>
            <div className='homescreen-products'>
             {loading ? <h2>loading..</h2> :error ? <h2>{error}</h2> : products.map(product => (
              <Product
               key={product.id}
               productId={products._id}
               name={product.name}
               price={product.price}
               description={product.description}
               size={product.size}
                />   
             ))}
            </div>
        </div>;
    
    
};

export default HomeScreen;
