import React from 'react'
import './style.css'
import { Chart } from "react-google-charts";
export const optios = {
  title: "Linguagem C",
  curveType: "function",
  leggend: { position: "bottom"},
  hAxis: {format: "currency"},
  Animation: {duration: 500, easing: "linear", startup: true}
}

export default function Painel() {
  return (
    <div className='fullPainel'>
      <div className='leftHeader'>
        <div className='cardLeftHeader'>
            <img className='imgLeftCard' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjuT_1Xi5TsGSl7CBnrC0ZzTiCxoocP-bsuw&usqp=CAU' alt='' />
            <h3 className='imgLeftH'>Miti Code Alfredo</h3>
            <span className='imgLefSpan'>Adiministrador da Plataforma</span>
        </div>
        <div className='menuLeft'>
          <div className='menuItenLeft'>
            <i className="fa-solid fa-pen-to-square marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Cadastrar Pergunta</h3>
          </div>
          <div className='menuItenLeft'>
            <i className="fa-solid fa-user-plus marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Cadastrar Administrador</h3>
          </div>
          <div className='menuItenLeft'>
            <i className="fa-solid fa-ranking-star marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Ranking</h3>
          </div>
          <div className='menuItenLeft colorLeft'>
            <i className="fa-solid fa-chalkboard-user marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Instruções</h3>
          </div>
          <div className='menuItenLeft'>
            <i className="fa-solid fa-play marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Jogar</h3>
          </div>
          <div className='menuItenLeft'>
            <i className="fa-solid fa-house marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Home</h3>
          </div>
          <div className='menuItenLeft'>
            <i className="fa-solid fa-right-from-bracket marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Logout</h3>
          </div>
        </div>
      </div>
      <div className='rightSidebar'>
        <div className='banners'>
            <div className='usersBanner'>
                <div className='itemBanner'>
                    <h5 className='userBannerItem'>Utilizadores</h5>
                    <span className='userBannerNumber'>1500</span>
                </div>
                <i className="fa-solid fa-users imgemBannerItem"></i>
            </div>
            <div className='AdmBanner'>
                <div className='itemBanner'>
                    <h5 className='userBannerItem'>Administradores</h5>
                    <span className='userBannerNumber'>0003</span>
                </div>
                <i className="fa-solid fa-user-lock imgemBannerItem"></i>
            </div>
            <div className='PerguntasBanner'>
                <div className='itemBanner'>
                    <h5 className='userBannerItem'>Perguntas</h5>
                    <span className='userBannerNumber'>1100</span>
                </div>
                <i className="fa-solid fa-clipboard-question imgemBannerItem"></i>
            </div>
        </div>
        <div className='graficos'>
          <div className='grafC'>
          <Chart
            chartType="ColumnChart"
            data={[["Perguntas", "Multiplas-Escolhas", "Input"], [4, 26], [8, 16], [12, 10]]}
            width="100%"
            height="400px"
            // options={optios}
            legendToggle
          />
          </div>
        </div>
      </div>
        

    </div>
  )
}
