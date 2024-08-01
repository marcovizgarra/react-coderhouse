import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogue from './Catalogue/Catalogue2.jsx'; // OK
import Header from './Header/Header.jsx'; // OK
import NavBar from './NavBar/NavBar.jsx'; // OK
import Home from './Home/Home.jsx'; // OK
import CartContextProvider from '../context/CartContext.jsx';
import Productos from './Producto.jsx';
import ItemListContainer from './ItemListContainer.jsx';
import ItemDetailContainer from './ItemDetailContainer.jsx';
import Catalogue2 from './Catalogue/Catalogue2.jsx';

const App = () => {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <Header prop={"6 cuotas sin interes con todos los bancos"}/>
                    <NavBar />
                    {/* <ItemCount stock={10}/>
                    <ItemListContainer />
                    <ItemDetailContainer /> */}

                    <Routes>
                        <Route path={"/"} element={<Home />}/>
                        <Route path={"/productos"} element={<Productos />}/>
                        <Route path={"/catalogo"} element={<Catalogue2 />}/>
                        <Route path={"/juegos/:platform"} element={<Catalogue/>} />
                    </Routes>  
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

export default App