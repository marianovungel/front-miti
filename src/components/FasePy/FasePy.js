import React, { useEffect, useState } from 'react'
import api from '../../api'
import '../Fase/style.css'
import JogoEscolhapy from '../JogoEscolhapy/JogoEscolhapy'

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
                const res = await api.get("/pergunta/newpy");
                setQ(res.data)
                getImg("./py1.png")
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
            <img src="./py1.png" alt={img} className="contImg" />
            <div className="buttonNext">
                <div className="btn">
                    <button className="next" onClick={goPergunta}>Próxima Pergunta</button>
                </div>
            </div>
            </>
        )
        :(
            // <JogoEscolha nfase={nfase}  />
            <JogoEscolhapy 
                data={q} 
                // setStop={setStop} 
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                />
        )}
    </div>
  )
}
