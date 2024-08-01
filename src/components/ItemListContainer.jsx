import arrayProductos from '../json/productos.json'
import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 2000)
        })

        promesa
        .then(response => {
            setItems(response)
        })
    })

    return(
        <>
            <div className="container">
                <div className="row">
                    <ItemList items={items}/>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer