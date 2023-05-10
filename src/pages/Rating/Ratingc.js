import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import C from '../../components/RatingComp/C'
import Swal from 'sweetalert2'

export default function Ratingc() {

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
                <li className="jogar">Instruções</li>
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
            <C />
          </div>
        </div>
        <footer className='foot'>
          Footer
        </footer>
    </div>
  )
}
