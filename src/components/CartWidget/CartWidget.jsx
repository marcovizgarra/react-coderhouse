// React hooks
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Functions
import { getFileName } from '../../js/functions';
// Context
import { CartContext } from '../../context/CartContext';
// Images
import cartIcon from '/public/img/cartWidget/cart-shopping-solid.svg';

const CartNotification = ({quantity}) => {   
    return(
        <>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {quantity}
            </span>
        </>
    )
};

const CartWidget = ({ mRight }) => {    
    const { cart, itemsOnCart } = useContext(CartContext)
    const navigateTo = useNavigate()

    const handleClick = (path) => {
        navigateTo(path)
    };

    return (
        <>
            <button type="button" className={(cart.length == 0 ? "empty_cart_btn " : "cart_items_btn rounded-pill ") + "btn btn-primary position-relative"} style={{marginRight: mRight}} onClick={() => { handleClick('/cart') }}>
                <img src={cartIcon} alt={getFileName(cartIcon)} width={"25rem"} />
                {
                    cart.length == 0
                        ? ""
                        : <CartNotification quantity={itemsOnCart}/>
                }
            </button>
        </>
    )
}

export default CartWidget