import { useState } from 'react';
import CartWidget from './CartWidget.jsx';
import InsertImg from './InsertImg.jsx'

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
                        {collapsed ? (<InsertImg img={navCollapsedIcon} />) : (<InsertImg img={navExpandIcon} />)}
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
                        <div className="navLogo">
                            <img src={navbar_logo}></img>
                        </div>

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Juegos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Historia</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consolas
                                </a>
                                <ul className="dropdown-menu">
                                    <li className='dropdown-li'><a className="dropdown-item" href="#">Play Station 5</a></li>
                                    <li className='dropdown-li'><a className="dropdown-item" href="#">Play Station 4</a></li>
                                    <li className='dropdown-li'><a className="dropdown-item" href="#">Play Station 3</a></li>
                                    <li className='dropdown-li'><a className="dropdown-item" href="#">Play Station 2</a></li>
                                    <li className='dropdown-li'><a className="dropdown-item" href="#">Play Station Portatil</a></li>
                                    <li className='dropdown-li'><a className="dropdown-item" href="#">Mobile</a></li>
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