const CheckOut = () => {
    return(
        <>
            <div className="container flex_col_center">
                <section className="flex_row_center checkOut">
                    <article className="cartList flex_col_center">
                        <h3>TU CARRITO DE COMPRAS</h3>
                    </article>

                    <article className="orderDetail flex_start_col">
                        <div className="title">
                            <h2>Resumen del pedido</h2>
                        </div>
                        <p>Total de artículos</p>
                        <p>Envío</p>
                        <button type="button" className="btn btn-primary rounded-pill">REALIZAR PAGO</button>
                    </article>
                </section>
            </div>
        </>
    )
}

export default CheckOut