import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";
import { shopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {

    const {all_product} = useContext(shopContext);

  return (
    <div className='shop-category'>

    <img src={props.banner} alt="banner" />

    <div className="shopcategory-indexSort">
        <p>
            <span>
                Showing 1-12 
                <span>
                    &nbsp;out of 36 products
                </span>
            </span>
        </p>
        <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="icon" />
        </div>
    </div>

    <div className="shopcategory-products">
        {
            all_product.map((item,index) => {
                if( props.catrgory === item.category){
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
                }else{
                    return null;
                }
            })
        }
    </div>

    <div className="shopcategory-loadmore">
        Explore More
    </div>

    </div>
  )
}

export default ShopCategory