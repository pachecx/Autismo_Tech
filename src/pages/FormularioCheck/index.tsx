import "./styles.css";
import { useNavigate } from "react-router-dom";

const FormularioCheckList = () => {
  const navigate = useNavigate();

  const enviarForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Verifique o seu E-mail");
    navigate("/");
  };
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
        <form onSubmit={enviarForm}>
          <h3 className="TituloFormulario">DADOS DA EMPRESA</h3>

          {/* Campo Nome da Empresa */}
          <div className="inputs-formchecks">
            <label className="label-FormCheck" htmlFor="nome">
              Nome da Empresa*
            </label>
            <input
              className="input-FormCheck"
              name="nome"
              type="text"
              pattern="^[a-zA-Zà-úÀ-Ú\s]+$"
              title="O nome da empresa deve conter apenas letras e espaços"
              required
            />
          </div>

          {/* Campo E-mail para Contato */}
          <div className="inputs-formchecks">
            <label className="label-FormCheck" htmlFor="email">
              E-mail para Contato*
            </label>
            <input
              className="input-FormCheck"
              name="email"
              type="email"
              title="Insira um e-mail válido, como exemplo@dominio.com"
              required
            />
          </div>

          {/* Checkbox para aceitar os Termos de Uso */}
          <div className="divCheckBox-FormCheck">
            <input
              className="input-CheckBox-FormCheck"
              type="checkbox"
              name="termos"
              id="termos"
              required
            />
            <label className="labelCheckBox-FormCheck" htmlFor="termos">
              Li e aceito os termos de uso.
            </label>
          </div>

          {/* Checkbox para receber e-mails de novidades */}
          <div className="divCheckBox-FormCheck">
            <div className="teste">
              <input
                className="input-CheckBox-FormCheck"
                type="checkbox"
                name="deacordo"
                id="deacordo"
              />
            </div>
            <label className="labelCheckBox-FormCheck" htmlFor="deacordo">
              Concordo em receber e-mails sobre ofertas, novidades e
              atualizações da AccessCertify.
            </label>
          </div>

          {/* Botão para Submeter o Formulário */}
          <button className="btn-FormCheck" type="submit">
            Receber o resultado!
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioCheckList;
