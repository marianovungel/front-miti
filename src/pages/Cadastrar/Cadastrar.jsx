import api from "../../api"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

export default function Cadastrar() {
  //declaração de variáveis com useState
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [text, setText] = useState("")
  const [cor, setCor] = useState("blue")
  const [ShowText, setShowText] = useState(false)
  let navigate = useNavigate()

  const saveUse = async()=>{
    try {
      await api.post("/user", {
        nome:username,
        senha:password
      })
    } catch (error) {
      alert(error)
    }
  }

  const SetLogin = async(e)=>{
    e.preventDefault()
    try {
      const user = await api.get("/user/users",{
        headers:{nome: username}
      })
      const useLenght = user.data;
      if(useLenght > 0){
        setShowText(true)
        setText("já Existe Usuário Com Este Nome 😩")
        setCor("red")
      }else{
        saveUse()
        setShowText(true)
        setText("Usuário Cadastrado com Sucesso 👌")
        setCor("verde")
        setTimeout(()=>{
          navigate('/')
          window.location.reload()
        }, 1500)
      }
    }catch (error) {
      alert(error)
    }
  }
  return (
    <div className='conteinerLogin'>
        {ShowText && (<div className="header" id={cor}><small>{text}</small></div>)}
        <form className='login' onSubmit={SetLogin}>
            <img src="./logo.png" alt="" className="logo" />
            <h3 className="loginText">Cadastrar</h3>
            <input 
              //tipo de valor que o input admite
              type="text"
              className="nome" 
              placeholder='Usuário' 
              onChange={(e)=>setUsername(e.target.value)}
              minLength="2" 
              required 
              />
            <input 
              type="password" 
              className="email" 
              placeholder='Senha' 
              onChange={(e)=>setPassword(e.target.value)} 
              minLength="2" 
              required
            />
            <button className='ButtonEntrar' type='onsubmit'>Cadastrar</button>
            <div className="criarText">
                <Link to='/' className="texx">Login</Link>
                <h6 className="termos">Termos & Políticas de Uso.</h6>
            </div>
        </form>
    </div>
  )
}
