import React from 'react';
import './NavBar.css'
import logo from '../../assets/logo.png'
import Search from '../search/Search';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark" >
        <div className="container-fluid">
            <img src={logo} className="imagen" alt="..."></img>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Remeras</a></li>
                            <li><a className="dropdown-item" href="#">Shorts</a></li>
                            <li><a className="dropdown-item" href="#">Zapatos</a></li>                              
                            <li><a className="dropdown-item" href="#">Medias</a></li>
                        </ul>
                    </li>
                  
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sobre Nosotros
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Politicas de Seguridad</a></li>
                            <li><a className="dropdown-item" href="#">Terminos y Condiciones</a></li>
                            <li><a className="dropdown-item" href="#">Contacto</a></li>
                            <li><a className="dropdown-item" href="#">Trabaja con Nosotros</a></li>
                        </ul>
                    </li>
                  
                </ul>
                <Search/>
                
            </div>
        </div>
    </nav>
    );
};

export default NavBar;