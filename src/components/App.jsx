import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogue from './Catalogue.jsx';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import CartContextProvider from '../context/CartContext.jsx';
import Productos from './Producto.jsx';
import CompFireBase from './ComFireBase.jsx';
import CheckOut from './CheckOut.jsx';

const App = () => {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <Header prop={"6 cuotas sin interes con todos los bancos"}/>
                    <NavBar />

                    <Routes>
                        <Route path={"/"} element={<Home />}/>
                        <Route path={"/productos"} element={<Productos />}/>
                        <Route path={"/juegos/:platform"} element={<Catalogue/>} />
                    </Routes>  
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

export default App