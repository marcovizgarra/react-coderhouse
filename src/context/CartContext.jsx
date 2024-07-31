import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const catalogue = [
        {
            id: 1,
            img: "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd338bf9a/JBL_Tune_Flex_Product_Image_Hero_White.jpg?sw=270&sh=330&sm=fit&sfrm=png",
            title: "JBL Tune Flex",
            price: 145,
            cardDescription: "Auriculares True Wireless con cancelación de ruido"
        },
        {
            id: 2,
            img: "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw77493435/1.JBL_Tour_Pro%202_Product%20Image_Hero_Black.jpg?sw=270&sh=330&sm=fit&sfrm=png",
            title: "JBL Tour Pro 2",
            price: 382,
            cardDescription: "Auriculares True Wireless con cancelación de ruido"
        },
        {
            id: 3,
            img: "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw58ae575e/JBL_TOUR_One%20M2_Product%20Image_Hero_Black.jpg?sw=270&sh=330&sm=fit&sfrm=png",
            title: "JBL Tour Onne M2",
            price: 472,
            cardDescription: "Auriculares supraaurales inalámbricos con cancelación de ruido"
        }
    ]

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (id) => {
        const producto = catalogue.find(item => item.id == id);

        setCarrito([...carrito, producto])
    }

    const totalProductos = () => {
        return carrito.length;
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return  <CartContext.Provider value={{catalogue, carrito, agregarProducto, totalProductos, vaciarCarrito}}>
                {children}
            </CartContext.Provider>

}

export default CartContextProvider