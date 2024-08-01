import { useEffect, useState } from "react"
import productsArray from '/src/json/productos.json'

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productLoader = new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (productsArray) {
                    resolve(productsArray);
                } else {
                    reject("No fue posible realizar la carga de los productos");
                }
            }, 3000)
        })

        productLoader
            .then(resolved => {
                setProducts(resolved)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return(
        <>
            <div className="container">
                
            </div>

            {
                products.map((item) => (
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