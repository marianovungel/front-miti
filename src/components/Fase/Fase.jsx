import React, { useEffect, useState } from 'react'
import api from '../../api'
import JogoEscolha from '../jogoEscolha/JogoEscolha'
import './style.css'

export default function Fase() {
    const [show, setshow] = useState(true)
    const [img, setImg] = useState("")
    const [q, setQ] = useState([])
    const [questionNumber, setQuestionNumber] = useState(1)
    

    const getImg = (data)=>{
        setImg(data.img)
    }
    
    
    useEffect(()=>{
        setshow(true)
        const getFases = async()=>{
            try {
                const res = await api.get("/pergunta/newc");
                setQ(res.data)
                getImg("./c1.png")
            } catch (error) {
                console.log(error)
            }
        }
        getFases()
    }, [])

    const goPergunta = ()=>{
        setshow(false)
    }

  return (
    <div className="con">
      
        {show ? (
            <>
            <img src="./cc00.png" alt={img} className="contImg" />
            <div className="buttonNext">
                <div className="btn">
                    <button className="next" onClick={goPergunta}>Próxima Pergunta</button>
                </div>
            </div>
            </>
        )
        :(
            // <JogoEscolha nfase={nfase}  />
            <JogoEscolha 
                data={q} 
                // setStop={setStop} 
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                />
        )}
    </div>
  )
}
