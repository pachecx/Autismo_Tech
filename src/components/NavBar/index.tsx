import React from 'react'
import './style.css'
import { Link, useLocation } from 'react-router-dom'
import imgLogoNav from '../../assets/logoNav.svg'

const NavBar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className='divNav'>
      <img src={imgLogoNav} alt='logo barra da barra de navegação'/>
    <nav>
      <ul>
      <li className={isActive('/') ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive('/sobre') ? 'active' : ''}>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li className={isActive('/beneficios') ? 'active' : ''}>
            <Link to="/beneficios">Benefícios</Link>
          </li>
          <li className={isActive('/certificacao') ? 'active' : ''}>
            <Link className='NavSobre' to="/certificacao">Certificação</Link>
          </li>
          <li className={isActive('/selo') ? 'active' : ''}>
            <Link to="/selo">Selo</Link>
          </li>
          <li className={isActive('/auditores') ? 'active' : ''}>
            <Link to="/auditores">Auditores</Link>
          </li>
          <li className={isActive('/checklist') ? 'active' : ''}>
            <Link to="/checklist">Checklist</Link>
          </li>
      </ul>
      </nav>
    </div>
  )
}

export default NavBar