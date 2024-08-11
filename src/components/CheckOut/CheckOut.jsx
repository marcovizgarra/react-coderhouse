// React hooks
import { useContext, useEffect, useState } from "react"
// Fire base
import { addDoc, collection, getFirestore } from "firebase/firestore"
// Cart
import { CartContext } from "../../context/CartContext"
// Components
import OrderCompleteMessage from "../OrderCompleteMessage/OrderCompleteMessage";

const CheckOut = () => {
    const { cart, setCart, total, totalOfProducts } = useContext(CartContext);
    const [totalProdOrder, setTotalProdOrder] = useState(0)
    const [orderId, setOrderId] = useState("")
    // Form
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [e_mail, setE_mail] = useState("");
    const [street, setStreet] = useState("");
    const [addressNumber, setAddressNumber] = useState(0);
    const [city, setCity] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    useEffect(() => {
        setTotalProdOrder(totalOfProducts())
    }, [cart])

    const orderCreator = () => {
        if (name == '') {
            return false
        };

        if (phone == 0) {
            return false
        };

        if (e_mail == '') {
            return false
        };

        if (street == '') {
            return false
        };

        if (addressNumber == 0) {
            return false
        };

        if (city == '') {
            return false
        };

        const order = {
            buyer: {
                name: name,
                phone: phone,
                email: e_mail,
                street: street,
                addressNumber: addressNumber,
                city: city,
                newsletter: newsletter,
            },
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantityOnCart
            })),
            total: total,
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
            .then(response => {
                setOrderId(response.id)
            })

        setCart([])
        setTotalProdOrder(0)
    };

    return (
        <>
            {
                orderId
                    ? <>
                        <OrderCompleteMessage idOrder={orderId} />
                    </>
                    : <>
                        <section className="check_out flex_row_center">
                            <div className="form_container">
                                <h1>ENVIO A DOMICILIO</h1>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="e_mail" className="form-label">E-mail</label>
                                        <input type="text" className="form-control" id="e_mail" onInput={(e) => { setE_mail(e.target.value) }} />
                                        <div id="emailHelp" className="form-text">Ingresá in e-mail válida para poder recibir los detalles de la compra</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Teléfono</label>
                                        <input type="number" className="form-control" id="phone" onInput={(e) => { setPhone(e.target.value) }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="input_name" className="form-label">Nombre completo</label>
                                        <input type="text" className="form-control" id="input_name" onInput={(e) => { setName(e.target.value) }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="street" className="form-label">Calle</label>
                                        <input type="text" className="form-control" id="street" onInput={(e) => { setStreet(e.target.value) }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="adress_number" className="form-label">Númeración</label>
                                        <input type="number" className="form-control" id="adress_number" onInput={(e) => { setAddressNumber(e.target.value) }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="city" className="form-label">Localidad</label>
                                        <input type="text" className="form-control" id="city" onInput={(e) => { setCity(e.target.value) }} />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="newsletter_check" />
                                        <label className="form-check-label" htmlFor="newsletter_check" onInput={(e) => { setNewsletter(e.target.value) }}>Suscribirme al Newsletter de JBL</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={(e) => {orderCreator(); e.preventDefault()}}>Confirmar pedido</button>
                                </form>
                            </div>

                            <div className="cart_detail">
                                <h2>Resumen del pedido  ({totalProdOrder})</h2>
                                {
                                    cart.map((item, index) => (
                                        <div key={item.id} className="container container_details flex_col_center">
                                            <div className="col product flex_row_center">
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
                                <h5>TOTAL: U$D: {total}</h5>
                                <p className="delivery">Envío gratis</p>
                            </div>
                            <p>{orderId ? orderId : ""}</p>
                        </section>
                    </>
            }
        </>
    )
}

export default CheckOut