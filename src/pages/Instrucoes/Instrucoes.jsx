import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import Swal from 'sweetalert2'

export default function Instrucoes() {
    let navigate = useNavigate()
    
    const Ratings = async ()=>{
        const { value: fruit } = await Swal.fire({
            title: 'Seleciona a Linguagem de Programação',
            input: 'select',
            inputOptions: {
              
              'Linguagem': {
                C: 'Ranking C',
                Java: 'Ranking Java',
                Python: 'Ranking Python',
                JavaScript: 'Ranking JavaScript'
              }
            },
            inputPlaceholder: 'Selecione Linguagem',
            showCancelButton: true,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (value === 'C') {
                    navigate("/rating-c")
                    window.location.replace("/rating-c")
                } else if(value === 'Java'){
                    navigate("/rating-jv")
                    window.location.replace("/rating-jv")
                }else if(value === 'Python'){
                  navigate("/rating-py")
                  window.location.replace("/rating-py")
                }else if(value === 'JavaScript'){
                  navigate("/rating-js")
                  window.location.replace("/rating-js")
                }else {
                  resolve('O jogo para esta linguagem está em Desenvolvimento :)')
                }
              })
            }
          })
          
          if (fruit) {
            Swal.fire(`Você selecionou : ${fruit}`)
          }
    }

    const jogo = async ()=>{
        const { value: fruit } = await Swal.fire({
            title: 'Seleciona a Linguagem de Programação',
            input: 'select',
            inputOptions: {
              
              'Linguagem': {
                C: 'C',
                Java: 'Java',
                Python: 'Python',
                JavaScript: 'JavaScript'
              }
            },
            inputPlaceholder: 'Selecione Linguagem',
            showCancelButton: true,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (value === 'C') {
                    navigate("/jogar")
                    window.location.replace("/jogar")
                } else if(value === 'Java'){
                    navigate("/jogarjava")
                    window.location.replace("/jogarjava")
                }else if(value === 'Python'){
                  navigate("/jogarpy")
                  window.location.replace("/jogarpy")
                }else if(value === 'JavaScript'){
                  navigate("/jogarjs")
                  window.location.replace("/jogarjs")
                }else {
                  resolve('O jogo para esta linguagem está em Desenvolvimento :)')
                }
              })
            }
          })
          
          if (fruit) {
            Swal.fire(`Você selecionou : ${fruit}`)
          }
    }
  return (
    <div className='JogarConteiner'>
        <div className="header">
            <div className="vazia"></div>
            <div className="vazia"></div>
            <div className="menu">
                <Link to="/home" className="jogar">Home</Link>
                <li to="/jogar" className="jogar" onClick={jogo}>Jogar</li>
                <li className="jogar" onClick={Ratings}>Ranking</li>
                <Link to="/instrucoes" className="jogar">

                <li className="jogar">Instruções</li>
                </Link>
            </div>
        </div>
        <div className="sectionJogoEndLogo">
          <div className="logoSec">
            <img src="./logo.png" alt="" className="logoSide" />
            <p className="textLofo">
              Seja mais uma vez bem vindo a nossa plataforma.
              Aprenda enquanto se divertes, o conhechecimento 
              não tem limite.
            </p>
            <h5 className="seguir">Siga: </h5>
            <span className='more'><i className="fa-brands fa-instagram colorrr"></i> <i className='valorr'>@miti-Code</i></span>
            <span className='more'><i className="fa-brands fa-facebook colorrr"></i> <i className='valorr'>Miti-Code</i></span>
            <span className='more'><i className="fa-brands fa-twitter colorrr"></i> <i className='valorr'>@miti-Code</i></span>
            <span className='more'><i className="fa-brands fa-tiktok colorrr"></i> <i className='valorr'>@miti-Code</i></span>
            <span className='more'><i className="fa-brands fa-linkedin colorrr"></i> <i className='valorr'>Miti-Code</i></span>
            <span className='more'><i className="fa-regular fa-envelope colorrr"></i> <i className='valorr'>miti@gmail.com</i></span>
            
          </div>
          <div className="jogoContent">
          <div className='instrucoes'>
          <h1 className='hinstrutions'>Instruções do Jogo:</h1>
          <p className='pInstrutions'>
          

Bem-vindo ao jogo de ensino da programação! Aqui estão as instruções para aproveitar ao máximo a experiência de aprendizado:

<h6 className='header6'>1. Escolha a Linguagem:</h6>
    <p className='paragraf6'>
    - No início do jogo, você terá a opção de escolher uma das quatro linguagens de programação disponíveis: C, Java, Python ou JavaScript.
    </p>
    <p className='paragraf6'>
   - Selecione a linguagem com a qual deseja praticar e aprender.
    </p>
   <h6 className='header6'>2. Capítulo e Material:</h6>
   <p className='paragraf6'>
   - Após escolher a linguagem, você será apresentado a um capítulo específico relacionado a essa linguagem.
   </p>
   <p className='paragraf6'>
   - Leia atentamente o material fornecido no capítulo, que será apresentado de forma ilustrada e explicativa.
   </p>
   <h6 className='header6'>3. Perguntas de Escolha Múltipla:</h6>
   <p className='paragraf6'>
   - Após a leitura do capítulo, serão exibidas perguntas de escolha múltipla relacionadas ao conteúdo abordado.
   </p>
   <p className='paragraf6'>
   - Leia cuidadosamente as opções de resposta e selecione a opção correta.
   </p>
   <p className='paragraf6'>
   - Se você responder corretamente, avançará para a próxima pergunta. Caso contrário, receberá um feedback com um botão vermelho indicando a resposta incorreta.
   </p>
   <h6 className='header6'>4. Perguntas com Input:</h6>
   <p className='paragraf6'>
   - Após as perguntas de escolha múltipla, você será desafiado com perguntas que exigem a aplicação prática do conhecimento adquirido.
   </p>
   <p className='paragraf6'>
   - Aqui, você terá a oportunidade de colocar em prática seus conhecimentos de programação digitando o código apropriado.
   </p>
   <p className='paragraf6'>
   - Responda com cuidado, aplicando os conceitos aprendidos no capítulo correspondente.
   </p>
   <h6 className='header6'>5. Feedback de Respostas:</h6>
   <p className='paragraf6'>
   - Ao responder cada pergunta, você receberá um feedback imediato.
   </p>
   <p className='paragraf6'>
   - Se sua resposta estiver correta, você receberá um feedback com um botão verde indicando a resposta correta.
   </p>
   <p className='paragraf6'>
   - Se você errar, receberá um feedback com um botão vermelho e sua pontuação final será decrementada.
   </p>
   <h6 className='header6'>6. Pontuação Final e Jogar Novamente:</h6>
   <p className='paragraf6'>
   - Após completar todas as perguntas do capítulo, você verá sua pontuação final para essa linguagem.
   </p>
   <p className='paragraf6'>
   - A pontuação final refletirá sua precisão e desempenho ao responder às perguntas.
   </p>
   <p className='paragraf6'>
   - Você terá a opção de jogar novamente para aprimorar seus conhecimentos e melhorar sua pontuação.
   </p>
Aproveite o jogo de ensino da programação para aprender e praticar os conceitos fundamentais de cada linguagem de programação.
 Continue progredindo através dos capítulos e desafios para aprimorar suas habilidades. Boa sorte e divirta-se enquanto aprende!
          </p>
        </div>
          </div>
        </div>
        <footer className='foot'>
          Footer
        </footer>
    </div>
  )
}
