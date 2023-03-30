import React, { useEffect, useState } from 'react'
import './style.css'

export default function JogoEscolha({
    data,
    questionNumber,
    setQuestionNumber,
}) {
    

    const [question, setQuestion] = useState(null)
    const [valorinp, setvVlorinp] = useState(null)
    const [erros, seterros] = useState(0)
    const [fim, setFim] = useState(true)
    const [acertos, setAcertos] = useState(0)
    const [verText, setVerText] = useState("")
    const [className, setClassName] = useState("answer")
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    useEffect(()=>{
        setQuestion(data[questionNumber-1]);
        if(questionNumber===12){
            setFim(false)
        }
    }, [data, questionNumber])

    const delay = (duration, callback)=>{
        setTimeout(()=>{
            callback()
        }, duration)
    }

    const newGame = ()=>{
        
        window.location.reload()
        setQuestion(null)
        setvVlorinp(null)
        seterros(0)
        setFim(true)
        setAcertos(0)
        setVerText("")
        setClassName("answer")
        setSelectedAnswer(null)
    }

    const handleClick = (a)=>{
        setSelectedAnswer(a)
        setVerText("")
        setClassName("answer active")
        delay(300, ()=> 
            setClassName(a.correct ? "answer correct" : "answer wrong"))
        delay(1500, ()=> 
            {
                if(a.correct){
                    setVerText("")
                    delay(1000, ()=>{
                        setQuestionNumber((prev)=> prev + 1)
                        setAcertos((prev)=> prev + 1)
                        
                        setSelectedAnswer(null)
                        setVerText("")
                    })
                }else{
                    setVerText("")
                    seterros((prev)=> prev + 1)
                }
            }
        )
        
    }
    const handleClickInput = (a)=>{
        setSelectedAnswer(a)
        setVerText("")
        setClassName("Proximo active")
        var valorCheck = a.replace(/ /g, '');
        
        delay(300, ()=> 
            setClassName(valorCheck === question.resposta[0].text ? "Proximo correct" : "Proximo wrong"))
        delay(1500, ()=> 
            {
                if(valorCheck === question.resposta[0].text){
                    setVerText("")
                    delay(1000, ()=>{
                        setvVlorinp("")
                        setQuestionNumber((prev)=> prev + 1)
                        setAcertos((prev)=> prev + 1)
                        setSelectedAnswer(null)
                        setVerText("")
                    })
                }else{
                    setVerText("")
                    seterros((prev)=> prev + 1)
                }
            }
        )
        
    }
    const goPergunta = ()=>{
        setvVlorinp("")
        setQuestionNumber((prev)=> prev + 1)
        setSelectedAnswer(null)
        setVerText("")
    }
    
  return (
    <div className='escoContent'>
        {fim ? ( <div className="conteinerEsc">
            <div className={question?.tipo === "img" ? "newNone" : "perguntacont"} >
                <p className={question?.tipo === "img" ? "newNone" : "pergunta"}>{question?.question  +verText}</p>
            </div>
            {question?.tipo === "button" && (
                <div className="answers">
                    {question?.resposta.map((a) => (
                        <div key={a.text} className={selectedAnswer === a ? className : "answer"} onClick={()=> handleClick(a)}>{a?.text}</div>
                    ))}
                </div>
            )}
            {question?.tipo === "input" &&(
                <div className="respostaEscolha">
                    <input type="text" onChange={(e)=>setvVlorinp(e.target.value)} className="inpTextEscolha" />
                    <button className={selectedAnswer ? className : "Proximo"} onClick={()=>handleClickInput(valorinp)}>Next</button>
                </div>
            )}
            {question?.tipo === "img" &&(
                <>
                    <img src={question.url} alt="" className="contImg" />
                    <div className="buttonNext">
                        <div className="btn">
                            <button className="next" onClick={goPergunta}>Next</button>
                        </div>
                    </div>
                </>
            )}
        </div>
        ):(
            <div className="cardFim">
                <p className="textFim">Você Acertou  <b className='colorBorder'>{acertos}</b> <span className='fontSizeIcom'>👌</span></p>
                <p className="textFim">Você Errou  <b className='colorBorderRed'>{erros}</b> <span className='fontSizeIcom'>🤦</span></p>
                <button className='jogarNovament' onClick={newGame}>Jogar Novamente</button>
            </div>
        )}
    </div>
  )
}
