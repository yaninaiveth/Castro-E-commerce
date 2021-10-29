import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#">E-commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Información</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to='/burger' className="dropdown-item">Promociones de Hamburguesas</Link></li>
                                    <li><Link to='/pizza' className="dropdown-item">Promociones de Pizza</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/cart' className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <CartWidget/>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="dropdown-item">Artículo</li>
                                    <hr/>
                                    <li className="dropdown-item">Artículo</li>
                                    <hr/>
                                    <li className="dropdown-item">Artículo</li>
                                </ul> 
                            </li>
                            
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar;
