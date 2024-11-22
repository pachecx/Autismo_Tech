import React from 'react';
import './style.css';
import png from '../../assets/Group 2.png';
import frame1 from '../../assets/Frame 3.png';
import frame2 from '../../assets/Frame 2.png';
import frame3 from '../../assets/Frame 1.png';
import auditor1 from '../../assets/auditor1.png';
import auditor2 from '../../assets/auditor2.png';
import auditor3 from '../../assets/auditor3.png';
import auditor4 from '../../assets/auditor4.png';

const Auditores = () => {
  return (
    <div className="container-principal">
      {/* Título e Introdução */}
      <div className="container-titulo">
        <div className="div-titulo">
          <h1 className="title">
            Auditores Capacitados para Promover a Inclusão Digital
          </h1>
          <p className="ptitle">
            Nossos consultores são pessoas com deficiência (PCDs) que passaram
            por uma capacitação completa em acessibilidade digital. Eles trazem
            uma perspectiva única e especializada, garantindo que sua plataforma
            atenda aos mais altos padrões de inclusão e usabilidade.
          </p>
        </div>
        <div>
          <img className='png' src={png} alt="Consultores capacitados" />
        </div>
      </div>

      {/* Destaques sobre os consultores */}
      <div className="container-frame">
        <h1 className="titulo-frame">Nossos consultores têm:</h1>
        <div className="div-frame">
          <div className="frame-item">
            <img src={frame1} alt="Capacitação com base nas diretrizes WCAG" />
          </div>
          <div className="frame-item">
            <img
              src={frame2}
              alt="Experiência prática em tecnologias assistivas e acessibilidade"
            />
          </div>
          <div className="frame-item">
            <img src={frame3} alt="Compromisso com um digital mais acessível" />
          </div>
        </div>
      </div>

      {/* Auditores */}
      <div>
        <h1 className="titulo-auditor">Conheça Nossos Auditores</h1>
        <div className="div-auditor">
          <div>
            <img src={auditor1} alt="Auditor 1" />
          </div>
          <div>
            <img src={auditor2} alt="Auditor 2" />
          </div>
          <div>
            <img src={auditor3} alt="Auditor 3" />
          </div>
          <div>
            <img src={auditor4} alt="Auditor 4" />
          </div>
        </div>
      </div>

      {/* Mensagem final */}
      <div className="div-sobre">
        <p className="sobre-auditores">
          Fazemos mais do que auditorias: promovemos a inclusão e geramos
          oportunidades para pessoas com deficiência. Se você quer atuar como
          auditor especializado em acessibilidade digital e fazer a diferença,
          nós queremos ouvir você!
        </p>
      </div>
      <div className='divfazer'>
        <div>
            <p className='pfazer'>Quer fazer parte da nossa equipe de consultores?</p>
            <button className='butfazer'>Seja um auditor!</button>
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auditores;
