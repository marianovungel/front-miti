import './App.css';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import Home from './pages/Home/Home';
import Jogar from './pages/Jogar/Jogar';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './Context/Context';
import JogarJava from './pages/JogarJava/JogarJava';
import JogarPy from './pages/JogarPy/JogarPy';



function App() {
  
  const { user } = useContext(Context)
  
  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={user ? <Home /> : <Login />} exact />
            <Route path="/home" element={user ? <Home /> : <Login />} exact />
            <Route path="/criar" element={user ? <Home /> : <Cadastrar />} exact />
            <Route path="/jogar" element={user ? <Jogar />: <Login />} exact />
            <Route path="/jogarjava" element={user ? <JogarJava />: <Login />} exact />
            <Route path="/jogarpy" element={user ? <JogarPy />: <Login />} exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
