import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/LogIn';
import {Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import Profile from './components/Profile';
import RPGDetails from './components/RPGDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/rpg/:rpgId" element={<RPGDetails/>}/>


        </Routes>
      </main>
      <footer className="App-main">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
