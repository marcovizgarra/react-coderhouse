// React hooks
    import { useContext, useEffect, useState } from "react"

// Custom hooks
    import { MainContext } from "/src/context/MainContext.jsx"

const ProductCard = ({type}) => {
    // const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])
    const {catalogue} = useContext(MainContext)

    useEffect(() => {
        if (type == "headphone") {
            setFilteredItems(catalogue.filter(item => item.type == "headphone")) 
        } else {
            setFilteredItems(catalogue)
        }
    }, [type, catalogue])

    // useEffect(() => {
    //     const productLoader = new Promise ((resolve, reject) => {
    //         setTimeout(() => {
    //             if (catalogue) {
    //                 resolve(catalogue);
    //             } else {
    //                 reject("No fue posible realizar la carga de los productos");
    //             }
    //         }, 3000)
    //     })

    //     productLoader
    //         .then(resolve => {
    //             setProducts(resolve)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }, [])

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