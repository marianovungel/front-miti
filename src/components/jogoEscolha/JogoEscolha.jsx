import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import api from '../../api'
import { Context } from '../../Context/Context'

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
    const [numeroOne, setNumeroOne] = useState(0)
    const [numerotow, setNumerotow] = useState(0)
    const [one, setOne] = useState("")
    const [two, setTwo] = useState("")
    const [tRie, setTRie] = useState("")
    console.log([numeroOne, numerotow])

    const { user, dispatch } = useContext(Context)

    useEffect(()=>{
        const editUser = async ()=>{
            dispatch({ type: "UPDATE_START"})
            try {
                const newUser = await api.put(`/user/${user._id}`, {
                    pontoC: acertos - erros,
                })
                console.log(newUser.data)
                await dispatch({ type: "UPDATE_SUCCESS", payload: newUser.data})
            } catch (error) {
                alert(error)
            }
        }
        if(fim === false && user.pontoC < acertos-erros){
            editUser()
        }
    }, [fim, user._id, acertos, dispatch, erros, user.pontoC])

    useEffect(()=>{
        setQuestion(data[questionNumber-1]);
    
        if(questionNumber===31){
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
    const handleClickOp = (a)=>{
        setSelectedAnswer(a)
        setVerText("")
        setClassName("Proximo active")
        // var valorCheck = a.replace(/ /g, '');
        // var valorCheck = a.replace(/ /g, '');
        var valorCheck = 0;
        

        if(question?.resposta[0].op === "+"){
            valorCheck = parseInt(numeroOne) + parseInt(numerotow);
        }
        if(question?.resposta[0].op === "-"){
            valorCheck = parseInt(numeroOne) - parseInt(numerotow);
        }
        if(question?.resposta[0].op === "*"){
            valorCheck = parseInt(numeroOne) * parseInt(numerotow);
        }
        if(question?.resposta[0].op === "/"){
            valorCheck = parseInt(numeroOne) / parseInt(numerotow);
        }
        if(question?.resposta[0].op === "%"){
            valorCheck = parseInt(numeroOne) % parseInt(numerotow);
        }

        console.log(valorCheck === question.resposta[0].text)
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
    const handleClickif = (a)=>{
        setSelectedAnswer(a)
        setVerText("")
        setClassName("Proximo active")
        

        delay(300, ()=> 
            setClassName((one === question.resposta[0].text1 && two === question.resposta[0].text2) ? "Proximo correct" : "Proximo wrong"))
        delay(1200, ()=> 
            {
                if(one === question.resposta[0].text1 && two === question.resposta[0].text2){
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
    const handleClickifelse = (a)=>{
        setSelectedAnswer(a)
        setVerText("")
        setClassName("Proximo active")
        

        delay(300, ()=> 
            setClassName((one === question.resposta[0].text1 && two === question.resposta[0].text2 && tRie === question.resposta[0].text3) ? "Proximo correct" : "Proximo wrong"))
        delay(1200, ()=> 
            {
                if(one === question.resposta[0].text1 && two === question.resposta[0].text2 && tRie === question.resposta[0].text3){
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
                <p className={question?.tipo === "img" ? "newNone" : "pergunta"}>{question?.question +verText}</p>
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
                    {/* <input type="text" onChange={(e)=>setvVlorinp(e.target.value)} className="inpTextEscolha" /> */}
                    {/* <textarea className="inpTextEscolha" onChange={(e)=>setvVlorinp(e.target.value)} >
                    </textarea> */}
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
            {question?.tipo === "operador" &&(
                <div className="respostaEscolha organizar">
                    <div className="inputContext">
                        <input type='number' placeholder='Nímero' onChange={(e)=>setNumeroOne(e.target.value)} className='inputNumber' required />
                        <div className='inputNumber newdiv'><span className='spanDivOp'>{question?.resposta[0].op}</span></div>
                        <input type='number' placeholder='Nímero' onChange={(e)=>setNumerotow(e.target.value)} className='inputNumber' required />
                    </div>
                    <button className={selectedAnswer ? className : "Proximo"} onClick={()=>handleClickOp({ative: true})}>Next</button>
                </div>
            )}
            {question?.tipo === "if" &&(
                <div className="respostaEscolha organizar colorContent">
                    <div className="inputContext ifcontent">
                        {/* <input type='number' placeholder='Nímero' onChange={(e)=>setNumeroOne(e.target.value)} className='inputNumber' required />
                        <div className='inputNumber newdiv'><span className='spanDivOp'>{question?.resposta[0].op}</span></div>
                        <input type='number' placeholder='Nímero' onChange={(e)=>setNumerotow(e.target.value)} className='inputNumber' required /> */}
                        <div className="centerifContet">
                            <div className="firdtif">
                                <input className='iiftext2' type="text" name="" id="" onChange={(e)=>setOne(e.target.value)} />
                                <p className="pif1">{question?.resposta[0].p1}</p>
                            </div>
                            <div className="secundif">
                                <input className='iiftext1' type="text" name="" id="" onChange={(e)=>setTwo(e.target.value)} />
                                <p className="pif">{question?.resposta[0].p2}</p>
                            </div>
                            <div className="listif"><p>{question?.resposta[0].p3}</p></div>
                        </div>
                    </div>
                    <button className={selectedAnswer ? className : "Proximo"} onClick={()=>handleClickif({ative: true})}>Next</button>
                </div>
            )}
            {question?.tipo === "ifelse" &&(
                <div className="respostaEscolha organizar colorContent">
                    <div className="inputContext ifcontent">
                        
                        <div className="centerifContet">
                            <div className="firdtif">
                                <input className='iiftext2' type="text" name="" id="" onChange={(e)=>setOne(e.target.value)} />
                                <p className="pif1">{question?.resposta[0].p1}</p>
                            </div>
                            <div className="secundif">
                                <input className='iiftext1' type="text" name="" id="" onChange={(e)=>setTwo(e.target.value)} />
                                <p className="pif">{question?.resposta[0].p2}</p>
                            </div>
                            <div className="listif"><p>{question?.resposta[0].p3}</p></div>
                            <div className="secundif">
                                <input className='iiftext1' type="text" name="" id="" onChange={(e)=>setTRie(e.target.value)} />
                                <p className="pif">{question?.resposta[0].p4}</p>
                            </div>
                            <div className="listif"><p>{question?.resposta[0].p5}</p></div>

                        </div>
                    </div>
                    <button className={selectedAnswer ? className : "Proximo"} onClick={()=>handleClickifelse({ative: true})}>Next</button>
                </div>
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
