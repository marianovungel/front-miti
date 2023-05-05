import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './style.css'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

export default function Home() {

    let navigate = useNavigate()
    const { dispatch } = useContext(Context)

    const Logout = async()=>{
        dispatch({type: "LOGOUT"})
        navigate('/')
        window.location.reload()
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
    <div className='contairerHome'>
        <div className="header">
            <div className="vazia"></div>
            <div className="vazia"></div>
            <div className="menu">
                <Link to="/home" className="jogar">Home</Link>
                <li to="/jogar" className="jogar" onClick={jogo}>Jogar</li>
                <li className="jogar">Instruções</li>
                <li className="jogar" onClick={Logout}>Logout</li>
            </div>
        </div>
        <div className="section">
            <div className="heroImg">
                <img src="./3839214.jpg" alt="" className="hero" />
            </div>
            <div className="textHome">
                <h1 className="textMain">Miti Code</h1>
                <p className="textFiirst">A criação de um jogo para o 
                ensino da programação pode ser uma ótima iniciativa, 
                pois torna o aprendizado mais divertido e interativo. 
                É uma forma de engajar os estudantes e tornar o processo 
                de aprendizagem mais efetivo e eficiente. Além disso, jogos
                educativos são uma tendência atual na educação, especialmente
                quando se trata de ensinar habilidades técnicas. Aprender a 
                programar também pode ajudar a desenvolver habilidades 
                de resolução de problemas, raciocínio lógico e pensamento cítrico, 
                que são importantes em diversas áreas de atuação.</p>
                <button className="jogarNovamente" onClick={jogo}>
                    <p className='colorButt'>
                        jogar
                    </p>
                </button>
            </div>
        </div>
    </div>
  )
}
