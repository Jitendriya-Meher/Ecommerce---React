import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import "./CSS/Product.css";
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ReletedProducts from '../Components/ReletedProducts/ReletedProducts';

const Product = () => {

  const {all_product} = useContext(shopContext);
  const {productId} = useParams();
  const product = all_product.find((item) => (
    item.id == productId
  ));

  return (
    <div className=''>
      <Breadcrums product={product}></Breadcrums>
      <ProductDisplay product={product}></ProductDisplay>
      <DescriptionBox></DescriptionBox>
      <ReletedProducts></ReletedProducts>
    </div>
  )
}

export default Product