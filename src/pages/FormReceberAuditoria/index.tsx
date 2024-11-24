import selo from "../../assets/selo.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

const FormularioReceberAuditoria = () => {
  const navigate = useNavigate();

  const enviarForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Teste");
    navigate("/");
  };
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
        <form onSubmit={enviarForm} className="formSerAuditado">
          <h3 className="TituloformSerAuditado">DADOS DA EMPRESA</h3>

          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="cnpj">
              CNPJ*
            </label>
            {/* Regex para CNPJ (formato 00.000.000/0000-00 ou apenas números) */}
            <input
              className="inputSerAuditado"
              type="text"
              name="cnpj"
              pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}|\d{14}"
              title="Insira um CNPJ válido no formato 00.000.000/0000-00 ou apenas números"
              required
            />
          </div>

          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="razao">
              Razão Social*
            </label>
            {/* Regex para texto genérico (alfa e espaços) */}
            <input
              className="inputSerAuditado"
              type="text"
              name="razao"
              pattern="^[a-zA-Zà-úÀ-Ú\s]+$"
              title="Insira a razão social apenas com letras e espaços"
              required
            />
          </div>

          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="plataforma">
              Tipo de Plataforma*
            </label>
            {/* Regex para texto genérico (alfa e espaços) */}
            <input
              className="inputSerAuditado"
              type="text"
              name="plataforma"
              pattern="^[a-zA-Zà-úÀ-Ú\s]+$"
              title="Informe o tipo de plataforma apenas com letras e espaços"
              required
            />
          </div>

          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="nome">
              Nome Completo*
            </label>
            {/* Regex para nome completo (mínimo duas palavras) */}
            <input
              className="inputSerAuditado"
              type="text"
              name="nome"
              pattern="^[a-zA-Zà-úÀ-Ú\s]+$"
              title="Insira seu nome completo, com pelo menos duas palavras"
              required
            />
          </div>

          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="email">
              E-mail para Contato*
            </label>
            {/* Regex para e-mail */}
            <input
              className="inputSerAuditado"
              type="email"
              name="email"
              title="Insira um e-mail válido, como exemplo@dominio.com"
              required
            />
          </div>

          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="telefone">
              Telefone para Contato*
            </label>
            {/* Regex para telefone (formato (XX) XXXXX-XXXX ou similar) */}
            <input
              className="inputSerAuditado"
              type="tel"
              name="telefone"
              pattern="\(?\d{2}\)?\s?\d{4,5}-\d{4}"
              title="Insira um número de telefone válido no formato (XX) XXXXX-XXXX"
              required
            />
          </div>

          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="setor">
              Setor de Atuação*
            </label>
            {/* Regex para texto genérico (alfa e espaços) */}
            <input
              className="inputSerAuditado"
              type="text"
              name="setor"
              pattern="^[a-zA-Zà-úÀ-Ú\s]+$"
              title="Informe o setor de atuação apenas com letras e espaços"
              required
            />
          </div>

          <div className="divInputsSerAuditado">
            <label className="LabelSerAuditado" htmlFor="objetivos">
              Objetivos da Auditoria
            </label>
            {/* Regex para texto genérico (alfa e espaços), para os objetivos */}
            <input
              className="inputSerAuditado"
              type="text"
              name="objetivos"
              pattern="^[a-zA-Zà-úÀ-Ú\s]+$"
              title="Descreva os objetivos da auditoria, apenas com letras e espaços"
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

export default FormularioReceberAuditoria;
