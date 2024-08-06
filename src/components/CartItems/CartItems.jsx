import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'

const CartItems = () => {
    const {cart, catalogue} = useContext(CartContext);
    const [products, setProducts] = useState([]);

        

    return(
        <>

        </>
    )
}

export default CartItems