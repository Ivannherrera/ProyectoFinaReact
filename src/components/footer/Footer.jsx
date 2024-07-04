import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-contenedor'>
      <Link to='/AppleShipping/' className='header-contenedor-footer'></Link>
    <a href="https://github.com/Ivannherrera/ProyectoFinaReact" target="_blank">
              Todos los derechos reservados. <i className="fas fa-heart"></i>
            </a>
            </div>
    </footer>
  )
}
