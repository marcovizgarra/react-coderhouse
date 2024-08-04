// Hooks
import { createContext, useState } from "react";
import { useEffect } from "react";

// Files
import productsArray from '/src/json/productos.json'

export const MainContext = createContext();

const MainContextProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [catalogue, setCatalogue] = useState([]);

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
            .then(resolve => {
                setCatalogue(resolve)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])   

    // const agregarProducto = (id) => {
    //     const producto = catalogue.find(item => item.id == id);

    //     setCarrito([...carrito, producto])
    // }

    // const totalProductos = () => {
    //     return carrito.length;
    // }

    // const vaciarCarrito = () => {
    //     setCarrito([])
    // }

    return  <MainContext.Provider value={{catalogue, cart, setCart}}>
                {children}
            </MainContext.Provider>

}

export default MainContextProvider