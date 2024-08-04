// React hooks
import { useContext, useEffect, useState } from "react"

// Images
import cartIcon from '/public/img/cartWidget/cart-shopping-solid.svg'

// Context
import { MainContext } from "../../context/MainContext";
import { getFileName } from "../../js/functions";

const ItemCount2 = ({id}) => {
    const {catalogue, cart, setCart} = useContext(MainContext);
    const [stock, setStock] = useState(0);
    const [counter, setCounter] = useState(1);
    const [product, setProduct] = useState([]);

    const findIndexProd = (id) => {
        let indexProduct = cart.findIndex(item => item.id == id)
        return indexProduct
    }

    useEffect(() => {
        if (catalogue.length > 0) {
            setProduct(...catalogue.filter(item => item.id == id))
            setStock(product.stock)   
        }
    }, [product])

    const increase = () => {
        if (stock > 0 & counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrease = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const addToCart = () => {
        if (stock < 1) {
            console.log("no hay stock");
            console.log(cart);
        } else if (cart.length > 0 && cart.some(item => item.id == id)) {
            let indexProduct = findIndexProd(id)
            cart[indexProduct]['quantity'] = cart[indexProduct]['quantity'] + counter
            
            setStock(stock - counter)
            setCounter(1)
            console.log(cart);
        } else {
            setCart(cart => [...cart, {
                id : product.id,
                quantity: counter,
            }])

            setStock(stock - counter)
            setCounter(1)
        }
    }
    
    return(
        <>
            <div className="shop_buttons flex_row_center">
                <button type="button" className="btn btn-danger rounded-pill buy_btn" onClick={() => addToCart()}>
                    <img src={cartIcon} alt={getFileName(cartIcon)} width={"20rem"}/>
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