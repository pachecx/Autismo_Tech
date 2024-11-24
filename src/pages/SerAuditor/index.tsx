import selo from "../../assets/selo.svg";
import { useNavigate } from "react-router-dom";

const SerAuditor = () => {
  const navigate = useNavigate()

  const enviarForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    alert('Você vai receber um e-mail com as instruções')
    navigate("/")
  }
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
        <form onSubmit={enviarForm} className="formSerAuditado">
          <h3 className="TituloformSerAuditado">DADOS DA EMPRESA</h3>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="cnpj">
              CPF
            </label>
            {/* Regex para CPF (formato 000.000.000-00 ou apenas números) */}
            <input
              className="inputSerAuditado"
              type="text"
              name="cnpj"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}"
              title="Insira um CPF válido no formato 000.000.000-00 ou apenas números"
              required
            />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="razao">
              LinkedIn
            </label>
            {/* Regex para LinkedIn URL */}
            <input
              className="inputSerAuditado"
              type="text"
              name="razao"
              pattern="https?://(www\.)?linkedin\.com/.*"
              title="Insira um link válido do LinkedIn, começando com http:// ou https://"
              required
            />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="plataforma">
              Nome Completo*
            </label>
            {/* Regex para nome completo (mínimo duas palavras) */}
            <input
              className="inputSerAuditado"
              type="text"
              name="plataforma"
              pattern="^[a-zA-Zà-úÀ-Ú\s]+$"
              title="Insira seu nome completo, com pelo menos duas palavras"
              required
            />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="nome">
              E-mail para Contato*
            </label>
            {/* Regex para e-mail */}
            <input
              className="inputSerAuditado"
              type="email"
              name="nome"
              title="Insira um e-mail válido, como exemplo@dominio.com"
              required
            />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="email">
              Telefone para Contato*
            </label>
            {/* Regex para telefone (formato (XX) XXXXX-XXXX ou similar) */}
            <input
              className="inputSerAuditado"
              type="text"
              name="email"
              pattern="\(?\d{2}\)?\s?\d{4,5}-\d{4}"
              title="Insira um número de telefone válido no formato (XX) XXXXX-XXXX"
              required
            />
          </div>
          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="telefone">
              Setor de Atuação*
            </label>
            {/* Regex para texto genérico (alfa e espaços) */}
            <input
              className="inputSerAuditado"
              type="tel"
              name="telefone"
              pattern="^[a-zA-Zà-úÀ-Ú\s]+$"
              title="Informe o setor de atuação apenas com letras e espaços"
              required
            />
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
