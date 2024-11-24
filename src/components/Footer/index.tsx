import imgQuebraFooter from '../../assets/footer/imgFooterQuebra.svg'
import insta from '../../assets/footer/insta.svg'
import face from '../../assets/footer/face.svg'
import ex from '../../assets/footer/ex.svg'
import youtube from '../../assets/footer/youtube.svg'
import linkedin from '../../assets/footer/linkedin.svg'
import './style.css'

const Footer = () => {
  return (
    <div className="geralFooter">
      <div className="imgEtextoFooter">
        <img src={imgQuebraFooter} alt="" />

        <div className="divTextoFooter">
          <h4>Vamos conversar?</h4>
          <p>contato@accesscertify.com</p>
          <p>+55 (11) 9 1234-5678</p>
          <p>Endereço: Rua da Inclusão, São Paulo - SP</p>
        </div>

        <div className="divCardFooter">
            <h3>Siga nossas redes</h3>
            <div className="logoRedes">
                <img src={insta} alt="logo instagram"/>
                <img src={face} alt="logo facebook"/>
                <img src={ex} alt="logo X"/>
                <img src={youtube} alt="logo youtube"/>
                <img src={linkedin} alt="logo linkedin"/>

            </div>
        </div>
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
