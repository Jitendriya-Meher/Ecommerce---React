import React, { useContext } from 'react';
import "./CartItems.css";
import { shopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {

    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(shopContext);

  return (

    <div className='cartitems'>
        
        <div className="cartitems-format-main">
            <p>
                Products
            </p>
            <p>
                Title 
            </p>
            <p>
                Price 
            </p>
            <p>
                Quantity 
            </p>
            <p>
                Total 
            </p>
            <p>
                Remove
            </p>
        </div>

        <hr />

        {
            all_product.map((item) => {
                if( cartItems[item.id] > 0){
                    return <div key={item.id}>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={item.image} className='cartitems-product-icon' alt="Cicon" />
                            <p>
                                {item.name}
                            </p>
                            <p>
                                ${item.new_price}
                            </p>
                            <button className='cartitems-quantity'>
                                {cartItems[item.id]}
                            </button>
                            <p>
                                ${item.new_price*cartItems[item.id]}
                            </p>
                            <img src={remove_icon} alt=""
                            className='remove-icon'
                            onClick={() => {
                                removeFromCart(item.id);
                            }} />
                        </div>
                        <hr />
                    </div>
                }
                else{
                    return null;
                }
            })
        }

        <div className="cartitems-down">

            <div className="cartitems-total">
                <h1>
                    Cart Total
                </h1>
                <div className="">
                    <div className="cartitems-total-item">
                        <p>
                            Subtotal 
                        </p>
                        <p>
                            ${getTotalCartAmount()}
                        </p>
                    </div>
                    <hr />

                    <div className="cartitems-total-item">
                        <p>
                            Shipping Free
                        </p>
                        <p>
                            Free
                        </p>
                    </div>
                    <hr />

                    <div className="cartitems-total-item">
                        <h3>
                            Total
                        </h3>
                        <h3>
                            ${getTotalCartAmount()}
                        </h3>
                    </div>
                </div>

                <button>
                    PROCEED TO CHECKOUT
                </button>
            </div>

            <div className="cartitems-promocode">
                <p>
                    If you have a promo code, Enter it here 
                </p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>
                        Submit
                    </button>
                </div>
            </div>

        </div>
        

    </div>
  )
}

export default CartItems