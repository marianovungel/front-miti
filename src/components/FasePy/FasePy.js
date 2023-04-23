import React, { useEffect, useState } from 'react'
import api from '../../api'
import JogoEscolha from '../jogoEscolha/JogoEscolha'
import '../Fase/style.css'

export default function FasePy() {
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
                const res = await api.get("/pergunta/Py");
                setQ(res.data)
                getImg("./fasepy1.png")
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
            <img src="./fasepy1.png" alt={img} className="contImg" />
            <div className="buttonNext">
                <div className="btn">
                    <button className="next" onClick={goPergunta}>Next</button>
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
