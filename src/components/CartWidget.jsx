import cartIcon from '../assets/img/cartWidget/cart-shopping-solid.svg'

const CartWidget = () => {
    return (
        <>
            <div id="cartContainer">
                <img src={cartIcon} alt="cartIcon"/>
                <p>
                    1
                </p>
            </div>
        </>
    )
}

export default CartWidget