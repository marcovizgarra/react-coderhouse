// React hooks
import { createContext, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [catalogue, setCatalogue] = useState([]);
    const [product, setProduct] = useState([]);
    const [productId, setProductId] = useState(0);
    const [stock, setStock] = useState(0);
    const [cart, setCart] = useState([]);
    const [itemsOnCart, setItemsOnCart] = useState(0);
    const [counter, setCounter] = useState(1);
    const [total, setTotal] = useState(0)

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
    }, [])

    useEffect(() => {
        if (catalogue.length > 0) {
            const cartQuant = quantOnCart(productId)
            const productExists = catalogue.find(item => item.id == productId);

            if (productExists) {
                setProduct(productExists)
                setStock(productExists.stock - cartQuant)
            }
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
            console.warn("no hay stock");
        } else {
            const index = findIndexProd(productId);
            if (index !== -1 && cart[findIndexProd(productId)] !== -1) {
                updatedCart = [...cart];
                updatedCart[index].quantityOnCart += counter;
            } else {
                const productAdd = { ...product, quantityOnCart: counter };
                delete productAdd.stock;
                updatedCart = [...cart, productAdd];
            }
            setCart(updatedCart);
            setStock(stock - counter);
            setCounter(1);

            Toastify({
                text: "PRODUCTO AÑADIDO AL CARRITO!",
                position: "center",
                gravity: "bottom",
                duration: 3000,
                style: {
                    background: "green",
                }
            }).showToast();
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

    const totalPrice = () => {
        const newCart = [...cart];
        let operation = 0;

        newCart.forEach(item => {
            operation += item.quantityOnCart * item.price
        });

        setTotal(operation)
    }

    return <CartContext.Provider value={{ catalogue, cart, setCart, itemsOnCart, counter, stock, total, totalPrice, increase, decrease, addToCart, deleteFromCart, setProductId, totalOfProducts, }}>
        {children}
    </CartContext.Provider>

}

export default CartContextProvider