import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'

const CartItems = () => {
    const {cart, catalogue} = useContext(CartContext);

    return(
        <>
            <div className="container">
                {
                    cart.map((item) => (
                        <section key={item.id} className="row">
                            <div className="col img_container">
                                <img className="item_img" src={item.img} alt={item.title}/>
                            </div>
                            
                            <div className="col title">
                                <h4>{item.title}</h4>
                            </div>
                            
                            <p className="col">USD {item.price}</p>
                            <p className="col">{item.quantityOnCart}</p>
                            
                            <div className="col">
                                USD {Math.round(item.price * item.quantityOnCart)}
                            </div>
                            <div className="col">
                                <p>Eliminar</p>
                            </div>
                        </section>
                    ))
                }
            </div>
        </>
    )
}

export default CartItems