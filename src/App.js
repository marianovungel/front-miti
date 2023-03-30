import './App.css';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import Home from './pages/Home/Home';
import Jogar from './pages/Jogar/Jogar';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useCookies} from 'react-cookie'


function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  setCookie("novojogo", true)
  removeCookie("novojogo", true)
  const user = cookies.nome;
  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={user ? <Home /> : <Login />} exact />
            <Route path="/home" element={user ? <Home /> : <Login />} exact />
            <Route path="/criar" element={user ? <Home /> : <Cadastrar />} exact />
            <Route path="/jogar" element={user ? <Jogar />: <Login />} exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
