import ".;/Product.css";
import { link } from "react-router-dom";

const Product = (imageurl , name, price,description,productId,size) => {
    return (
        <div className="product">
            <img src={imageurl}/>
            <div className="product_info">
                <p className="info_name">{name}</p>
                <p className="info_description">{description}</p>
                <p className="price">$ {price}</p>
                <p className="size">$ {size}</p>
                <link to = {'/product/${1111}'} className="info_button">View</link>

            </div>
            
        </div>
    );
};

export default Product;
