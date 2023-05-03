import React,{useContext, useEffect} from 'react';
import './css/Navbar.css';
import movieLogo from '../assets/video-camera.png';
import userLogo from '../assets/user.png';
import {AuthContext} from './contextApi/context';
import axios from 'axios';

const Navbar = () => {

const {setlogin} = useContext(AuthContext);

const logOut = () => {
    setlogin(false);
}

const {search,setSearch,SetRated,SetPopular}=useContext(AuthContext)
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=7ffd2f3900b8cdf5634f74d09ca77752&query=";
  const getSearchedMovies = async () => {
      try {
        const response = await axios.get(SEARCHAPI + search);
        SetRated(response.data.results);
        SetPopular(response.data.results)
      } catch (err) {
        console.log(err.message);
      }
    };
    useEffect(() => {
      if (search === "") {
        getSearchedMovies();
          // gettopratedMovies();
          // getpopularMovies();
      } else {
        getSearchedMovies();
      }
    }, []);


    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={movieLogo} style={{ width: "40px", padding: "6px" }} />
            </div>

            <div className="navbar-items">
                <div className="input-container">
                    <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="Search any movies or tv shows" />
                </div>

                <ul className="sub-titles-container">
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>Watchlist</li>
            
                    <img src={userLogo} style={{ width: "30px" }} />
                   <span onClick={logOut} className="logout">Logout</span>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;