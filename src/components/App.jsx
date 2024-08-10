// React hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components 
import Header from './Header/Header.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Home from './Home/Home.jsx';
import Catalogue2 from './Catalogue/Catalogue2.jsx';

// Context
import CartContextProvider from '../context/CartContext.jsx';
// Styles
// import SplideFull from './SlpideFull.jsx';
import ItemDetail2 from './ItemDetail/ItemDetail2.jsx';
import CheckOut from './CheckOut/CheckOut.jsx';

const App = () => {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <Header prop={"Hasta 6 cuotas sin interes con todos los bancos"}/>
                    <NavBar />

                    <Routes>
                        <Route path={"/"} element={<Home />}/>
                        <Route path={"/catalogo"} element={<Catalogue2 />}/>
                        <Route path={"/parlantes"} element={<ItemDetail2 />}/>
                        <Route path={"/:id"} element={<ItemDetail2 />} />
                        <Route path={"/checkout"} element={<CheckOut />} />
                    </Routes>  
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

export default App