import { useReducer, createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { actionTypes } from '../actions/cart.actions';
import { cartInitialState, cartReducer} from '../reducers/cart.reducer';
import { getTotalPricesItems } from '../utils/cart.utils';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const [orderTotal, setOrderTotal] = useState(0);

    useEffect(() => {
            let total = getTotalPricesItems(state.cartItems).reduce((a, b) => a + b, 0)
            setOrderTotal(total)
    }, [state]);

    const addToCart = (drink) =>{
        dispatch({type:actionTypes.ADD_TO_CART, payload:drink})
    }

    const removeOneCart = (idDrink) => {
        dispatch({type:actionTypes.REMOVE_ONE_FROM_CART, payload:{ idDrink }})
    }

    const removeAllFromCart = (idDrink) => {
        dispatch({type:actionTypes.REMOVE_ALL_FROM_CART, payload:{ idDrink }})
    }

    const clearCart = () =>{
        dispatch({type: actionTypes.CLEAR_CART})
    }

    const sendOrder = () =>{
        alert(JSON.stringify(state))
    }

    const cartValues = {
        cart:state,
        addToCart,
        removeOneCart,
        removeAllFromCart,
        clearCart,
        sendOrder,
        orderTotal
    }

    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { CartContext, CartProvider }