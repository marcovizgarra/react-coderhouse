import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import navbar_logo from '/public/img/navbar/God-of-War-Logo-PNG-Photos.png';
import navCollapsedIcon from '/public/img/navbar/bars-solid.svg';
import navExpandIcon from '/public/img/navbar/xmark-solid.svg';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (    
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                                <Link className="nav-link" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/juegos"}>Juegos</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Historia</a>
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
            </nav>
        </>
    )
}

export default NavBar;