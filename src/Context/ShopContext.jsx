import { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const shopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i <all_product.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => (
            {
                ...prev,
                [itemId]: prev[itemId]+1
            }
        ));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => (
            {
                ...prev,
                [itemId]: prev[itemId]-1
            }
        ));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for( let item in cartItems){
            if( cartItems[item] > 0){
                 let itemInfo = all_product.find((product) => product.id == item);

                 totalAmount += itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for( const item in cartItems){
            if( cartItems[item] > 0){
                totalItem += 1;
            }
        }
        return totalItem;
    }

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItem
    };

    return <shopContext.Provider value={contextValue}>
        {props.children}
    </shopContext.Provider>

};

export default ShopContextProvider;
