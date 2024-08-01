import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import screenSize from '/src/hooks/screenSize.jsx'
import nav_logo from '/public/img/navbar/JBL_logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx';
import navCollapsedIcon from '/public/img/navbar/bars-solid.svg';
import navExpandIcon from '/public/img/navbar/xmark-solid.svg';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const location = useLocation();
    const { widthSize, heightSize } = screenSize();
    const breakSize = 990

    const getLinkClass = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (    
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className='nav_logo' src={nav_logo} alt={"nav_logo"}
                            style={{
                                marginLeft: widthSize <= breakSize ? "0rem" : "5rem",
                                marginRight: widthSize <= breakSize ? "0rem" : "2rem",
                            }} />
                    </a>
                    
                    <div className="toggle_and_cart">
                        {widthSize <= breakSize ? <CartWidget /> :  null}

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={ () => {setCollapsed(!collapsed)}}>
                            {collapsed ? (<img src={navCollapsedIcon} alt='collapsedIcon' width="20"></img>) : (<img src={navExpandIcon} alt='expandIcon' width="20"></img>)}
                        </button>
                    </div>
                    
                    <div className="collapse navbar-collapse bg-dark" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active_link" aria-current="page" href="#" style={{marginLeft: widthSize <= breakSize ? "1.5rem" : ""}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to={"/catalogo"}>Catálogo</Link>
                                {/* <a className="nav-link link-light" aria-current="page" href="#" style={{marginLeft: widthSize <= breakSize ? "1.5rem" : ""}}>Catálogo</a> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-light" href="#">Parlantes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-light" href="#">Audio para el hogar</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link link-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Auriculares
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">In ear</a></li>
                                    <li><a className="dropdown-item" href="#">On ear</a></li>
                                    <li><a className="dropdown-item" href="#">Gamer</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {widthSize <= breakSize ? "" :  <CartWidget />}
                
            </nav>

            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {setCollapsed(!collapsed)}}>
                        {collapsed ? (<img src={navCollapsedIcon} alt='collapsedIcon'></img>) : (<img src={navExpandIcon} alt='expandIcon'></img>)}
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
                        <div className="navLogo">
                            <img src={navbar_logo}></img>
                        </div>

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={getLinkClass("/")} to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={getLinkClass("/juegos")} to={"/juegos"}>Juegos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consolas
                                </a>
                                <ul className="dropdown-menu">
                                    <li className='dropdown-li'>
                                            <Link to={"/juegos/PS5"} className="dropdown-item">Play Station 5</Link>
                                    </li>
                                    <li className='dropdown-li'>
                                        <Link to={"/juegos/PS4"} className="dropdown-item">Play Station 4</Link>
                                    </li>
                                    <li className='dropdown-li'>
                                        <Link to={"/juegos/PS3"} className="dropdown-item">Play Station 3</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <CartWidget />
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default NavBar;