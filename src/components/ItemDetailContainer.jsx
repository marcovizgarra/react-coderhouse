import arrayProductos from '../json/productos.json'
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === 10))
            } , 3000)
        })

        promesa
            .then(response => {
                setItem(response)
            })
    }, [])

    return(
        <>
            <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer