import React from 'react';
import "./ProductScreen.css";

const ProductScreen = () => {
    return (
        <div className='productscreen'>
           <div className='productscreen_left'>
               <div className='left_image'>
                   <img src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0ac38433-59bd-42ef-a899-9cf52fa3a3db/pro-dri-fit-mens-slim-fit-sleeveless-top-xzN4WR.png' alt='product name'/>
               </div>
               <div className='left_info'>
                   <p className='left_name'>Nike shirt</p>
                   <p>price:50dinars</p>
                   <p>description:The Nike Pro Dri-FIT Top layers you in lightweight fabric with breathability built into heat zones to keep you cool and dry from warmups through cool downs. Stretchy fabric made with at least 75% recycled polyester fibers lets you move freely.</p> 
                   <p>size:XL</p> 
               </div>
           </div>
           <div className='productscreen_right'>
               <div className='right_info'>
                  <p>Price:<span>50dinars</span></p>
                  <p>Status:<span>In Stock</span></p> 
                  <p>Qty <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      </select>
                  </p>
                  <p>
                     <button type='button'>Add to Cart</button> 
                  </p>
               </div>

           </div>
        </div>
    )
}

export default ProductScreen
