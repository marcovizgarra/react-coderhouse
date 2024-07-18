import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogue from './Catalogue.jsx';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header prop={"6 cuotas sin interes con todos los bancos"}/>
                <NavBar />

                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/juegos"} element={<Catalogue/>}/>
                    <Route path={"/juegos/:platform"} element={<Catalogue/>} />
                </Routes>  
            </BrowserRouter>
        </>
    )
}

export default App