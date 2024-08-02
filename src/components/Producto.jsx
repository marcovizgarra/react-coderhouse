// Hooks
import { useContext } from "react"

// Custom hooks
import { MainContext } from "../context/MainContext"

const Productos = () => {
    const {catalogue, agregarProducto, totalProductos, carrito} = useContext(MainContext);

    return(
        <>
            <div className="container">
                {
                    catalogue.map((prod) => (
                        <div key={prod.id} className="row">
                            <div className="col-md-3">                       
                                <div className="card">
                                    <img src={prod.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{prod.title}</h5>
                                            <p className="card-text">{prod.cardDescription}</p>
                                            <b>
                                                <p className="card-text text-warning">USD {prod.price}</p>
                                            </b>
                                            <button className="btn btn-primary" onClick={() => {agregarProducto(prod.id)}}>Agregar (+)</button>                                            
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="row">
                <div className="col">
                    <h3> Total productos {totalProductos()} </h3>
                </div>
            </div>

            <div className="row">
                <div className="col">
                <table className="table">
                        <tbody>
                            {
                                carrito.map((prod, index) => (
                                    <tr key={prod.id + index}>
                                        <td className="align-middle">
                                            <img src={prod.img} alt={prod.title} width={60}/>
                                        </td>
                                        <td  className="align-middle">{prod.title}</td>
                                        <td  className="align-middle">USD {prod.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Productos