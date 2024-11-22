import "./App.css";
import img from "./assets/Group.png";

function App() {
  return (
    <>
      <header>
        <div className="divTextImg">
          <div className="divText">
            <h2>
              Quebre barreiras digitais: torne seu site acessível para todos!
            </h2>
            <p>
              Auditorias detalhadas, certificações reconhecidas globalmente e
              consultores PCDs garantindo inclusão real.
            </p>
          </div>
          <img src={img} />
        </div>

        <div className="headerBtns">
          <button>
            <a>Solicite uma auditoria!</a>
          </button>
          <button>
            <a>Checklist Gratuito</a>
          </button>
        </div>
      </header>

      <main>
        <h2 className="titleMain">Diretrizes</h2>
        <div className="divObjs">
          <div className="divMissao">
            <h3>Missão</h3>
            <p>
              Promover a inclusão digital e a acessibilidade universal,
              certificando plataformas para que sejam mais inclusivas e
              garantindo que pessoas com deficiência tenham acesso igualitário a
              serviços online. Buscamos criar um ecossistema digital onde
              tecnologia, responsabilidade social e inovação caminhem juntas,
              capacitando empresas e profissionais a fazerem a diferença no
              mundo digital.
            </p>
          </div>

          <div className="divVisao">
            <h3>Visão</h3>
            <p>
              Ser uma referência global em acessibilidade digital, promovendo
              mudanças significativas que impactem positivamente a vida de
              milhões de usuários e reforcem o compromisso das empresas com a
              inclusão.
            </p>
          </div>

          <div className="divValores">
            <h3>Valores</h3>
            <p>
              Promover a inclusão digital e a acessibilidade universal,
              certificando plataformas para que sejam mais inclusivas e
              garantindo que pessoas com deficiência tenham acesso igualitário a
              serviços online.
              <br /> Buscamos criar um ecossistema digital onde tecnologia,
              responsabilidade social e inovação caminhem juntas, capacitando
              empresas e profissionais a fazerem a diferença no mundo digital.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
