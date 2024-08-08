import CartItems from "../CartItems/CartItems"

const CheckOut = () => {
    return(
        <>
            <div className="container flex_col_center">
                <section className="flex_start_row checkOut">
                    
                    <article className="cartList">
                        <h3 className="m-3">TU CARRITO DE COMPRAS</h3>
                        <CartItems />
                    </article>

                    <article className="orderDetail">
                        <div className="title">
                            <h2 className="px-3 py-2">Resumen del pedido</h2>
                        </div>

                        <div className="sub_total_items flex_spc_btween px-3">
                            <p>TOTAL DE ARTÍCULOS</p>
                            <p>$1.000</p>
                        </div>
                        
                        <div className="delivery flex_spc_btween px-3">
                            <p className="sub_title">ENVÍO</p>
                            <p>GRATIS</p>
                        </div>

                        <hr/>

                        <div className="total flex_spc_btween px-3">
                            <b><p>TOTAL</p></b>
                            <b><p>$1.000</p></b>
                        </div>

                        <button type="button" className="btn btn-primary rounded-pill my-3">REALIZAR PAGO</button>
                    </article>
                </section>
            </div>
        </>
    )
}

export default CheckOut