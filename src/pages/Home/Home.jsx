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
                <p className="textFiirst">Lorem ipsum dolor sit
                 amet consectetur, adipisicing elit. Tempore 
                 placeat sequi veritatis possimus! Est dolorem 
                 7distinctio libero, quibusdam nam dignissimos 
                 voluptatibus iusto atque ab 
                rem cumque praesentium aspernatur itaque sunt.</p>
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
