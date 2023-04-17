import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import {Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import Profile from './components/pages/Profile';
import RPGDetails from './components/pages/RPGDetails';
import CreateReview from './components/reviews/CreateReview';
import DeleteReview from './components/reviews/DeleteReview';
import UpdateReview from './components/reviews/UpdateReview';
import Login from './components/Login/LogIn';
import AllRPGs from './components/pages/AllRPGs';
import FeaturedGame from './components/home/FeaturedGame';
import { DataContext } from './DataContext';
import { useState } from 'react';
import React from 'react';
import './App.css';



function App() {

  const [chosenRPG, setChosenRPG] = useState({
    chosenRpgId: '',
    chosenPublisherId: '',
  })


  return (
    <div className='bg-blueabstract bg-cover' >
      <DataContext.Provider value={{ chosenRPG, setChosenRPG }}>
        <header >
          <Header/>

        </header>
        <main className='mx-32 mt-5 mb-10 min-h-[70vh]  pb-5 bg-white shadow-md shadow-slate-700 rounded-md'>
        <br></br>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/rpgs/:rpgId" element={<RPGDetails/>}/>
            <Route path="/allrpgs" element={<AllRPGs/>}/>
            <Route path="/createreview/:rpgId" element={<CreateReview/>}/>
            <Route path="/deletereview/:reviewId" element={<DeleteReview/>}/>
            <Route path="/updatereview/:reviewId" element={<UpdateReview/>}/>


            


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
