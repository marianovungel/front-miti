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
import JogarJs from './pages/JogarJs/JogarJs';
import Ratingc from './pages/Rating/Ratingc';
import Ratingjv from './pages/Rating/Ratingjv';
import Ratingpy from './pages/Rating/Ratingpy';



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
            <Route path="/jogarjs" element={user ? <JogarJs />: <Login />} exact />
            <Route path="/rating-c" element={user ? <Ratingc />: <Login />} exact />
            <Route path="/rating-jv" element={user ? <Ratingjv />: <Login />} exact />
            <Route path="/rating-py" element={user ? <Ratingpy />: <Login />} exact />
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
