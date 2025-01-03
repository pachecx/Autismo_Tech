import line1 from "../../assets/certificacao/Line.svg";
import line2 from "../../assets/certificacao/Line2.svg";
import imgClound from "../../assets/certificacao/Cloudhosting-cuate.svg";
import etapa1 from "../../assets/certificacao/img1.svg";
import etapa2 from "../../assets/certificacao/img2.svg";
import etapa3 from "../../assets/certificacao/img3.svg";
import etapa4 from "../../assets/certificacao/img4.svg";
import imgCertificado from '../../assets/certificacao/certificadoCorrigido.png'
import imgSolicitarAuditoria from '../../assets/certificacao/Frame.svg'
import x from '../../assets/certificacao/x.svg'
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Certificacao = () => {
  const navigate = useNavigate();

  const auditoria = () => {
    navigate("/formularioReceberAuditoria");
  };
  return (
    <>
      <header className="headerCertificacao">
        <div className="divHead">
          <img className="imgHeadCertificacao" src={imgClound} alt="imagem de servidores" />
          <div className="headerTexts">
            <h1 className="tituloHeader">Seu Caminho para a Certificação de Acessibilidade Digital</h1>
            <p className="textHeader">
              Acreditamos que tornar sua plataforma digital acessível deve ser
              um processo simples e direto. Avaliação real feita por consultores
              PCDs, garantindo que a experiência seja verdadeiramente inclusiva!
            </p>
          </div>
        </div>
      </header>
      <main>
        <h2 className="tituloMainH2">Nossas etapas:</h2>
        <div className="etapasDiv">
          <div className="lado1">
            <div className="etapa">
              <div className="imgDivs">
                <img className="line1" src={line1} />
                <img src={etapa1} alt="etapa de processos" />
              </div>
              <div className="etapaText">
                <h3 className="h3Tutulo">Aplicação</h3>
                <p className="textoEtapas">
                  O primeiro passo é simples! Preencha nosso formulário com as
                  informações sobre sua empresa e o produto digital que deseja
                  auditar. Após a aplicação, nossa equipe entrará em contato
                  para confirmar os próximos passos.
                </p>
              </div>
            </div>

            <div className="etapa">
              <div className="imgDivs">
                <img className="line1" src={line1} />
                <img src={etapa3} alt="etapa de processos" />
              </div>
              <div className="etapaText">
                <h3 className="h3Tutulo">Relatório</h3>
                <p className="textoEtapas">
                  Com base na auditoria, preparamos um relatório completo que
                  destaca os pontos de conformidade. As áreas que precisam de
                  ajustes e também recomendações específicas para atingir os
                  padrões de acessibilidade.
                </p>
              </div>
            </div>
          </div>

          <div className="lado2">
            <div className="etapa">
              <div className="imgDivs">
                <img className="line2" src={line2} />
                <img src={etapa2} alt="etapa de processos" />
              </div>
              <div className="etapaText">
                <h3 className="h3Tutulo">Auditoria</h3>
                <p className="textoEtapas">
                  Nossos auditores especializados realizaram uma análise
                  detalhada do seu produto digital. Avaliamos a conformidade com
                  as diretrizes WCAG, verificando aspectos como navegação,
                  legibilidade e compatibilidade com tecnologias assistivas.
                </p>
              </div>
            </div>

            <div className="etapa">
              <div className="imgDivs">
                <img src={etapa4} alt="etapa de processos" />
              </div>
              <div className="etapaText">
                <h3 className="h3Tutulo">Certificação</h3>
                <p className="textoEtapas">
                  Se o seu produto digital atingir acima de 90% dos critérios
                  analisados, você receberá um Certificado de Acessibilidade
                  Digital, que tem duração de 12 meses, atestando o seu
                  compromisso com a inclusão.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="SobreCertificado">
          <p className="textoCertificado">
            O Certificado de Acessibilidade Digital é um reconhecimento oficial
            para empresas que demonstram excelência na inclusão digital. Ele
            comprova que sua plataforma está alinhada com as diretrizes WCAG
            (Web Content Accessibility Guidelines), garantindo uma experiência
            acessível para todos os usuários, incluindo pessoas com deficiência.
            Empresas que atingirem 90% ou mais de conformidade serão
            certificadas, destacando seu compromisso com a responsabilidade
            social e a inovação.
          </p>
        </div>

    <div className="certificado">
      <div className="certificadoImg">
        <img src={imgCertificado}/>
      </div>
      <div className="certificadoTexto">
          <h3 className="TituloTextoCertificado">Alguns dos critérios avaliados para a pontuação do certificado:</h3>
          <ol>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Estrutura clara e intuitiva das páginas.
              </p>
            </li>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Facilidade de uso em dispositivos móveis e desktops.
              </p>
            </li>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Disponibilidade de atalhos de teclado para navegação sem mouse.
              </p>
            </li>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Contraste de cores entre texto e fundo.
              </p>
            </li>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Tamanhos de fonte ajustáveis e leitura facilitada.
              </p>
            </li>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Funcionamento adequado com leitores de tela.
              </p>
            </li>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Campos de formulário claramente rotulados e acessíveis.
              </p>
            </li>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Conteúdo acessível para usuários que utilizam comandos de voz.
              </p>
            </li>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Legendas em vídeos e transcrições para conteúdos de áudio.
              </p>
            </li>
            <li className="listaCertificado">
              <img className="imgLista" src={x} alt="x"/> 
              <p className="TextoListaCertificado">
              Mensagens de erro e sucesso apresentadas de forma compreensível para todos os usuários.
              </p>
            </li>
          </ol>
      </div>
    </div>


    <div className="SolicitarAuditoria">
      <div className="textSolicitar">
        <h3 className="tituloTextoSolicitar">Dê o primeiro passo para tornar sua plataforma digital acessível a todos!</h3>
        <button onClick={auditoria} className="btnSolicitar">
          <Link className="solicitar" to={""}>
          Solicite uma auditoria!
          </Link>
        </button>
      </div>
      <img src={imgSolicitarAuditoria} alt="Imagem de uma pessoa cadeirante"/>
    </div>

      </main>
    </>
  );
};

export default Certificacao;
