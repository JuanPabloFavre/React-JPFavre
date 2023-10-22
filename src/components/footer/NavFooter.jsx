import React from 'react'
import './NavFooter.css'

import face from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'


const NavFooter = () => {

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
            <div className="container-fluid justify-content-center">
            <img className='img-incons' src={face} alt="" />
            <img className='img-incons' src={twitter} alt="" />
            <img className='img-incons' src={instagram} alt="" />
           <img className='img-incons' src={whatsapp} alt="" />
           </div>
        </nav>


    )





}


export default NavFooter;