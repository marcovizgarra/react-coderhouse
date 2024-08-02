import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header.jsx'; // OK
import NavBar from './NavBar/NavBar.jsx'; // OK
import Home from './Home/Home.jsx'; // OK
import CartContextProvider from '../context/MainContext.jsx';
import Producto from './Producto.jsx';
import ItemListContainer from './ItemListContainer.jsx';
import ItemDetailContainer from './ItemDetailContainer.jsx';
import Catalogue2 from './Catalogue/Catalogue2.jsx'; // OK
import MainContextProvider from '../context/MainContext.jsx';
import ProductCard from './ProductCard/ProductCard.jsx';

const App = () => {
    return (
        <>
            <MainContextProvider>
                <BrowserRouter>
                    <Header prop={"Hasta 6 cuotas sin interes con todos los bancos"}/>
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
                        <Route path={"/:type"} element={<Catalogue2/>} />
                    </Routes>  
                </BrowserRouter>
            </MainContextProvider>
        </>
    )
}

export default App