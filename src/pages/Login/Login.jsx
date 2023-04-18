import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './style.css'
// import axios from 'axios';
import api  from "../../api"
import { Context } from '../../Context/Context'

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [text, setText] = useState("")
  const [cor, setCor] = useState("blue")
  const [ShowText, setShowText] = useState(false)
  let navigate = useNavigate()
  const { dispatch } = useContext(Context)

  const SetLogin = async(e)=>{
    e.preventDefault()
    dispatch({ type: "LOGIN_START"})
    try {
      
      const user = await api.get("/user/login", {
        headers:{nome: username, senha:password}
      })
      if(!user.data.userNome){
        if(!user.data.userPassword){
          
          setShowText(true)
          setText("login feito com sucesso 😍")
          setCor("verde")
          dispatch({ type: "LOGIN_SUCCESS", payload: user.data})
          navigate('/home')
          window.location.reload()
        }else{
          setShowText(true)
          setText("Senha incorreta 🤔")
          setCor("red")
        }
      }else{
        setShowText(true)
        setText("Usuário sem conta 😭")
        setCor("red")
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='conteinerLogin'>
        {ShowText && (<div className="header" id={cor}><small>{text}</small></div>)}
        <form className='login' onSubmit={SetLogin}>
            <img src="./logo.png" alt="" className="logo" />
            <h3 className="loginText">Login</h3>
            <input type="text" className="nome" placeholder='Usuário' onChange={(e)=>setUsername(e.target.value)} minLength="2" required />
            <input type="password" className="email" placeholder='Senha' onChange={(e)=>setPassword(e.target.value)} minLength="2" required />
            <button className='ButtonEntrar' type='onsubmit'>Entrar</button>
            <div className="criarText">
                <Link to="/criar" className="texx">Cadastrar</Link>
                <h6 className="termos">Termos & Políticas de Uso.</h6>
            </div>
        </form>
    </div>
  )
}
