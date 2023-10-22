import React from 'react';
import carrito from '../../assets/carrito-de-compras.png'
import './cardwidget.css'

const CardWidget = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container d-flex align-items-center justify-content-center">
                <a className="navbar-brand " href="#">
                <img src={carrito} alt="Logo" width="110" height="100" className="d-inline-block align-text-top"></img>
                <p className="d-inline-block align-text-top">3</p>
                </a>
            </div>
        </nav>
    );
};

export default CardWidget;