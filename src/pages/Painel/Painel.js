import React, { useEffect } from 'react'
import './style.css'
import { Chart } from "react-google-charts";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import api from '../../api'
import { useState } from 'react';
import Swal from 'sweetalert2';
import _ from 'underscore'

export const options = {
  title: "LINGUAGEM C",
  hAxis: { title: "Tipos", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "80%", height: "70%" },
};

export const data = [
  ["Tipos", "Sequencia", "Valor"],
  ["Input", 5, 6],
  ["Mult-Escolha", 4, 12],
  ["Duplo-Input", 3, 4],
  ["Triplo-Input", 2, 7],
  ["Perguntas", 1, 26],
];
export const optionsjv = {
  title: "LINGUAGEM JAVA",
  hAxis: { title: "Tipos", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "80%", height: "70%" },
};

export const datajv = [
  ["Tipos", "Sequencia", "Valor"],
  ["Input", 5, 5],
  ["Mult-Escolha", 4, 10],
  ["Duplo-Input", 3, 4],
  ["Triplo-Input", 2, 7],
  ["Perguntas", 1, 23],
];
export const optionspy = {
  title: "LINGUAGEM PYTHON",
  hAxis: { title: "Tipos", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "80%", height: "70%" },
};

export const datapy = [
  ["Tipos", "Sequencia", "Valor"],
  ["Input", 5, 5],
  ["Mult-Escolha", 4, 10],
  ["Duplo-Input", 3, 2],
  ["Triplo-Input", 2, 3],
  ["Perguntas", 1, 20],
];
export const optionsjs = {
  title: "LINGUAGEM JAVASCRIPT",
  hAxis: { title: "Tipos", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "80%", height: "70%" },
};

export const datajs = [
  ["Tipos", "Sequencia", "Valor"],
  ["Input", 5, 8],
  ["Mult-Escolha", 4, 11],
  ["Duplo-Input", 3, 3],
  ["Triplo-Input", 2, 3],
  ["Perguntas", 1, 24],
];

export default function Painel() {

  const [userNum, setUserNum] = useState(0)
  const [admNum, setadmNum] = useState(0)
  const [show, setShow] = useState("grafico")
  const [Painelcor, setPainelcor] = useState("menuItenLeft colorLeft")
  const [InstruCor, setInstruCor] = useState("menuItenLeft")
  const [CadAdm, setCadAdm] = useState("menuItenLeft")
  const [Nome, setNome] = useState("")
  const [Senha, setSenha] = useState("")
  const [question, setQuestion] = useState("")
  const [resTue, setResTue] = useState("")
  const [Resone, setResone] = useState("")
  const [ResTow, setResTow] = useState("")
  const [resTre, setresTre] = useState("")

  const MultQ = async (e)=>{
    e.preventDefault()
    const newRes = [
      {
        text: resTue,
        correct: true,
      },
      {
        text: Resone,
        correct: false,
      },
      {
        text: ResTow,
        correct: false,
      },
      {
        text: resTre,
        correct: false,
      }
    ]
    try {
      var resposta = _.shuffle(newRes);
      const tt = await api.post("/pergunta/cmult", {
        question: question,
        tipo: "button",
        resposta: resposta
      })
      if(tt){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setShow("grafico")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const MultQJv = async (e)=>{
    e.preventDefault()
    const newRes = [
      {
        text: resTue,
        correct: true,
      },
      {
        text: Resone,
        correct: false,
      },
      {
        text: ResTow,
        correct: false,
      },
      {
        text: resTre,
        correct: false,
      }
    ]
    try {
      var resposta = _.shuffle(newRes);
      const tt = await api.post("/pergunta/jvmult", {
        question: question,
        tipo: "button",
        resposta: resposta
      })
      if(tt){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setShow("grafico")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const MultQpy = async (e)=>{
    e.preventDefault()
    const newRes = [
      {
        text: resTue,
        correct: true,
      },
      {
        text: Resone,
        correct: false,
      },
      {
        text: ResTow,
        correct: false,
      },
      {
        text: resTre,
        correct: false,
      }
    ]
    try {
      var resposta = _.shuffle(newRes);
      const tt = await api.post("/pergunta/pymult", {
        question: question,
        tipo: "button",
        resposta: resposta
      })
      if(tt){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setShow("grafico")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const MultQjs = async (e)=>{
    e.preventDefault()
    const newRes = [
      {
        text: resTue,
        correct: true,
      },
      {
        text: Resone,
        correct: false,
      },
      {
        text: ResTow,
        correct: false,
      },
      {
        text: resTre,
        correct: false,
      }
    ]
    try {
      var resposta = _.shuffle(newRes);
      const tt = await api.post("/pergunta/jsmult", {
        question: question,
        tipo: "button",
        resposta: resposta
      })
      if(tt){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setShow("grafico")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const { dispatch } = useContext(Context)
  let navigate = useNavigate()

  const Logout = async()=>{
    dispatch({type: "LOGOUT"})
    navigate('/')
    window.location.reload()
  }

  useEffect(()=>{
    const getData = async()=>{
      try {
        const getUse = await api.get("/user")
        const getAdm = await api.get("/user/find")
        setadmNum(getAdm.data.length)
        setUserNum(getUse.data.length)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const setShowInstrucoes = ()=>{
    setShow("instrucoes")
    setPainelcor("menuItenLeft")
    setInstruCor("menuItenLeft colorLeft")
    setCadAdm("menuItenLeft")
  }
  const setShowPainel = ()=>{
    setShow("grafico")
    setPainelcor("menuItenLeft colorLeft")
    setInstruCor("menuItenLeft")
    setCadAdm("menuItenLeft")
  }
  const setShowCadAdm = ()=>{
    setShow("cadAdm")
    setPainelcor("menuItenLeft")
    setCadAdm("menuItenLeft colorLeft")
    setInstruCor("menuItenLeft")
  }

  const submitAdm = async (e)=>{
    e.preventDefault()
    try {
      const addAdm = await api.post("/user/adm",{
        nome: Nome,
        senha: Senha
      })
      if(addAdm){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
      setShowPainel()
    } catch (error) {
      console.log(error)
    }
  }

  const Ratings = async ()=>{
    const { value: fruit } = await Swal.fire({
        title: 'Seleciona a Linguagem de Programação',
        input: 'select',
        inputOptions: {
          
          'Linguagem': {
            C: 'Ranking C',
            Java: 'Ranking Java',
            Python: 'Ranking Python',
            JavaScript: 'Ranking JavaScript'
          }
        },
        inputPlaceholder: 'Selecione Linguagem',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === 'C') {
                navigate("/rating-c")
                window.location.replace("/rating-c")
            } else if(value === 'Java'){
                navigate("/rating-jv")
                window.location.replace("/rating-jv")
            }else if(value === 'Python'){
              navigate("/rating-py")
              window.location.replace("/rating-py")
            }else if(value === 'JavaScript'){
              navigate("/rating-js")
              window.location.replace("/rating-js")
            }else {
              resolve('O jogo para esta linguagem está em Desenvolvimento :)')
            }
          })
        }
      })
      
      if (fruit) {
        Swal.fire(`Você selecionou : ${fruit}`)
      }
}
  const cadastrarQ = async ()=>{
    const { value: fruit } = await Swal.fire({
        title: 'Seleciona a Linguagem de Programação',
        input: 'select',
        inputOptions: {
          
          'Linguagem': {
            C: 'Cadastrar C',
            Java: 'Cadastrar Java',
            Python: 'Cadastrar Python',
            JavaScript: 'Cadastrar JavaScript'
          }
        },
        inputPlaceholder: 'Selecione Linguagem',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === 'C') {
                setShow("C")
            } else if(value === 'Java'){
              setShow("Java")
            }else if(value === 'Python'){
              setShow("Python")
            }else if(value === 'JavaScript'){
              setShow("JavaScript")
            }else {
              resolve('O jogo para esta linguagem está em Desenvolvimento :)')
            }
          })
        }
      })
      
      if (fruit) {
        Swal.fire(`Você selecionou : ${fruit}`)
      }
}

  return (
    <div className='fullPainel'>
      <div className='leftHeader'>
        <div className='cardLeftHeader'>
            <img className='imgLeftCard' src='./miti.jpeg' alt='' />
            <h3 className='imgLeftH'>Miti Code Ivanildo</h3>
            <span className='imgLefSpan'>Administrador da Plataforma</span>
        </div>
        <div className='menuLeft'>
          <div className={Painelcor} onClick={setShowPainel}>
            <i className="fa-solid fa-chart-line marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Painel</h3>
          </div>
          <div onClick={cadastrarQ} className='menuItenLeft'>
            <i className="fa-solid fa-pen-to-square marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Cadastrar Pergunta</h3>
          </div>
          <div className={CadAdm}>
            <i className="fa-solid fa-user-plus marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft' onClick={setShowCadAdm}>Cadastrar Administrador</h3>
          </div>
          <div className='menuItenLeft'>
            <i className="fa-solid fa-ranking-star marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft' onClick={Ratings}>Ranking</h3>
          </div>
          <div className={InstruCor}>
            <i className="fa-solid fa-chalkboard-user marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft' onClick={setShowInstrucoes}>Instruções</h3>
          </div>
          <Link to='/home' className='menuItenLeft'>
            <i className="fa-solid fa-house marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Home</h3>
          </Link>
          <div onClick={Logout} className='menuItenLeft'>
            <i className="fa-solid fa-right-from-bracket marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Logout</h3>
          </div>
        </div>
      </div>
      <div className='rightSidebar'>
        <div className='banners'>
            <div className='usersBanner'>
                <div className='itemBanner'>
                    <h5 className='userBannerItem'>Utilizadores</h5>
                    <span className='userBannerNumber'>00{userNum}</span>
                </div>
                <i className="fa-solid fa-users imgemBannerItem"></i>
            </div>
            <div className='AdmBanner'>
                <div className='itemBanner'>
                    <h5 className='userBannerItem'>Administradores</h5>
                    <span className='userBannerNumber'>00{admNum}</span>
                </div>
                <i className="fa-solid fa-user-lock imgemBannerItem"></i>
            </div>
            <div className='PerguntasBanner'>
                <div className='itemBanner'>
                    <h5 className='userBannerItem'>Linguagens</h5>
                    <span className='userBannerNumber'>004</span>
                </div>
                <i className="fa-solid fa-clipboard-question imgemBannerItem"></i>
            </div>
        </div>
        {show === "instrucoes" && (<div className='instrucoes'>
          <h1 className='hinstrutions'>Instruções</h1>
          <p className='pInstrutions'>
          A criação de um jogo para o ensino da programação pode
           ser uma ótima iniciativa, pois torna o aprendizado mais
          divertido e interativo. É uma forma de engajar os estudantes e 
          tornar o processo de aprendizagem mais efetivo e eficiente. 
          Além disso, jogos educativos são uma tendência atual na educação,
          especialmente quando se trata de ensinar habilidades técnicas.
          Aprender a programar também pode ajudar a desenvolver habilidades
           de resolução de problemas, raciocínio lógico e pensamento cítrico, 
          que são importantes em diversas áreas de atuação.
          A criação de um jogo para o ensino da programação
          pode ser uma ótima iniciativa, pois torna o aprendizado 
          mais divertido e interativo. É uma forma de engajar os estudantes
          e tornar o processo de aprendizagem mais efetivo e eficiente.
          Além disso, jogos educativos são uma tendência atual na educação,
          especialmente quando se trata de ensinar habilidades técnicas.
          Aprender a programar também pode ajudar a desenvolver habilidades de
           resolução de problemas, raciocínio lógico e pensamento cítrico, 
           que são importantes em diversas áreas de atuação.
          </p>
        </div>
        )}
        {show === "grafico" && (<div className='graficos'>
        <div className='grafC'>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="250px"
            data={data}
            options={options}
          />
          </div>
          <div className='grafC'>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="250px"
            data={datajv}
            options={optionsjv}
          />
          </div>
        </div>
        )}
        {show === "grafico" && (<div className='graficos'>
        <div className='grafC'>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="250px"
            data={datapy}
            options={optionspy}
          />
          </div>
          <div className='grafC'>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="250px"
            data={datajs}
            options={optionsjs}
          />
          </div>
        </div>
        )}

        {show === "cadAdm" && (<div className='sidebarAdmCad'>
          <form onSubmit={submitAdm} className='formAdm'>
            <h3 className='hformAdm'>Cadastrar Administrador</h3>
            <input type='text' onChange={(e)=>setNome(e.target.value)} className='inputAdmName' required placeholder='Adm Nome' />
            <input type='password' onChange={(e)=>setSenha(e.target.value)} className='inputAdmName' required placeholder='senha' />
            <button type="submit" className='cadAdm'>Cadastrar</button>
          </form>
        </div>
        )}

        { show === "C" && (<div className='fullAdmCadPergunta'>
          <div className='menuCadPergunta'>
            <div className='ItemMenuPergunta seletBackgrond'>Linguagem C</div>
            <div className='ItemMenuPergunta'>Linguagem Java</div>
            <div className='ItemMenuPergunta'>Linguagem Python</div>
            <div className='ItemMenuPergunta'>Linguagem JavaScript</div>
          </div>
          <div className='centerFormPR'>
            <form className='formPerRes' onSubmit={MultQ}>
              <input type='text' className='wPer' onChange={e=>setQuestion(e.target.value)} required placeholder='Pergunta' />
              <div className='respost'>
                <input className='inpRes' type='text' onChange={e=>setResTue(e.target.value)} placeholder='Resposta Certa' required />
                <input className='inpRes' type='text' onChange={e=>setResone(e.target.value)} placeholder='Resposta Falsa' required />
                <input className='inpRes' type='text' onChange={e=>setResTow(e.target.value)} placeholder='Resposta Falsa' required />
                <input className='inpRes' type='text' onChange={e=>setresTre(e.target.value)} placeholder='Resposta Falsa' required />
              </div>
              <button className='cadastrarButtonRes' type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
        )}
        { show === "Java" && (<div className='fullAdmCadPergunta'>
          <div className='menuCadPergunta'>
            <div className='ItemMenuPergunta'>Linguagem C</div>
            <div className='ItemMenuPergunta seletBackgrond'>Linguagem Java</div>
            <div className='ItemMenuPergunta'>Linguagem Python</div>
            <div className='ItemMenuPergunta'>Linguagem JavaScript</div>
          </div>
          <div className='centerFormPR'>
            <form className='formPerRes' onSubmit={MultQJv}>
              <input type='text' className='wPer' onChange={e=>setQuestion(e.target.value)} required placeholder='Pergunta' />
              <div className='respost'>
                <input className='inpRes' type='text' onChange={e=>setResTue(e.target.value)} placeholder='Resposta Certa' required />
                <input className='inpRes' type='text' onChange={e=>setResone(e.target.value)} placeholder='Resposta Falsa' required />
                <input className='inpRes' type='text' onChange={e=>setResTow(e.target.value)} placeholder='Resposta Falsa' required />
                <input className='inpRes' type='text' onChange={e=>setresTre(e.target.value)} placeholder='Resposta Falsa' required />
              </div>
              <button className='cadastrarButtonRes' type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
        )}
        { show === "Python" && (<div className='fullAdmCadPergunta'>
          <div className='menuCadPergunta'>
            <div className='ItemMenuPergunta'>Linguagem C</div>
            <div className='ItemMenuPergunta'>Linguagem Java</div>
            <div className='ItemMenuPergunta seletBackgrond'>Linguagem Python</div>
            <div className='ItemMenuPergunta'>Linguagem JavaScript</div>
          </div>
          <div className='centerFormPR'>
            <form className='formPerRes' onSubmit={MultQpy}>
              <input type='text' className='wPer' onChange={e=>setQuestion(e.target.value)} required placeholder='Pergunta' />
              <div className='respost'>
                <input className='inpRes' type='text' onChange={e=>setResTue(e.target.value)} placeholder='Resposta Certa' required />
                <input className='inpRes' type='text' onChange={e=>setResone(e.target.value)} placeholder='Resposta Falsa' required />
                <input className='inpRes' type='text' onChange={e=>setResTow(e.target.value)} placeholder='Resposta Falsa' required />
                <input className='inpRes' type='text' onChange={e=>setresTre(e.target.value)} placeholder='Resposta Falsa' required />
              </div>
              <button className='cadastrarButtonRes' type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
        )}
        { show === "JavaScript" && (<div className='fullAdmCadPergunta'>
          <div className='menuCadPergunta'>
            <div className='ItemMenuPergunta'>Linguagem C</div>
            <div className='ItemMenuPergunta'>Linguagem Java</div>
            <div className='ItemMenuPergunta'>Linguagem Python</div>
            <div className='ItemMenuPergunta seletBackgrond'>Linguagem JavaScript</div>
          </div>
          <div className='centerFormPR'>
            <form className='formPerRes' onSubmit={MultQjs}>
              <input type='text' className='wPer' onChange={e=>setQuestion(e.target.value)} required placeholder='Pergunta' />
              <div className='respost'>
                <input className='inpRes' type='text' onChange={e=>setResTue(e.target.value)} placeholder='Resposta Certa' required />
                <input className='inpRes' type='text' onChange={e=>setResone(e.target.value)} placeholder='Resposta Falsa' required />
                <input className='inpRes' type='text' onChange={e=>setResTow(e.target.value)} placeholder='Resposta Falsa' required />
                <input className='inpRes' type='text' onChange={e=>setresTre(e.target.value)} placeholder='Resposta Falsa' required />
              </div>
              <button className='cadastrarButtonRes' type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
