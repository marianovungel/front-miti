import React, { useEffect, useState } from 'react'
import api from '../../api'
import '../Fase/style.css'
import JogoEscolhaJava from '../JogoEscolhaJava/JogoEscolhaJava'

export default function FaseJs() {
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
                const res = await api.get("/pergunta/Java");
                setQ(res.data)
                getImg("./fase1.png")
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
            <img src="./fasejava1.png" alt={img} className="contImg" />
            <div className="buttonNext">
                <div className="btn">
                    <button className="next" onClick={goPergunta}>Next</button>
                </div>
            </div>
            </>
        )
        :(
            // <JogoEscolha nfase={nfase}  />
            <JogoEscolhaJava 
                data={q} 
                // setStop={setStop} 
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                />
        )}
    </div>
  )
}

