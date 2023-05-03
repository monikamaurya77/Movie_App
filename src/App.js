import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { AuthContext } from './components/contextApi/context';
import React,{ useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import  SeeMoreMovies from './components/SeeMoreMovies';
import MovieDetails from './components/MovieDetails';

function App() {

const {login} = useContext(AuthContext);

  return (
    <div>
      {/* {
        isLoggedIn ? <Home/> : <Login/>
      } */}
      
      <Routes>
        <Route path="/" element={login ? (<Home/>) : (<Login/>)}/>
        <Route path="/moremovies" element={<SeeMoreMovies/>} />
        <Route path="/moviedetail" element={<MovieDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
