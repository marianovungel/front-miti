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
import C from '../../components/RatingComp/C';
import Jv from '../../components/RatingComp/Jv';
import Py from '../../components/RatingComp/Py';
import Js from '../../components/RatingComp/Js';

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
  ["Perguntas", 1, 25],
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
  ["Perguntas", 1, 21],
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
  ["Perguntas", 1, 23],
];

export default function Painel() {

  const [userNum, setUserNum] = useState(0)
  const [admNum, setadmNum] = useState(0)
  const [show, setShow] = useState("grafico")
  const [Painelcor, setPainelcor] = useState("menuItenLeft colorLeft")
  const [InstruCor, setInstruCor] = useState("menuItenLeft")
  const [CadAdm, setCadAdm] = useState("menuItenLeft")
  const [RatingAdm, setRatingAdm] = useState("menuItenLeft")
  const [CadPerguAdmPainel, setCadPerguAdmPainel] = useState("menuItenLeft")
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
    setRatingAdm("menuItenLeft")
    setCadPerguAdmPainel("menuItenLeft")
  }
  const setShowPainel = ()=>{
    setShow("grafico")
    setPainelcor("menuItenLeft colorLeft")
    setInstruCor("menuItenLeft")
    setCadAdm("menuItenLeft")
    setRatingAdm("menuItenLeft")
    setCadPerguAdmPainel("menuItenLeft")
  }
  const setShowCadAdm = ()=>{
    setShow("cadAdm")
    setPainelcor("menuItenLeft")
    setCadAdm("menuItenLeft colorLeft")
    setInstruCor("menuItenLeft")
    setRatingAdm("menuItenLeft")
    setCadPerguAdmPainel("menuItenLeft")
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
                setShow("CR")
                setRatingAdm("menuItenLeft colorLeft")
                setPainelcor("menuItenLeft")
                setInstruCor("menuItenLeft")
                setCadAdm("menuItenLeft")
                setCadPerguAdmPainel("menuItenLeft")
            } else if(value === 'Java'){
                setRatingAdm("menuItenLeft colorLeft")
                setShow("JvR")
                setPainelcor("menuItenLeft")
                setInstruCor("menuItenLeft")
                setCadAdm("menuItenLeft")
                setCadPerguAdmPainel("menuItenLeft")
            }else if(value === 'Python'){
                setRatingAdm("menuItenLeft colorLeft")
                setShow("PyR")
                setPainelcor("menuItenLeft")
                setInstruCor("menuItenLeft")
                setCadAdm("menuItenLeft")
                setCadPerguAdmPainel("menuItenLeft")
            }else if(value === 'JavaScript'){
                setRatingAdm("menuItenLeft colorLeft")
                setShow("JsR")
                setPainelcor("menuItenLeft")
                setInstruCor("menuItenLeft")
                setCadAdm("menuItenLeft")
                setCadPerguAdmPainel("menuItenLeft")
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
                setCadPerguAdmPainel("menuItenLeft colorLeft")
                setShow("C")
                setRatingAdm("menuItenLeft")
                setPainelcor("menuItenLeft")
                setInstruCor("menuItenLeft")
                setCadAdm("menuItenLeft")
            } else if(value === 'Java'){
                setCadPerguAdmPainel("menuItenLeft colorLeft")
                setShow("Java")
                setRatingAdm("menuItenLeft")
                setPainelcor("menuItenLeft")
                setInstruCor("menuItenLeft")
                setCadAdm("menuItenLeft")
            }else if(value === 'Python'){
                setCadPerguAdmPainel("menuItenLeft colorLeft")
                setShow("Python")
                setRatingAdm("menuItenLeft")
                setPainelcor("menuItenLeft")
                setInstruCor("menuItenLeft")
                setCadAdm("menuItenLeft")
            }else if(value === 'JavaScript'){
                setCadPerguAdmPainel("menuItenLeft colorLeft")
                setShow("JavaScript")
                setRatingAdm("menuItenLeft")
                setPainelcor("menuItenLeft")
                setInstruCor("menuItenLeft")
                setCadAdm("menuItenLeft")
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
          <div onClick={cadastrarQ} className={CadPerguAdmPainel}>
            <i className="fa-solid fa-pen-to-square marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft'>Cadastrar Pergunta</h3>
          </div>
          <div className={CadAdm} onClick={setShowCadAdm}>
            <i className="fa-solid fa-user-plus marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft' >Cadastrar Administrador</h3>
          </div>
          <div className={RatingAdm} onClick={Ratings}>
            <i className="fa-solid fa-ranking-star marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft' >Ranking</h3>
          </div>
          <div className={InstruCor} onClick={setShowInstrucoes}>
            <i className="fa-solid fa-chalkboard-user marginIconManuLeft"></i>
            <h3 className='marginIconManuLeft' >Instruções</h3>
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
          <h1 className='hinstrutions'>Instruções do Jogo:</h1>
          <p className='pInstrutions'>
          

Bem-vindo ao jogo de ensino da programação! Aqui estão as instruções para aproveitar ao máximo a experiência de aprendizado:

<h6 className='header6'>1. Escolha a Linguagem:</h6>
    <p className='paragraf6'>
    - No início do jogo, você terá a opção de escolher uma das quatro linguagens de programação disponíveis: C, Java, Python ou JavaScript.
    </p>
    <p className='paragraf6'>
   - Selecione a linguagem com a qual deseja praticar e aprender.
    </p>
   <h6 className='header6'>2. Capítulo e Material:</h6>
   <p className='paragraf6'>
   - Após escolher a linguagem, você será apresentado a um capítulo específico relacionado a essa linguagem.
   </p>
   <p className='paragraf6'>
   - Leia atentamente o material fornecido no capítulo, que será apresentado de forma ilustrada e explicativa.
   </p>
   <h6 className='header6'>3. Perguntas de Escolha Múltipla:</h6>
   <p className='paragraf6'>
   - Após a leitura do capítulo, serão exibidas perguntas de escolha múltipla relacionadas ao conteúdo abordado.
   </p>
   <p className='paragraf6'>
   - Leia cuidadosamente as opções de resposta e selecione a opção correta.
   </p>
   <p className='paragraf6'>
   - Se você responder corretamente, avançará para a próxima pergunta. Caso contrário, receberá um feedback com um botão vermelho indicando a resposta incorreta.
   </p>
   <h6 className='header6'>4. Perguntas com Input:</h6>
   <p className='paragraf6'>
   - Após as perguntas de escolha múltipla, você será desafiado com perguntas que exigem a aplicação prática do conhecimento adquirido.
   </p>
   <p className='paragraf6'>
   - Aqui, você terá a oportunidade de colocar em prática seus conhecimentos de programação digitando o código apropriado.
   </p>
   <p className='paragraf6'>
   - Responda com cuidado, aplicando os conceitos aprendidos no capítulo correspondente.
   </p>
   <h6 className='header6'>5. Feedback de Respostas:</h6>
   <p className='paragraf6'>
   - Ao responder cada pergunta, você receberá um feedback imediato.
   </p>
   <p className='paragraf6'>
   - Se sua resposta estiver correta, você receberá um feedback com um botão verde indicando a resposta correta.
   </p>
   <p className='paragraf6'>
   - Se você errar, receberá um feedback com um botão vermelho e sua pontuação final será decrementada.
   </p>
   <h6 className='header6'>6. Pontuação Final e Jogar Novamente:</h6>
   <p className='paragraf6'>
   - Após completar todas as perguntas do capítulo, você verá sua pontuação final para essa linguagem.
   </p>
   <p className='paragraf6'>
   - A pontuação final refletirá sua precisão e desempenho ao responder às perguntas.
   </p>
   <p className='paragraf6'>
   - Você terá a opção de jogar novamente para aprimorar seus conhecimentos e melhorar sua pontuação.
   </p>
Aproveite o jogo de ensino da programação para aprender e praticar os conceitos fundamentais de cada linguagem de programação.
 Continue progredindo através dos capítulos e desafios para aprimorar suas habilidades. Boa sorte e divirta-se enquanto aprende!
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
        { show === "CR" && (
          <div className='cRankingNEw'>
            <C />
          </div>
        )}
        { show === "JvR" && (
          <div className='cRankingNEw'>
            <Jv />
          </div>
        )}
        { show === "PyR" && (
          <div className='cRankingNEw'>
            <Py />
          </div>
        )}
        { show === "JsR" && (
          <div className='cRankingNEw'>
            <Js />
          </div>
        )}
      </div>
    </div>
  )
}
