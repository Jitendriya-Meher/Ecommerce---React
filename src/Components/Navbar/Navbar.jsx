import React, { useContext, useState } from 'react';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useNavigate } from 'react-router-dom';
import { shopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const navigate = useNavigate();
    const {getTotalCartItem} = useContext(shopContext);

  return (
    <div className='navbar'>

        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>
                SHOPPER
            </p>
        </div>

        <ul className="nav-menu">
            <li onClick={() => {
                setMenu("shop");
                navigate("/");
            }}>
                Shop
                {
                    menu==="shop" && <hr />
                }
            </li>
            <li onClick={() => {
                setMenu("mens");
                navigate("/mens");
            }}>
                Men
                {
                    menu==="mens" && <hr />
                }
            </li>
            <li onClick={() => {
                setMenu("womens");
                navigate("/womens");
            }}>
                Women
                {
                    menu==="womens" && <hr />
                }
            </li>
            <li onClick={() => {
                setMenu("kids");
                navigate("kids");
            }}>
                Kids
                {
                    menu==="kids" && <hr />
                }
            </li>
        </ul>

        <div className="nav-login-cart">
            <button onClick={() => {
                navigate("/login");
            }}>
                Log In
            </button>
            <img src={cart_icon} alt="cart-icon"
            onClick={()=>{
                navigate("/cart");
            }} />
            <div className="nav-cart-count">
                {getTotalCartItem()}
            </div>
        </div>

    </div>
  )
}

export default Navbar