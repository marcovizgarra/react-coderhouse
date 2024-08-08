// React hooks
import { useContext, useEffect, useState } from "react"
// Images
import cartIcon from '/public/img/cartWidget/cart-shopping-solid.svg'
// Context
import { CartContext } from "../../context/CartContext";
import { getFileName } from "../../js/functions";
// Components
import AddToCart from "../AddToCart/AddToCart";


const ItemCount2 = ({ id }) => {
    const { increase, decrease, addToCart, setProductId, counter } = useContext(CartContext);
    
    useEffect(() => {
        setProductId(id)
    }, [id])
    
    return (
        <>
            <div className="btn-group item_count" role="group">
                <button type="button" className="btn btn-secondary rounded-start-pill" onClick={() => decrease()}>-</button>
                <button type="button" className="btn btn-secondary">{counter}</button>
                <button type="button" className="btn btn-secondary rounded-end-pill" onClick={() => increase()}>+</button>
            </div>
        </>
    )
}

export default ItemCount2