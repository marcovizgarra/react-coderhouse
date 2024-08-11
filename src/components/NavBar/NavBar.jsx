// React hooks
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Images
import nav_logo from '/public/img/navbar/JBL_logo.png'
import navCollapsedIcon from '/public/img/navbar/bars-solid.svg';
import navExpandIcon from '/public/img/navbar/xmark-solid.svg';
// Components
import screenSize from '/src/hooks/screenSize.jsx'
import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const location = useLocation();
    const { widthSize, heightSize } = screenSize();
    const breakSize = 990

    const getLinkClass = (path) => {
        return location.pathname == path ? 'nav-link active_link' : 'nav-link link-light';
    };

    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">

                    <Link to={"/"}>
                        <img className='nav_logo' src={nav_logo} alt={"nav_logo"} style={{ marginLeft: widthSize <= breakSize ? "0rem" : "5rem", marginRight: widthSize <= breakSize ? "0rem" : "2rem", }} />
                    </Link>

                    <div className="toggle_and_cart flex_row_center">
                        {widthSize <= breakSize ? <CartWidget mRight={"1rem"} /> : null}

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setCollapsed(!collapsed) }}>
                            {collapsed ? (<img src={navCollapsedIcon} alt='collapsedIcon' width="20"></img>) : (<img src={navExpandIcon} alt='expandIcon' width="20"></img>)}
                        </button>
                    </div>

                    <div className="collapse navbar-collapse bg-dark" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className={getLinkClass("/")} style={{ marginLeft: widthSize <= breakSize ? "1.5rem" : "" }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/catalogo"} className={getLinkClass("/catalogo")} style={{ marginLeft: widthSize <= breakSize ? "1.5rem" : "" }}>Catálogo</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/category/:speaker"} className={getLinkClass("/category/:speaker")} style={{ marginLeft: widthSize <= breakSize ? "1.5rem" : "" }}>Parlantes</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/category/:headphone"} className={getLinkClass("/category/:headphone")} style={{ marginLeft: widthSize <= breakSize ? "1.5rem" : "" }}>Auriculares</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/category/:home_theater"} className={getLinkClass("/category/:home_theater")} style={{ marginLeft: widthSize <= breakSize ? "1.5rem" : "" }}>Audio para el hogar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {widthSize <= breakSize ? "" : <CartWidget mRight={"4rem"} />}
            </nav>
        </>
    )
}

export default NavBar;