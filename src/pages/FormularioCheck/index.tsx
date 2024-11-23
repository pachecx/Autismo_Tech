import React from "react";
import "./styles.css";

const FormularioCheckList = () => {
  return (
    <div className="FormCheckGeral">
      <div className="divTexto-FormCheck">
        <h2 className="Titulo-FormCheck">
          Quase lá! <br />
          Cadastre o seu e-mail e o nome de sua empresa para receber o resultado
          completo da análise e recomendações personalizadas em sua caixa de
          entrada.
        </h2>

        <p className="Texto-FormCheck">
          Para acessar o resultado do seu teste realizado por meio do checklist,
          é importante que você leia atentamente os Termos de Uso e marque o
          checkbox confirmando sua concordância em receber e-mails da
          AccessCertify. Esses e-mails incluirão ofertas exclusivas, novidades
          do setor e atualizações relevantes sobre acessibilidade digital.
          <br />
          <br />
          Ao preencher o formulário, você também receberá gratuitamente uma
          prévia da porcentagem de acessibilidade do seu site. Além disso, terá
          acesso a informações sobre os próximos passos para alcançar a
          certificação digital inclusiva, fortalecendo seu compromisso com a
          inclusão e acessibilidade online.
        </p>
      </div>
      <div className="divFormCheck">
        <form>
          <h3 className="TituloFormulario">DADOS DA EMPRESA</h3>

          <div className="inputs-formchecks">
            <label className="label-FormCheck" htmlFor="nome">Nome da Empresa*</label>
            <input className="input-FormCheck" name="nome" type="text" />
          </div>

          <div className="inputs-formchecks">
            <label className="label-FormCheck" htmlFor="email">E-mail para Contato*</label>
            <input className="input-FormCheck" name="email" type="email" />
          </div>

          <div className="divCheckBox-FormCheck">
            <input className="input-CheckBox-FormCheck"  type="checkbox" name="termos"/>
            <label className="labelCheckBox-FormCheck" htmlFor="termos">Li e aceito os termos de uso.</label>
          </div>

          <div className="divCheckBox-FormCheck">
            <input className="input-CheckBox-FormCheck" type="checkbox" name="deacordo"/>
            <label className="labelCheckBox-FormCheck" htmlFor="deacordo">
              Concordo em receber e-mails sobre ofertas, novidades e
              atualizações da AccessCertify.
            </label>
          </div>

          <button className="btn-FormCheck" type="submit">
          Receber o resultado!
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioCheckList;
