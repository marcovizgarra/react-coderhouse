// React hooks
import { createContext, useState, useEffect } from "react";
// Files
import productsArray from '/src/json/productos.json'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [productId, setProductId] =useState(0);
    const [cart, setCart] = useState([]);
    const [catalogue, setCatalogue] = useState([]);
    const [itemsOnCart, setItemsOnCart] = useState(0);
    const [stock, setStock] = useState(0);
    const [counter, setCounter] = useState(1);
    const [product, setProduct] = useState([]);

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

    useEffect(() => {
        if (catalogue.length > 0) {
            const cartQuant = quantOnCart(productId)
            const productExists = catalogue.find(item => item.id == productId);

            if (productExists) {
                setProduct(productExists)
                setStock(productExists.stock - cartQuant)
            }
                console.log("quant on cart: " + quantOnCart(productId));
                console.log("stock uEff: " + stock);   
        }
    }, [product, productId, cart])

    const totalOfProducts = () => {
        return cart.reduce((acc, obj) => {
            return acc + obj.quantity
        }, 0)
    }

    const findIndexProd = (productId) => {
        let indexProduct = cart.findIndex(item => item.prodId == productId)
        return indexProduct
    }

    // Si el producto está en el carrito devuelve la cantidad agregada, si el producto no está devuelve 0
    const quantOnCart = (productId) => {
        const index = findIndexProd(productId);

        if (index !== -1) {
            return cart[index].quantity;
        } else {
            return 0;
        }
    }

    const increase = () => {
        if (stock > 0 && counter <= stock && stock - counter > 0) {
        setCounter(counter + 1)
        console.log("stock: " + stock);            
    }
    }

    const decrease = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const addToCart = () => {
        if (stock < 1) {
            console.log("no hay stock");
            console.log(cart);
        } else {
            const index = findIndexProd(productId);
            if (index !== -1) {
                const updatedCart = [...cart];
                updatedCart[index].quantity += counter;
                setCart(updatedCart);
            } else {
                setCart([...cart, {
                    prodId: productId,
                    quantity: counter
                }]);
            }
            
            setItemsOnCart(totalOfProducts());
            setStock(stock - counter);
            setCounter(1);

            console.log("qOnCart: " + quantOnCart(productId));
            console.log(cart);
            console.log("stock: " + stock);
        }
    };

    return  <CartContext.Provider value={{catalogue, cart, itemsOnCart, counter, increase, decrease, addToCart, setProductId}}>
                {children}
            </CartContext.Provider>

}

export default CartContextProvider