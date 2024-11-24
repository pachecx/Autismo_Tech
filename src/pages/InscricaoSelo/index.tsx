import "./style.css";
import seloInscricao from "../../assets/Selo_inscricao.svg";
import { useNavigate } from "react-router-dom";

const InscricaoSelo = () => {
  const navigate = useNavigate()

  const enviarForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    alert('Você vai receber uma e-mail com as instruções')
    navigate('/')
  }
  return (
    <div className="SerAuditadoGeral">
      <div className="textoReceberSelo">
        <h2 className="tituloSerAutitado">
          Reconheça o seu compromisso com a acassibilidade digital com o nosso
          selo!
        </h2>
        <img className="imgSeloIncricao" src={seloInscricao} alt="Imagem do selo da Access Certify"/>

        <div className="div-Btn-SeloIncricao">
          <p className="textoBtnSelo">
            Selo de acessibilidade digital da AccessCertify
          </p>
        </div>

        <p className="textoSobreFormulario">
          Preencha o formulário para conquistar o Selo de Acessibilidade Digital
          para sua plataforma. Nossa equipe avaliará cuidadosamente as
          informações a partir da certificação realizada em auditoria.
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
      type="text"
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

  <button className="BtnSerAuditado" type="submit">
    Enviar Solicitação
  </button>
</form>

      </div>
    </div>
  );
};

export default InscricaoSelo;
