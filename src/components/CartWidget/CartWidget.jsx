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

const CartWidget = ({mRight}) => {    
    const {itemsOnCart} = useContext(CartContext)
    const navigateTo = useNavigate()

    const handleClick = (path) => {
        navigateTo(path)
    };

    return (
        <>
            <button type="button" className="btn btn-primary position-relative" style={{marginRight: mRight}} onClick={() => { handleClick('/cart') }}>
                <img src={cartIcon} alt={getFileName(cartIcon)} width={"25rem"} />
                <CartNotification quantity={itemsOnCart}/>
            </button>
        </>
    )
}

export default CartWidget