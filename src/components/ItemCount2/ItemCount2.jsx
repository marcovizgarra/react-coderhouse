// React hooks
import { useContext, useEffect, useState } from "react"
// Images
import cartIcon from '/public/img/cartWidget/cart-shopping-solid.svg'
// Context
import { CartContext } from "../../context/CartContext";
import { getFileName } from "../../js/functions";

const ItemCount2 = ({ id }) => {
    const { increase, decrease, addToCart, setProductId, counter } = useContext(CartContext);
    
    useEffect(() => {
        setProductId(id)
    }, [id])
    
    return (
        <>
            <div className="shop_buttons flex_row_center">
                <button type="button" className="btn btn-danger rounded-pill buy_btn" onClick={() => addToCart()}>
                    <img src={cartIcon} alt={getFileName(cartIcon)} width={"20rem"} />
                    COMPRAR
                </button>

                <div className="btn-group item_count" role="group">
                    <button type="button" className="btn btn-secondary rounded-start-pill" onClick={() => decrease()}>-</button>
                    <button type="button" className="btn btn-secondary">{counter}</button>
                    <button type="button" className="btn btn-secondary rounded-end-pill" onClick={() => increase()}>+</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount2