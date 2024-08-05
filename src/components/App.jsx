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

const App = () => {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <Header prop={"Hasta 6 cuotas sin interes con todos los bancos"}/>
                    {/* <SplideFull /> */}
                    <NavBar />
                    {/* 
                    <Producto />
                    <ItemCount stock={10}/>
                    <ItemListContainer />
                    <ItemDetailContainer /> 
                    */}
                    
                    <Routes>
                        <Route path={"/"} element={<Home />}/>
                        <Route path={"/catalogo"} element={<Catalogue2 />}/>
                        <Route path={"/parlantes"} element={<ItemDetail2 />}/>
                        <Route path={"/:type"} element={<Catalogue2/>} />
                        <Route path={"/cart"} element={<Catalogue2/>} />
                    </Routes>  
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

export default App