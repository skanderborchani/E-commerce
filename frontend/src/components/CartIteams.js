import './CartIteams.css';
import {link} from 'react-router-dom';

const CartIteams = () => {
    return (
        <div className='carditeam'>
           <div className='cartiteam_image'>
               <img src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0ac38433-59bd-42ef-a899-9cf52fa3a3db/pro-dri-fit-mens-slim-fit-sleeveless-top-xzN4WR.png' alt='Nike shirt'/>

           </div>
           <link to={'/product/${111}'} className='cartiteam_name'>
               <p>Nike shirt</p>
           </link>
           <p className='cartiteam_price'>50dinars</p>
           <select className='cartiteam_select'>
               <option value={1}>1</option>
               <option value={2}>2</option>
           </select>
           <button className='cartiteam_deletebtn'>
               <i className='fas fa-trash'></i>
           </button>
        </div>
    )
}

export default CartIteams
