// React hooks
    import { useContext, useEffect, useState } from "react"

// Custom hooks
    import { CartContext } from "/src/context/CartContext.jsx"

const ProductCard = ({type}) => {
    // const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])
    const {catalogue} = useContext(CartContext)

    useEffect(() => {
        let typeOfProduct = catalogue.filter(item => item.type == type)       

        if (typeOfProduct.length > 0) {
            setFilteredItems(catalogue.filter(item => item.type == type)) 
        } else {
            setFilteredItems(catalogue)
        }
    }, [type, catalogue])

    return(
        <>
            {
                filteredItems.map((item) => (
                    <div key={item.id}  className="col my-1">
                        <div className="card border-0 product_card">
                            <img src={item.img} className="card-img-top img-fluid" alt={item.title} />
                            <div className="card-body text-center">
                                <p className="card-text p_title">{item.title}</p>
                                <p className="p_description">{item.description}</p>
                                <p className="p_price">
                                    USD {item.price}
                                    <br />
                                </p>
                                <p>Hasta 6 cuotas sin interés</p>
                                
                            </div>
                        </div>
                    </div>
                ))
            }        
        </>
    )
}

export default ProductCard