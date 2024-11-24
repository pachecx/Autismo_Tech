import React, { useState } from "react";
import checkHeader from "../../assets/checklist/check.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

const CheckList = () => {
  const navigate = useNavigate();

  const formCheck = () => {
    navigate("/FormularioCheckList");
  };

  const enviarForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    formCheck();
  };
  return (
    <div>
      <div className="HeaderCheck">
        <div className="divCheckTextoImg">
          <div className="DivTextoCheck">
            <h1 className="TituloCheckHeader">
              Quer saber como está a acessibilidade do seu produto digital?
            </h1>
            <p className="TextoHeaderCheck">
              Responda a algumas perguntas sobre sua plataforma digital e
              descubra sua porcentagem inicial de conformidade com a
              acessibilidade.
            </p>
          </div>
          <img
            className="imgHeadCertificacao"
            src={checkHeader}
            alt="imagem de lista"
          />
        </div>
      </div>

      <div className="checkListInfo">
        <p className="textoCheckList">
          Este checklist foi criado com base nas diretrizes WCAG e foca em três
          pilares:
          <span className="spanNegrito">
            {" "}
            Navegação, Legibilidade e Compatibilidade com Tecnologias Assistivas
          </span>
          .
        </p>
        <br />
        <p className="textoCheckList">
          Responda às perguntas abaixo e veja seu progresso inicial.
        </p>
      </div>

      <form onSubmit={enviarForm}>
        <div className="Nav-Check-Vermelho">
          <p className="titulo-Checklist-vermelho">
            Navegação: Todas as funcionalidades estejam acessíveis e sejam
            intuitivas para navegação{" "}
          </p>
          <div className="divInputs">
            <p className="TextoInputForm">
              Todos os links da sua plataforma possuem descrições claras?
            </p>
            <div className="options">
              <label className="LabelInput">
                <input type="radio" name="descricao" />
                Sim
              </label>
              <label className="LabelInput">
                <input required type="radio" name="descricao" />
                Não
              </label>
            </div>
          </div>

          <div className="divInputs">
            <p className="TextoInputForm">
              Os menus são acessíveis usando apenas o teclado?
            </p>
            <div className="options">
              <label className="LabelInput">
                <input type="radio" name="teclado" />
                Sim
              </label>
              <label className="LabelInput">
                <input required type="radio" name="teclado" />
                Não
              </label>
            </div>
          </div>

          <div className="divInputs">
            <p className="TextoInputForm">
              Os elementos interativos são destacados ao receber foco?
            </p>
            <div className="options">
              <label className="LabelInput">
                <input type="radio" name="destacados" />
                Sim
              </label>
              <label className="LabelInput">
                <input required type="radio" name="destacados" />
                Não
              </label>
            </div>
          </div>
        </div>

        <div className="Nav-Check-roxo">
          <p className="titulo-Checklist-roxo">
            Legibilidade: Contraste, tamanho de fonte e clareza do texto para
            facilitação da leitura
          </p>
          <div className="divInputs">
            <p className="TextoInputForm">
              O contraste entre texto e fundo atende aos padrões (4.5:1 para
              texto normal)?
            </p>
            <div className="options">
              <label className="LabelInput">
                <input required type="radio" name="contraste" />
                Sim
              </label>
              <label className="LabelInput">
                <input type="radio" name="contraste" />
                Não
              </label>
            </div>
          </div>

          <div className="divInputs">
            <p className="TextoInputForm">
              As fontes utilizadas são claras e legíveis para todos os usuários?
            </p>
            <div className="options">
              <label className="LabelInput">
                <input type="radio" name="fontesClaras" />
                Sim
              </label>
              <label className="LabelInput">
                <input required type="radio" name="fontesClaras" />
                Não
              </label>
            </div>
          </div>

          <div className="divInputs">
            <p className="TextoInputForm">
              O conteúdo da sua plataforma está estruturado com cabeçalhos
              apropriados?
            </p>
            <div className="options">
              <label className="LabelInput">
                <input type="radio" name="cabecalho" />
                Sim
              </label>
              <label className="LabelInput">
                <input required type="radio" name="cabecalho" />
                Não
              </label>
            </div>
          </div>
        </div>

        <div className="Nav-Check-azul">
          <p className="titulo-Checklist-azul">
            Compatibilidade: Leitores de tela e descrições alternativas em
            imagens e elementos não textuais.
          </p>
          <div className="divInputs">
            <p className="TextoInputForm">
              Todos os botões possuem rótulos (alt text) claros e descritivos?
            </p>
            <div className="options">
              <label className="LabelInput">
                <input type="radio" name="rotulosClaros" />
                Sim
              </label>
              <label className="LabelInput">
                <input required type="radio" name="rotulosClaros" />
                Não
              </label>
            </div>
          </div>

          <div className="divInputs">
            <p className="TextoInputForm">
              Sua plataforma foi testada com leitores de tela?
            </p>
            <div className="options">
              <label className="LabelInput">
                <input type="radio" name="leitorTela" />
                Sim
              </label>
              <label className="LabelInput">
                <input required type="radio" name="leitorTela" />
                Não
              </label>
            </div>
          </div>

          <div className="divInputs">
            <p className="TextoInputForm">
              Os vídeos possuem legendas ou transcrição disponíveis?
            </p>
            <div className="options">
              <label className="LabelInput">
                <input required type="radio" name="transcricao" />
                Sim
              </label>
              <label className="LabelInput">
                <input required type="radio" name="transcricao" />
                Não
              </label>
            </div>
          </div>
        </div>

        <button className="btnSubmit" type="submit">
          Enviar respostas
        </button>
      </form>
    </div>
  );
};

export default CheckList;
