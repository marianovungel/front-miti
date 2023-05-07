import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Jv from '../../components/RatingComp/Jv'

export default function Ratingjv() {
  return (
    <div className='JogarConteiner'>
        <div className="header">
            <div className="vazia"></div>
            <div className="vazia"></div>
            <div className="menu">
                <Link to="/home" className="jogar">Home</Link>
                <li className="jogar">Instruções</li>
                <Link to="/jogar" className="jogar">Jogar</Link>
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
            {/* <C /> */}
            <Jv />
          </div>
        </div>
        <footer className='foot'>
          Footer
        </footer>
    </div>
  )
}
