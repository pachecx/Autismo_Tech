import React from 'react'
import './style.css'
import png from '../../assets/iPhone 15 Pro.png'
import verificar from '../../assets/verificar.png'

const Selo = () => {
  return (
    <div>
        <div className='divselo'>
            <div>
                <h1 className='tituloselo'>Quebre barreiras digitais: torne seu site acessível para todos!</h1>
                <p className='pselo'>Um serviço de assinatura exclusivo para sua empresa se conectar com o universo da inclusão digital.</p>
                <button className='butselo'>Solicite seu selo!</button>
            </div>
            <div className='divimg'>
                <img className='seloimg' src={png} alt="" />
            </div>
        </div>
        <div className='divcentral'>
            <p className='pcentarl1'>Ao conquistar a certificação a empresa poderá exibir em sua plataforma digital, o selo para evidenciar seu compromisso com a acessibilidade. O selo será válido por um período determinado, funcionando no formato de assinatura mensal, incentivando a empresa a manter suas práticas de acessibilidade constantemente.</p>
            <p className='pcentral2'>A empresa deverá estar com a certificação em dia, para que possa utilizar o selo de acessibilidade digital. É de boa prática que o processo de auditoria para certificação seja feito a cada 12 meses e não ultrapassando de 18 meses. O selo só poderá ser usado caso a empresa se comprometa com este processo.</p>
        </div>
        <div className='divbeneaccess'>
            <h1 className='h1selobene'>Benefícios do selo da AccessCertify:</h1>
            <div className='divcarbene'>
                <div className='carbene'>
                    <div className='imgcarbene'><img src={verificar} alt="" /></div>
                    <h1 className='h1carbene'>Reconhecimento de Inclusão</h1>
                    <p className='pcarbene'>Demonstra o compromisso da sua empresa com a inclusão digital, garantindo o acesso igualitário para todos os usuários.</p>
                </div>
                <div className='carbene'>
                    <div className='imgcarbene'><img src={verificar} alt="" /></div>
                    <h1 className='h1carbene'>Valorização da Marca</h1>
                    <p className='pcarbene'>Fortalece sua reputação como uma empresa responsável socialmente, alinhada a princípios éticos e de inovação.</p>
                </div>
                <div className='carbene'>
                    <div className='imgcarbene'><img src={verificar} alt="" /></div>
                    <h1 className='h1carbene'>Experiência do Usuário Otimizada</h1>
                    <p className='pcarbene'>Melhora a navegação e usabilidade, promovendo maior engajamento e satisfação de todos os usuários.</p>
                </div>
                <div className='carbene'>
                    <div className='imgcarbene'><img src={verificar} alt="" /></div>
                    <h1 className='h1carbene'>Diferencial Competitivo</h1>
                    <p className='pcarbene'>Destaca sua empresa no mercado como uma pioneira em práticas inclusivas, atraindo clientes e parceiros que valorizam responsabilidade social.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Selo
