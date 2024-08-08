import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'

const CartItems = () => {
    const {cart, catalogue} = useContext(CartContext);

    return(
        <>
            <div className="container items_on_cart">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">PRODUCTO</div>
                    <div className="col">PRECIO POR UNIDAD</div>
                    <div className="col">CANTIDAD</div>
                    <div className="col">TOTAL</div>
                    <div className="col"></div>
                </div>
                {
                    cart.map((item) => (
                        <section key={item.id} className="row">
                            <div className="col img_container">
                                <img className="item_img" src={item.img} alt={item.title}/>
                            </div>
                            
                            <div className="col title">
                                <h4 className="m-0">{item.title}</h4>
                            </div>
                            
                            <p className="col">U$D {item.price}</p>
                            <p className="col">{item.quantityOnCart}</p>
                            
                            <div className="col">
                                USD {Math.round(item.price * item.quantityOnCart)}
                            </div>

                            <div className="col">
                                <p className="m-0">Eliminar</p>
                            </div>
                        </section>
                    ))
                }
            </div>
        </>
    )
}

export default CartItems