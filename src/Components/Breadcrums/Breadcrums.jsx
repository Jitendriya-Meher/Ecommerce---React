import React from 'react';
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {

    const {product} = props;

  return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt='arrow'></img> SHOP <img src={arrow_icon} alt='arrow'></img> {product.category} <img src={arrow_icon} alt='arrow'></img> {product.name}
    </div>
  )
}

export default Breadcrums