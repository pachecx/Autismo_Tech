import "./App.css";
import img from "./assets/Group.png";
import img1 from "./assets/Checklist-1.svg";
import img2 from "./assets/extraction-cuate.svg";
import img3 from "./assets/world-cuate.svg";
import Dropdown from "./components/Drop";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const check = () => {
    navigate("/checklist");
  };

  const auditoria = () => {
    navigate("/formularioReceberAuditoria");
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Isso vai levar a página ao topo assim que ela for carregada
  }, []);
  return (
    <>
      <header>
        <div className="divTextImg">
          <div className="divText">
            <h2 className="TituloHeader">
              Quebre barreiras digitais: torne seu site acessível para todos!
            </h2>
            <p className="TextoHome">
              Auditorias detalhadas, certificações reconhecidas globalmente e
              consultores PCDs garantindo inclusão real.
            </p>
          </div>
          <img className="imgHomeHeader" src={img} />
        </div>

        <div className="headerBtns">
          <button onClick={auditoria} className="btnSolicitarHome">
            <Link className="linkHomeHeader" to={""}>
              Solicite uma auditoria!
            </Link>
          </button>
          <button onClick={check} className="btnCheckHome">
            <Link className="linkHomeHeader" to={""}>
              Checklist Gratuito
            </Link>
          </button>
        </div>
      </header>

      <main>
        <div className="mainObjs">
          <h2 className="titleMain">Diretrizes</h2>
          <div className="divObjs">
            <div className="divMissao">
              <h3 className="TitleDiretrizes">Missão</h3>
              <p className="textoDiretrizes">
                Promover a inclusão digital e a acessibilidade universal,
                certificando plataformas para que sejam mais inclusivas e
                garantindo que pessoas com deficiência tenham acesso igualitário
                a serviços online. Buscamos criar um ecossistema digital onde
                tecnologia, responsabilidade social e inovação caminhem juntas,
                capacitando empresas e profissionais a fazerem a diferença no
                mundo digital.
              </p>
            </div>

            <div className="divVisao">
              <h3 className="TitleDiretrizes">Visão</h3>
              <p className="textoDiretrizes">
                Ser uma referência global em acessibilidade digital, promovendo
                mudanças significativas que impactem positivamente a vida de
                milhões de usuários e reforcem o compromisso das empresas com a
                inclusão.
              </p>
            </div>

            <div className="divValores">
              <h3 className="TitleDiretrizes">Valores</h3>
              <p className="textoDiretrizes">
                Promover a inclusão digital e a acessibilidade universal,
                certificando plataformas para que sejam mais inclusivas e
                garantindo que pessoas com deficiência tenham acesso igualitário
                a serviços online.
                <br /> Buscamos criar um ecossistema digital onde tecnologia,
                responsabilidade social e inovação caminhem juntas, capacitando
                empresas e profissionais a fazerem a diferença no mundo digital.
              </p>
            </div>
          </div>
        </div>

        <div className="divDiferenciais">
          <h3 className="tituloDiferenciais">Diferenciais</h3>
          <div className="tresdivs">
            <div className="divUm">
              <img className="imgDife" src={img1} />
              <p className="TextoDif">
                Auditorias detalhadas e baseadas em padrões como WCAG.
              </p>
            </div>
            <div className="divDois">
              <img className="imgDife" src={img3} />
              <p className="TextoDif">
                Envolvimento direto de consultores PCDs.
              </p>
            </div>
            <div className="divTres">
              <img className="imgDife" src={img2} />
              <p className="TextoDif">Relatórios claros e planos de ação.</p>
            </div>
          </div>
        </div>

        <div className="perguntas">
          <h3 className="TitulosPerguntas">Perguntas Frequentes</h3>
          <div className="divDrops">
            <div className="campo1">
              <Dropdown
                content={
                  "Quais critérios vocês utilizam para avaliar acessibilidade?"
                }
                dropdownItems={[
                  <div>
                    <p>
                      Seguimos as Diretrizes de Acessibilidade para Conteúdo da
                      Web (WCAG) 2.1, que se baseiam em quatro princípios
                      fundamentais: <b>perceptível, operável, compreensível</b>{" "}
                      e <b>robusto</b>. Esses critérios internacionais garantem
                      que o conteúdo seja acessível para o maior número possível
                      de pessoas, com diferentes níveis de conformidade:{" "}
                      <b>A</b> (mínimo), <b>AA</b> (recomendado) e <b>AAA</b>{" "}
                      (máxima acessibilidade).
                    </p>
                    <ul className="listaDrop">
                      <li>
                        <b>Nível A:</b> É o nível básico, que aborda os
                        requisitos mínimos necessários para tornar o conteúdo
                        acessível. Por exemplo, imagens com texto alternativo.
                      </li>
                      <li>
                        <b>Nível AA:</b> Considerado o padrão ideal para a
                        maioria dos sites, inclui critérios que tornam a
                        navegação mais fácil. Exemplos: contraste adequado entre
                        texto e fundo, e navegação acessível por teclado.
                      </li>
                      <li>
                        <b>Nível AAA:</b> É o nível mais elevado e exige
                        conformidade com padrões avançados. Ele inclui medidas
                        que atendem a necessidades mais específicas, como
                        garantir que vídeos tenham audiodescrição.
                      </li>
                    </ul>
                  </div>,
                ]}
              />

              <Dropdown
                content={"Quanto tempo leva o processo de certificação?"}
                dropdownItems={[
                  "O tempo varia dependendo da complexidade do seu site e do número de páginas a serem analisadas. Em média, uma auditoria detalhada pode levar de 2 a 6 semanas. Após a auditoria, o tempo para ajustes e certificação dependerá da implementação das correções necessárias.",
                ]}
              />

              <Dropdown
                content={
                  "O que é o selo de acessibilidade e como posso obtê-lo?"
                }
                dropdownItems={[
                  "O selo de acessibilidade é um reconhecimento para sites que atendem aos critérios de acessibilidade digital. Para obtê-lo, seu site deve passar por uma auditoria, implementar as melhorias recomendadas e ser reavaliado.",
                ]}
              />

              <Dropdown
                content={"Por que preciso de uma auditoria de acessibilidade?"}
                dropdownItems={[
                  "A auditoria de acessibilidade é essencial para identificar barreiras que dificultam o uso do seu site por pessoas com deficiência. Além de promover inclusão, ela ajuda a atender legislações como a Lei Brasileira de Inclusão (LBI) e o padrão internacional WCAG, além de melhorar a experiência geral de todos os usuários e ampliar seu público.",
                ]}
              />
            </div>

            <div className="campo1">
              <Dropdown
                content={
                  "Meu site já está pronto. Ainda é possível torná-lo acessível?"
                }
                dropdownItems={[
                  "O selo de acessibilidade é um reconhecimento para sites que atendem aos critérios de acessibilidade digital. Para obtê-lo, seu site deve passar por uma auditoria, implementar as melhorias recomendadas e ser reavaliado.",
                ]}
              />

              <Dropdown
                content={"O processo de acessibilidade é obrigatório por lei?"}
                dropdownItems={[
                  "No Brasil, a Lei Brasileira de Inclusão (LBI) exige que serviços e produtos digitais sejam acessíveis para pessoas com deficiência. Não estar em conformidade pode resultar em penalidades legais e prejuízos à reputação da sua marca.",
                ]}
              />

              <Dropdown
                content={"Quais ferramentas ou tecnologias vocês utilizam?"}
                dropdownItems={[
                  "Utilizamos ferramentas automáticas como Lighthouse, Axe e WAVE para identificar problemas técnicos, além de revisões manuais feitas por especialistas em acessibilidade e testes com usuários reais, sendo pessoas com deficiência.",
                ]}
              />

              <Dropdown
                content={"A acessibilidade digital melhora o SEO?"}
                dropdownItems={[
                  "Sim! Um site acessível também melhora sua otimização para mecanismos de busca (SEO). Recursos como texto alternativo, estruturação de conteúdo e design responsivo favorecem tanto usuários quanto o desempenho do seu site nos motores de busca.",
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
