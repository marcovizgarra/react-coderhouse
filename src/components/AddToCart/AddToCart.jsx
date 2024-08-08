// React hooks
import { useContext } from 'react'
// Functions
import { getFileName } from "../../js/functions";
// Images
import cartIcon from '/public/img/cartWidget/cart-shopping-solid.svg'
// Context
import { CartContext } from '../../context/CartContext'

const AddToCart = () => {
    const {addToCart} = useContext(CartContext);

    return (
        <>
            <button type="button" className="btn btn-danger rounded-pill buy_btn" onClick={() => addToCart()}>
                <img src={cartIcon} alt={getFileName(cartIcon)} width={"20rem"} />
                COMPRAR
            </button>
        </>
    )
}

export default AddToCart
