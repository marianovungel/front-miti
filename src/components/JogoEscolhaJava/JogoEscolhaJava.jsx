import React, { useContext, useEffect, useState } from 'react'
import '../jogoEscolha/style.css'
import api from '../../api'
import { Context } from '../../Context/Context'

export default function JogoEscolhaJava({
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
    const [className, setClassName] = useState("answerjava")
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const { user, dispatch } = useContext(Context)

    useEffect(()=>{
        const editUser = async ()=>{
            dispatch({ type: "UPDATE_START"})
            try {
                const newUser = await api.put(`/user/${user._id}`, {
                    pontoJava: acertos - erros,
                })
                console.log(newUser.data)
                await dispatch({ type: "UPDATE_SUCCESS", payload: newUser.data})
            } catch (error) {
                alert(error)
            }
        }
        if(fim === false && user.pontoJava < acertos-erros){
            editUser()
        }
    }, [fim, user._id, acertos, dispatch, erros, user.pontoJava])

    useEffect(()=>{
        setQuestion(data[questionNumber-1]);
    
        if(questionNumber===16){
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
        setClassName("answerjava")
        setSelectedAnswer(null)
    }

    const handleClick = (a)=>{
        setSelectedAnswer(a)
        setVerText("")
        setClassName("answerjava active")
        delay(300, ()=> 
            setClassName(a.correct ? "answerjava correct" : "answerjava wrong"))
        delay(1200, ()=> 
            {
                if(a.correct){
                    setVerText("")
                    delay(850, ()=>{
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
        delay(1200, ()=> 
            {
                if(valorCheck === question.resposta[0].text){
                    setVerText("")
                    delay(850, ()=>{
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
                <div className="answersjava">
                    {question?.resposta.map((a) => (
                        <div key={a.text} className={selectedAnswer === a ? className : "answerjava"} onClick={()=> handleClick(a)}>{a?.text}</div>
                    ))}
                </div>
            )}
            {question?.tipo === "input" &&(
                <div className="respostaEscolha">
                    {/* <input type="text" onChange={(e)=>setvVlorinp(e.target.value)} className="inpTextEscolha" /> */}
                    <textarea className="inpTextEscolha" onChange={(e)=>setvVlorinp(e.target.value)} >
                    </textarea>
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
