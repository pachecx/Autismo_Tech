import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import imgLogoNav from '../../assets/logoNav.svg'

const NavBar = () => {
  return (
    <div className='divNav'>
      <img src={imgLogoNav} alt='logo barra da barra de navegação'/>
    <nav>
      <ul>
        <li>
          <Link to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/sobre'}>
          Sobre Nós
          </Link>
        </li>
        <li>
          <Link to={'/beneficios'}>
          Benefícios
          </Link>
        </li>
        <li>
          <Link to={'/certificacao'}>
          Certificação
          </Link>
        </li>
        <li>
          <Link to={''}>
          Selo
          </Link>
        </li>
        <li>
          <Link to={'/auditores'}>
          Auditores
          </Link>
        </li>
        <li>
          <Link to={''}>
          Checklist
          </Link>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default NavBar