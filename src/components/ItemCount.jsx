import { useState } from "react"

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0);
    const [itemStock, setItemStock] = useState(stock);

    const increase = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrease = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
        }
    }

    const add = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter)
            setCounter(0)
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-primary rounded-start-pill" onClick={() => {decrease()}}>-</button>
                            <button type="button" className="btn btn-primary">{counter}</button>
                            <button type="button" className="btn btn-primary rounded-end-pill" onClick={() => {increase()}}>+</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-1">
                <div className="col">
                    {itemStock == 0 ? <p className="text-danger">AGOTADO (temporalmente sin stock)</p> : ""}
                    <button type="button" className="btn btn-primary rounded-pill" onClick={() => {add()}}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount