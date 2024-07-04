import React from 'react'
import { Link } from 'react-router-dom'
import tituloFooter from '../../../public/images/logo.png'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-contenedor'>
      <Link to='/AppleShipping/' className='header-contenedor-footer'><img src={tituloFooter} className='titulo-footer' /></Link>
    <a href="https://github.com/Ivannherrera/ProyectoFinaReact" target="_blank">
              Todos los derechos reservados. <i className="fas fa-heart"></i>
            </a>
            </div>
    </footer>
  )
}
