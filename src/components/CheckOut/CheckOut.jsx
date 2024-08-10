import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItems from "../CartItems/CartItems";

const CheckOut = () => {
    const { cart, totalPrice } = useContext(CartContext);

    const orderCreator = () => {
        if (input_name == '') {
            return false
        };

        if (e_mail == '') {
            return false
        };

        if (contact == '') {
            return false
        };

        const order = {
            buyer : {
                name: input_name,
                phone: contact,
                email: e_mail,
            },
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
            })),
            total: totalPrice()
        }

        // const db = getFirestore();
        // const orderCollection = collection(db, "orders");
        // addDoc(orderCollection, order)
        //     .then(response => {

        //     })
    };

    return (
        <>
            <section className="check_out flex_row_center">
                <div className="form_container">
                    <h1>ENVIO A DOMICILIO</h1>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className="cart_detail">
                    <h2>Resumen del pedido</h2>
                    {
                        cart.map((item) => (
                            <div key={item.id} className="product">
                                <img src={item.img} alt={item.title} />
                                <h4>{item.title}</h4>
                                <p>Cód. producto:</p>
                                <p className="cod_product">{item.id}</p>
                                <p>Cantidad: {item.quantityOnCart}</p>
                                <p>U$D {item.quantityOnCart * item.price}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

        </>
    )
}

export default CheckOut