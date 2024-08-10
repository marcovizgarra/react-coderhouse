// React hooks
import { createContext, useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [catalogue, setCatalogue] = useState([]);
    const [product, setProduct] = useState([]);
    const [productId, setProductId] =useState(0);
    const [stock, setStock] = useState(0);
    const [cart, setCart] = useState([]);
    const [itemsOnCart, setItemsOnCart] = useState(0);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "items");
        getDocs(productsCollection)
            .then(snapShot => {
                if (snapShot.docs.length > 0) {
                    setCatalogue(snapShot.docs.map(document => ({
                        id: document.id, ...document.data()
                    })))
                } else {
                    console.error("No fue posible cargar la colección de lementos");
                }
            })
        console.log(catalogue);
    }, [])

    // useEffect(() => {
    //     const productLoader = new Promise ((resolve, reject) => {
    //         setTimeout(() => {
    //             if (productsArray) {
    //                 resolve(productsArray);
    //             } else {
    //                 reject("No fue posible realizar la carga de los productos");
    //             }
    //         }, 3000)
    //     })

    //     productLoader
    //         .then(resolve => {
    //             setCatalogue(resolve)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }, [])   

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

    useEffect(() => {
        setItemsOnCart(totalOfProducts())
    }, [cart])

    // Devuelve el total de los productos que existen en el carrito
    const totalOfProducts = () => {
        return cart.reduce((acc, obj) => {
            return acc + obj.quantityOnCart
        }, 0)
    }

    // Devuelve el índice del producto renderizado en ItemDetail
    const findIndexProd = (productId) => {
        return cart.findIndex(item => item.id == productId)
    }

    // Si el producto está en el carrito devuelve la cantidad agregada, si el producto no está devuelve 0
    const quantOnCart = (id) => {

        const index = findIndexProd(id);

        if (index !== -1) {
            return cart[index].quantityOnCart;
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
        let updatedCart = ([...cart])

        if (stock < 1) {
            console.log("no hay stock");
            console.log(cart);
        } else {
            const index = findIndexProd(productId);
            if (index !== -1 && cart[findIndexProd(productId)] !== -1) {
                console.log("id producto", productId);
                
                updatedCart = [...cart];
                updatedCart[index].quantityOnCart += counter;
                console.log("va por el true");
            } else {
                const productAdd = {...product, quantityOnCart: counter};
                delete productAdd.stock;
                updatedCart = [...cart, productAdd];
                    console.log("va por el else");
            }
            setCart(updatedCart);

            setStock(stock - counter);
            setCounter(1);

            console.log("qOnCart: " + quantOnCart(productId));
            console.log(cart);
            console.log("stock: " + stock);
        }
    };

    const deleteFromCart = (id) => {
        const index = findIndexProd(id)
        let updatedCart = [...cart]

        if (index !== -1) {
            updatedCart.splice(index, 1);
            setCart(updatedCart)
        }
        console.log(cart);
    }

    return  <CartContext.Provider value={{catalogue, cart, itemsOnCart, counter, increase, decrease, addToCart, deleteFromCart, setProductId, totalOfProducts}}>
                {children}
            </CartContext.Provider>

}

export default CartContextProvider