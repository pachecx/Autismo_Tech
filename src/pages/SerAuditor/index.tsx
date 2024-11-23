import React from "react";
import selo from "../../assets/selo.svg";

const SerAuditor = () => {
  return (
    <div className="SerAuditadoGeral">
      <div className="textoReceberAuditoria">
        <h2 className="tituloSerAutitado">
          Dê o primeiro passo para trabalhar em nossa empresa e ser um Auditor
          de Acessibilidade Digital!
        </h2>

        <div className="divBtnSelo">
          <img className="imgSeloBtn" src={selo} alt="imagem de um selo" />
          <p className="textoBtnSelo">
            Garanta um ambiente digital mais inclusivo e acessível para todos!
          </p>
        </div>

        <p className="textoSobreFormulario">
          Preencha o formulário para iniciar o processo para fazer parte da
          nossa empresa. Nossa equipe analisará cuidadosamente seu currículo e
          fornecerá um feedback.
        </p>
      </div>

      <div className="geralFormSerAuditado">
        <form className="formSerAuditado">
          <h3 className="TituloformSerAuditado">DADOS DA EMPRESA</h3>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="cnpj">
              CPF
            </label>
            <input className="inputSerAuditado" type="text" name="cnpj" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="razao">
              LinkedIn
            </label>
            <input className="inputSerAuditado" type="text" name="razao" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="plataforma">
              Nome Completo*
            </label>
            <input className="inputSerAuditado" type="text" name="plataforma" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="nome">
              E-mail para Contato*
            </label>
            <input className="inputSerAuditado" type="text" name="nome" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="email">
              Telefone para Contato*
            </label>
            <input className="inputSerAuditado" type="text" name="email" />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="telefone">
              Setor de Atuação*
            </label>
            <input className="inputSerAuditado" type="text" name="telefone" />
          </div>

          <button className="BtnSerAuditado" type="submit">
            Enviar Solicitação
          </button>
        </form>
      </div>
    </div>
  );
};

export default SerAuditor;
