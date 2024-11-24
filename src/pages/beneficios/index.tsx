import React from 'react'
import './style.css'
import png from '../../assets/beneficios.png'
import vector from '../../assets/Vector.png'
import png2 from '../../assets/disabled student-pana 1.png'

const Beneficios = () => {
  return (
    <div>
        <div className='header'>
            <div>
                <img src={png} alt="" />
            </div>
            <div>
                <h1 className='titulobeneficios'>Benefícios para sua empresa com soluções de acessibilidade digitais!</h1>
                <p className='ptitulobeneficios'>Transforme seu Negócio com Acessibilidade Digital. Ganhe mais alcance, credibilidade e conformidade com soluções práticas e integradas.</p>
            </div>
        </div>
        <div className='divdadosbeneficios'>
            <div>
                <h1 className='h1beneficios'>LBI</h1>
                <p className='pgrande'>Lei Brasileira de Inclusão </p>
                <p className='pmedio'>sua empresa dentro da lei de inclusão!</p>
                <a className='link' target='blank' href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm">Fonte: Lei nº 13.146, de 06 de julho de 2015</a>
            </div>
            <div>
            <h1 className='pgrande2'>apenas</h1>
                <p className='h1beneficios2'>2,8%</p>
                <p className='pgrande2'>dos sites</p>
                <p className='pmedio2'>são acessíveis</p>
                <a className='link' target='blank' href="https://public.flourish.studio/story/2416878/">Fonte: Pesquisa Acessibilidade Digital - 2024</a>
            </div>
            <div>
            <h1 className='h1beneficios'>18,6</h1>
                <p className='pgrande3'>milhões</p>
                <p className='pmedio'>de potenciais clientes </p>
                <a className='link3' target='blank' href="https://www.gov.br/mdh/pt-br/assuntos/noticias/2023/julho/brasil-tem-18-6-milhoes-de-pessoas-com-deficiencia-indica-pesquisa-divulgada-pelo-ibge-e-mdhc">Fonte: gov.br de 2023</a>
            </div>
            <div>
            <h1 className='pgrande4'>muitos sites falharam no teste do </h1>
                <p className='h1beneficios'>W3C</p>
                <a className='link3' target='blank' href="https://public.flourish.studio/story/2416878/">Fonte: Pesquisa Acessibilidade Digital - 2024</a>
            </div>
        </div>
        <div>
            <h1 className='tituloaccess'>Porque escolher a AccessCertify ?</h1>
            <div className='divscards'>
                <div className='divcard'>
                    <div className='divicone'><img className='icone' src={vector} alt="" /></div>
                    <p className='accessmedio'>Melhoria de acessibilidade</p>
                    <p className='accesspequeno'>Alcance ampliado para todos os usuários, garantindo que sua plataforma digital seja funcional e inclusiva para pessoas com deficiência (PCDs).</p>
                </div>
                <div className='divcard'>
                    <div className='divicone'><img className='icone' src={vector} alt="" /></div>
                    <p className='accessmedio'>Conformidade legal</p>
                    <p className='accesspequeno'>Evite multas e processos ao atender às regulamentações de acessibilidade digital, como as diretrizes WCAG e leis locais.</p>
                </div>
                <div className='divcard'>
                    <div className='divicone'><img className='icone' src={vector} alt="" /></div>
                    <p className='accessmedio'>Inclusão e diversidade</p>
                    <p className='accesspequeno'>Reforce sua marca ao integrar práticas inclusivas e promover a participação de PCDs. Isso gera confiança e engajamento com todos os públicos.</p>
                </div>
                <div className='divcard'>
                    <div className='divicone'><img className='icone' src={vector} alt="" /></div>
                    <p className='accessmedio'>Vantagem competitiva</p>
                    <p className='accesspequeno'>Fidelize clientes, amplie sua base de usuários e mostre compromisso com o impacto social positivo. Um diferencial que destaca sua empresa no mercado.</p>
                </div>
            </div>
        </div>
        <div className='ultima'>
            <div className='ultimadiv'>
                <div>
                    <p className='ultimep'>Saiba como a acessibilidade pode transformar seu negócio</p>
                    <button className='ultimobut'>Solicite uma auditoria!</button>
                </div>
                <div>
                    <img className='ultimoimg' src={png2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beneficios
