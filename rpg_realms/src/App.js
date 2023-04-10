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
import CreateReview from './components/CreateReview';

function App() {
  return (
    <div >
      <header >
        <Header />

      </header>
      <main className='mx-12 my-5 min-h-[70vh]'>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/rpg/:rpgId" element={<RPGDetails/>}/>
          <Route path="/createreview" element={<CreateReview/>}/>



        </Routes>
      </main>
      <footer >
        <Footer />
      </footer>
    </div>
  );
}

export default App;