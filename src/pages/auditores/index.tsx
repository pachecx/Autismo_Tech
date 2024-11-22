import React from 'react'
import "./style.css"
import png from '../../assets/Group 2.png'

const Auditores = () => {
  return (
    <div>
    <div className='containertitulo'>
    <div className='divtitulo'>
        <h1 className='title'>Auditores Capacitados para Promover a Inclusão Digital</h1>
        <p className='ptitle'>Nossos consultores são pessoas com deficiência (PCDs) que passaram por uma capacitação completa em acessibilidade digital. Eles trazem uma perspectiva única e especializada, garantindo que sua plataforma atenda aos mais altos padrões de inclusão e usabilidade.</p>
    </div>
    <div>
        <img src={png} alt="" />
    </div>
    </div>
    </div>
  )
}

export default Auditores
