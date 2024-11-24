import React from "react";
import selo from "../../assets/selo.svg";
import "./style.css";

const FormularioReceberAuditoria = () => {
  return (
    <div className="SerAuditadoGeral">
      <div className="textoReceberAuditoria">
        <h2 className="tituloSerAutitado">
          Dê o primeiro passo para conquistar o Certificado de Acessibilidade
          Digital!
        </h2>

        <div className="divBtnSelo">
          <img className="imgSeloBtn" src={selo} alt="imagem de um selo" />
          <p className="textoBtnSelo">
            Garanta um ambiente digital mais inclusivo e acessível para todos!
          </p>
        </div>

        <p className="textoSobreFormulario">
          Preencha o formulário para iniciar o processo de auditoria da sua
          plataforma digital. Nossa equipe analisará cuidadosamente sua
          plataforma e fornecerá um relatório detalhado com recomendações para
          alcançar a conformidade com as diretrizes WCAG.
        </p>
      </div>

      <div className="geralFormSerAuditado">
        <form className="formSerAuditado">
          <h3 className="TituloformSerAuditado">DADOS DA EMPRESA</h3>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="cnpj">
              CNPJ*
            </label>
            <input className="inputSerAuditado" type="text" name="cnpj" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="razao">
              Razão Social*
            </label>
            <input className="inputSerAuditado" type="text" name="razao" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="plataforma">
              Tipo de Plataforma*
            </label>
            <input className="inputSerAuditado" type="text" name="plataforma" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="nome">
              Nome Completo*
            </label>
            <input className="inputSerAuditado" type="text" name="nome" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="email">
              E-mail para Contato*
            </label>
            <input className="inputSerAuditado" type="text" name="email" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="telefone">
              Telefone para Contato*
            </label>
            <input className="inputSerAuditado" type="text" name="telefone" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="setor">
              Setor de Atuação*
            </label>
            <input className="inputSerAuditado" type="text" name="setor" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="objetivos">
              Objetivos da Auditoria
            </label>
            <input className="inputSerAuditado" type="text" name="objetivos" />
          </div>

          <button className="BtnSerAuditado" type="submit">
            Enviar Solicitação
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioReceberAuditoria;
