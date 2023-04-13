import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import {Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import Profile from './components/Profile';
import RPGDetails from './components/RPGDetails';
import CreateReview from './components/reviews/CreateReview';
import Login from './components/Login/LogIn';
import AllRPGs from './components/pages/AllRPGs';
import FeaturedGame from './components/home/FeaturedGame';
import { DataContext } from './DataContext';
import { useState } from 'react';

function App() {

  const [chosenRPG, setChosenRPG] = useState({
    chosenRpgId: '',
    chosenPublisherId: '',
  })


  return (
    <div className='bg-primarycontainer'>
      <DataContext.Provider value={{ chosenRPG, setChosenRPG }}>
        <header >
          <Header/>

        </header>
        <main className='mx-20 my-5 min-h-[70vh] shadow-2xl bg-lightsurface'>
        <br></br>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/rpgs/:rpgId" element={<RPGDetails/>}/>
            <Route path="/createreview" element={<CreateReview/>}/>
            <Route path="/allrpgs" element={<AllRPGs/>}/>
            


          </Routes>
        </main>
        <footer >
          <Footer />
        </footer>
      </DataContext.Provider>
    </div>
   
  );
}

export default App;
