import React from 'react';
import "./ReletedProducts.css";
import data_product from "../Assets/data";
import Item from '../Items/Item';

const ReletedProducts = () => {

  return (
    <div className='relatedproducts'>
        <h1>
            Related Products 
        </h1>
        <hr />
        <div className="relatedprodcts-item">
            {
                data_product.map((item,index) => (
                    <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
                ))
            }
        </div>
    </div>
  )
}

export default ReletedProducts