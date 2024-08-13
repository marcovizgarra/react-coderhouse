// React hooks
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// Custom hooks
import screenSize from '../../hooks/screenSize';
// Context
import { CartContext } from '../../context/CartContext'
// Components
import ItemCount from '../ItemCount/ItemCount';
import AddToCart from '../AddToCart/AddToCart';
import Loader from '../Loader/Loader';

const ItemDetail = () => {
    const { catalogue, stock } = useContext(CartContext);
    const [product, setProduct] = useState([]);
    const { widthSize } = screenSize()

    const { id } = useParams()

    useEffect(() => {
        const filteredProduct = catalogue.filter(item => (":" + item.id) == id)
        setProduct(filteredProduct)

    }, [id, catalogue])

    const renderItemDetail = () => {
        return product.map(item => (
            <article key={item.id} className="item_conainer flex_start_col">

                <div className={"product " + (widthSize > 680 ? "flex_row_center" : "flex_col_center")}>
                    <div className="product_images flex_row_center">
                        <img src={item.img} className='img_primary' alt={item.title} />
                    </div>

                    <div className="flex_start_col product_details container-fluid">
                        <h2 className='title' >{item.title}</h2>
                        <p className='description' >{item.description}</p>
                        <hr width={"100%"} />
                        <p className='price'>USD {item.price}</p>
                        <p className='offer'>Hasta 6 cuotas sin interes de USD {Math.round(item.price / 6)} con tarjeta de crédito bancaria</p>
                        {stock < 1 ? <p className='stock_0'>AGOTADO: temporalmente sin stock</p> : ""}

                        <div className="shop_buttons flex_row_center">
                            <AddToCart />
                            <ItemCount id={item.id} />
                        </div>
                    </div>
                </div>
                <div className={'product_description' + (widthSize > 620 ? " flex_row_center" : " flex_col_center")}>
                    <div className="description">
                        <h3>{item.full_desc_title}</h3>
                        <p>{item.full_desc_content}</p>
                    </div>
                    <img src={item.img_secondary} className='img_product_secondary' alt={item.title + "_secondary_img"} />
                </div>
            </article>
        ));
    };

    return (
        <>
            {
                (product.length > 0) 
                    ? renderItemDetail() 
                    : <>
                        <div id="item_detail_loader" className="flex_col_center">
                            <Loader/>
                        </div>
                    </> 
            }
        </>
    )
}

export default ItemDetail