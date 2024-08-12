// React hooks
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// Custom hooks
import screenSize from '../../hooks/screenSize';
// Context
import { CartContext } from "../../context/CartContext"
// Components
import CartItems from "../CartItems/CartItems"
import EmptyCart from "../EmptyCart/EmptyCart"

const CheckOut = () => {
    const { totalPrice, totalOfProducts, cart, total } = useContext(CartContext)
    const { widthSize } = screenSize()

    const navigateTo = useNavigate()

    const handleClick = (path) => {
        navigateTo(path)
    };
    
    useEffect(() => {
        totalPrice()
    },[cart])

    return(
        <>
            <div className="container flex_col_center">
                <section className={widthSize > 769 ? "flex_start_row checkOut" : "flex_start_col checkOut"}> 

                    <article className="cartList">
                        {
                            cart.length == 0
                                ? <EmptyCart />
                                : <>
                                    <h3 className="m-3">TU CARRITO DE COMPRAS</h3>
                                    <CartItems />
                                </>
                        }
                    </article>
                    
                    {
                        cart.length == 0
                        ? ""
                        : <>
                            <article className="orderDetail">
                                <div className="title">
                                    <h2 className="px-3 py-2">Resumen del pedido</h2>
                                </div>

                                <div className="sub_total_items flex_spc_btween px-3">
                                    <p>TOTAL DE ARTÍCULOS</p>
                                    <p>{totalOfProducts()}</p>
                                </div>

                                <div className="sub_total_items flex_spc_btween px-3">
                                    <p>SUB TOTAL</p>
                                    <p>USD {total}</p>
                                </div>
                                
                                <div className="delivery flex_spc_btween px-3">
                                    <p className="sub_title">ENVÍO</p>
                                    <p>GRATIS</p>
                                </div>

                                <hr/>

                                <div className="total flex_spc_btween px-3">
                                    <b><p>TOTAL</p></b>
                                    <b><p>USD {total}</p></b>
                                </div>

                                <button type="button" className="btn btn-primary rounded-pill my-3" onClick={() => { handleClick('/checkOut') }}>REALIZAR PAGO</button>
                            </article>
                        </>
                    }
                </section>
            </div>
        </>
    )
}

export default CheckOut