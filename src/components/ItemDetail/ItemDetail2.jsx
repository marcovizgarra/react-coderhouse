// React hooks
import { useContext, useEffect, useState } from 'react'
// Context
import { MainContext } from '../../context/MainContext'

const ItemDetail2 = ({id}) => {
    const {catalogue, carrito, agregarProducto, totalProductos, vaciarCarrito} = useContext(MainContext);
    const [product, setProduct] = useState([]);

    const renderItemDetail = () => {
        return product.map(item => (
            <article key={item.id} className="item_conainer flex_col_center">
            
            <div className="product flex_row_center">
                <div className="product_images">
                    <img src={item.img} alt={item.title} width={"400px"}/>
                </div>

                <div className="flex_start_col product_details container-fluid">
                    <h2 className='p_title' >{item.title}</h2>
                    <p className='p_description' >{item.description}</p>
                    <hr width={"100%"}/>
                    <p className='p_price'>USD {item.price}</p>
                    <p className='p_offer'>Hasta 6 cuotas sin interes de USD {(item.price/6)} con tarjeta de crédito bancaria</p>
                </div>
            </div>
        </article>  
        ));
    };

    useEffect(() => {
        setProduct(catalogue.filter(item => item.id == id))
    }, [catalogue]) 

    return(
        <> 
            {(product.length > 0) ? renderItemDetail() : <h1>cargando---</h1>}
        </>
    )
}

export default ItemDetail2