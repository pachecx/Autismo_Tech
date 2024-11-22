import React from "react";
import imgQuebraFooter from '../../assets/footer/imgFooterQuebra.svg'

const Footer = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />

        <div className="divTextoFooter">
          <h4>Vamos conversar?</h4>
          <p>contato@accesscertify.com</p>
          <p>+55 (11) 9 1234-5678</p>
          <p>Endereço: Rua da Inclusão, São Paulo - SP</p>
        </div>

        <div className="divCardFooter"></div>
      </div>

      <div className="termosFooter">
        <p>Política de privacidade</p>
        <p>Termos de uso</p>
        <p>Desenvolvido por Equipe 03 </p>
      </div>
    </div>
  );
};

export default Footer;
