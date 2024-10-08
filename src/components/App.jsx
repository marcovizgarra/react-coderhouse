// React hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from './Header/Header.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Home from './Home/Home.jsx';
import Catalogue from './Catalogue/Catalogue.jsx';
// Context
import CartContextProvider from '../context/CartContext.jsx';
// Components
import ItemDetail from './ItemDetail/ItemDetail.jsx';
import Cart from './Cart/Cart.jsx';
import Footer from './Footer/Footer.jsx';
import CheckOut from './CheckOut/CheckOut.jsx';
import CategoryRender from './CategoryRender/CategoryRender.jsx';

const App = () => {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <Header prop={"Hasta 6 cuotas sin interes con todos los bancos"}/>
                    <NavBar />

                    <Routes>
                        <Route path={"/"} element={<Home />}/>
                        <Route path={"/catalogo"} element={<Catalogue />}/>
                        <Route path={"/category/:type"} element={<CategoryRender />} />
                        <Route path={"/:id"} element={<ItemDetail />} />
                        <Route path={"/cart"} element={<Cart />} />
                        <Route path={"/checkOut"} element={<CheckOut />} />
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

export default App