import React from 'react'
import './style.css'
import png from "../../assets/teste.png"
import png2 from "../../assets/Webinar-pana 1.png"
import png3 from "../../assets/Modern life-rafiki 1.png"

const Sobre = () => {
  return (
    <div className='con'>
      <div className='cointainerp'>
       <p className='psobre'>Acessibilidade digital: conectando pessoas para um ambiente digital mais inclusivo e justo</p>
      </div>
      <div className='containersecundario'>
        <div className='texto1'>Acreditamos que a acessibilidade digital é essencial para construir um mundo mais inclusivo e justo. Estamos aqui para transformar a web, garantindo que plataformas digitais de bancos e redes sociais sejam acessíveis a todos.
        </div>
        <div>
            <img src={png} alt="" />
        </div>
      </div>
      <div className='containersecundario'>
        <div>
            <img src={png2}alt="" />
        </div>
        <div className='texto1'>
            <p>Nosso trabalho é baseado em auditorias criteriosas, certificações reconhecidas e uma equipe formada por consultores PCDs, promovendo inclusão digital e empregabilidade. Além disso, oferecemos ferramentas práticas, como checklists gratuitos, relatórios detalhados e treinamentos, para as empresas atenderem às diretrizes WCAG e se destacarem como líderes em responsabilidade social.
            </p>
        </div>
      </div>
      <div className='containersecundario'>
        <div className='texto1'>
            <p>Com nosso selo de acessibilidade digital, criamos um compromisso contínuo com a inclusão, beneficiando empresas, profissionais e milhões de usuários. 
            </p>
        </div>
        <div>
            <img src={png3} alt="" />
        </div>
      </div>
      <div className='containerterceiro'>
        <div className='containerp'>
            <p className='textobutao'>Venha fazer parte dessa transformação!</p>
        </div>
        <div className='containerbutao'>
            <button className='butao'>Solicite uma auditoria!</button>
        </div>
      </div>
    </div>
  )
}

export default Sobre
