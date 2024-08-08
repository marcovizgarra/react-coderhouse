// React hooks
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// Context
import { CartContext } from '../../context/CartContext'
// Components
import ItemCount2 from '../ItemCount2/ItemCount2';
import AddToCart from '../AddToCart/AddToCart';

const ItemDetail2 = () => {
    const {catalogue} = useContext(CartContext);
    const [product, setProduct] = useState([]);

    const { id } = useParams()
    
    useEffect(() => {
        const filteredProduct = catalogue.filter(item => (":" + item.id) == id)
        setProduct(filteredProduct)

        console.log(catalogue);
        console.log(filteredProduct);        
        
    }, [id, catalogue]) 

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
                    <p className='p_offer'>Hasta 6 cuotas sin interes de USD {Math.round(item.price/6)} con tarjeta de crédito bancaria</p>
                    
                    <div className="shop_buttons flex_row_center">
                        <AddToCart />                            
                        <ItemCount2 id={item.id}/>
                    </div>           
                </div>
            </div>
        </article>  
        ));
    };

    return(
        <> 
            {(product.length > 0) ? renderItemDetail() : <h1>cargando---</h1>}
        </>
    )
}

export default ItemDetail2