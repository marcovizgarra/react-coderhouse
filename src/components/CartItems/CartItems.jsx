// React hooks
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
// Custom hooks 
import screenSize from '../../hooks/screenSize';
// Images
import trashIcon from '/public/img/cartItems/trash-solid-red.svg'
// Functions
import { getFileName } from "../../js/functions"

const CartItems = () => {
    const { cart, deleteFromCart, catalogue } = useContext(CartContext);
    const { widthSize } = screenSize()

    return(
        <>
            <div className="container flex_col_center">
                {
                    widthSize > 769
                        ? <>
                            <div className="container items_on_cart">
                                <div className="sub_titles row">
                                    <div className="col"></div>
                                    <div className="col">PRODUCTO</div>
                                    <div className="col">POR UNIDAD</div>
                                    <div className="col">CANTIDAD</div>
                                    <div className="col">TOTAL</div>
                                    <div className="col"></div>
                                </div>
                                {
                                    cart.map((item) => (
                                        <section key={item.id} className="row">
                                            <div className="col img_container">
                                                <img className="item_img" src={item.img} alt={item.title} />
                                            </div>

                                            <div className="title col">
                                                <h4 className="m-0">{item.title}</h4>
                                            </div>

                                            <p className="col">U$D {item.price}</p>

                                            <div className="col">
                                                <p className="bg-secondary rounded-pill p-1 mt-3 text-light">{item.quantityOnCart}</p>
                                            </div>

                                            <div className="col">
                                                U$D {Math.round(item.price * item.quantityOnCart)}
                                            </div>

                                            <div className="col">
                                                <img src={trashIcon} alt={getFileName(trashIcon)} className="cursor_pointer" width={25} onClick={() => { deleteFromCart(item.id) }} />
                                            </div>
                                        </section>
                                    ))
                                }
                            </div>
                        </>
                        : <>
                            <div className="cart_detail">
                                {
                                    cart.map((item, index) => (
                                        <div key={item.id} className="container container_details flex_col_center">
                                            <div className={"col product" + (widthSize > 427 ? " flex_row_center" : " flex_col_center" )}>
                                                <img src={item.img} alt={item.title} />
                                                <div className="row properties">
                                                    <h4>{item.title}</h4>
                                                    <p>Cód. producto:</p>
                                                    <p className="cod_product">{item.id}</p>
                                                    <p>Cantidad: {item.quantityOnCart}</p>
                                                    <p>Total: U$D {item.quantityOnCart * item.price}</p>
                                                </div>
                                            </div>
                                            {index < (cart.length - 1) ? <hr width={"80%"} /> : ""}
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default CartItems