import { useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ id }) => {
    const { increase, decrease, setProductId, counter } = useContext(CartContext);

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

export default ItemCount