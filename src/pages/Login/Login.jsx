import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie';
import './style.css'
// import axios from 'axios';
import api  from "../../api"

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [text, setText] = useState("")
  const [cor, setCor] = useState("blue")
  const [ShowText, setShowText] = useState(false)
  const [cookies, setCookie] = useCookies(['user']);
  let navigate = useNavigate()

  const SetLogin = async(e)=>{
    e.preventDefault()
    try {
      // const user = await axios.get(`http://localhost:3000/user?nome=${username}`)
      const user = await api.get("/user/login", {
        headers:{nome: username, senha:password}
      })
      console.log(user.data)
      ////////////----///////////

      if(!user.data.userNome){
        if(!user.data.userPassword){
          setCookie('nome', user.data.nome)
          setCookie('pontoC', user.data.pontoC)
          setCookie('pontoJava', user.data.pontoJava)
          setCookie('pontoJS', user.data.pontoJS)
          setCookie('pontoPY', user.data.pontoPY)
          setShowText(true)
          setText("login feito com sucesso 😍")
          setCor("verde")
          setTimeout(()=>{
            navigate('/home')
            window.location.reload()
          }, 1500)
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

      ////////////----///////////
    } catch (error) {
      console.log(error+cookies)
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
