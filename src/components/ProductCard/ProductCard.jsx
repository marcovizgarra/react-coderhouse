// React hooks
import { useContext, useEffect, useState } from "react"
// Custom hooks
import { CartContext } from "/src/context/CartContext.jsx"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ type }) => {
    const [filteredItems, setFilteredItems] = useState([]);
    const { catalogue } = useContext(CartContext);

    const navigateTo = useNavigate();

    const handleClick = (path) => {
        navigateTo(path)
    }

    useEffect(() => {
        let typeOfProduct = catalogue.filter(item => item.type == type)

        if (typeOfProduct.length > 0) {
            setFilteredItems(catalogue.filter(item => item.type == type))
        } else {
            setFilteredItems(catalogue)
        }
    }, [type, catalogue])

    return (
        <>
            <div className="row row-cols-4 flex_row_center wrap">
                {
                    filteredItems.map((item) => (
                        <div key={item.id} className="card col cursor_pointer product_card" onClick={() => { handleClick("/:" + item.id) }}>
                            <img src={item.img} className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title title">{item.title}</h5>
                                    <div className="description_container">
                                        <p className="card-text description">{item.description}</p>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item price">U$D {item.price}</li>
                                    <li className="list-group-item">Hasta 6 cuotas sin interés</li>
                                </ul>
                                <div className="card-body">
                                    <button type="button" className="p-2 btn-primary rounded-pill btn_JBL" onClick={() => { handleClick("/:" + item.id) }}>Ver producto</button>
                                </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductCard