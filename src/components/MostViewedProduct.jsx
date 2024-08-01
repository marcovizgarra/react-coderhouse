import { useContext } from "react";
import { CartContext } from "../context/CartContext"

const MostViewedProduct = () => {
    const {catalogue, totalProductos, carrito} = useContext(CartContext);
    
    return(
        <>
            <section className="most_viewed_product">
                <h1>Productos más vistos</h1>

                <div className="card_container">
                    {
                        catalogue.map((item) => (
                            <div key={item.id} className="row">
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src={item.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.cardDescription}</p>
                                            <b><p className="card-text text-warning price">U$D {item.price}</p></b>
                                            <button className="btn btn-primary rounded-pill" onClick={() => { agregarProducto(item.id) }}>Agregar al carrito</button>
                                            <p>¡Hasta 6 cuotas sin interés!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default MostViewedProduct