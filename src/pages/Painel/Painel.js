import React from 'react'
import './style.css'

export default function Painel() {
  return (
    <div className='fullPainel'>
      <div className='leftHeader'>
        <div className='cardLeftHeader'>
            <img className='imgLeftCard' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjuT_1Xi5TsGSl7CBnrC0ZzTiCxoocP-bsuw&usqp=CAU' alt='' />
            <h3 className='imgLeftH'>Miti Code Alfredo</h3>
            <span className='imgLefSpan'>Adiministrador da Plataforma</span>
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
                <i className="fa-solid fa-street-view imgemBannerItem"></i>
            </div>
            <div className='PerguntasBanner'>
                <div className='itemBanner'>
                    <h5 className='userBannerItem'>Perguntas</h5>
                    <span className='userBannerNumber'>1100</span>
                </div>
                <i className="fa-solid fa-clipboard-question imgemBannerItem"></i>
            </div>
        </div>
      </div>

    </div>
  )
}
