import React, { useState, useEffect, useContext } from 'react';
import TopRatedMovies from './TopRatedMovies';
import MostRecentMovies from './MostRecentMovies';
import {Link} from 'react-router-dom'
import './css/Home.css';
import {AuthContext } from './contextApi/context';
import axios from 'axios';
import starLogo from '../assets/star.png';
import './css/Home.css'

const MovieCard = () => {

    const [movies, setMovies] = useState([]);
    const [popularMovies, getPopularMovies] = useState([]);

    const [visible, setVisible] = useState(6);

    const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=7ffd2f3900b8cdf5634f74d09ca77752&language=en-US&page=1";

    const API_URL2 = "https://api.themoviedb.org/3/movie/popular?api_key=7ffd2f3900b8cdf5634f74d09ca77752&language=en-US&page=1";


    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            })
    }, [])


    useEffect(() => {
        fetch(API_URL2)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                getPopularMovies(data.results);
            })
    }, [])


    const [search,setSearch]=useState('')
    // const [ApiData,SetApiData]=useState([])
    const {ApiData,SetApiData} =useContext(AuthContext)
    // const [search, setSearch] = useState("");
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  
    const url='https://api.themoviedb.org/3/movie/popular?api_key=7ffd2f3900b8cdf5634f74d09ca77752&language=en-US&page=190';
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=7ffd2f3900b8cdf5634f74d09ca77752&query=";

const getAllMovies = async () => {
    try {
      const response = await axios.get(url);

      console.log(response.data.results);

      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getSearchedMovies = async () => {
    try {
      const response = await axios.get(SEARCHAPI + search);
      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(ApiData);

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

    return(
        <>
        <div className="right-container-first-content">
        <div className="title">
            <h2>Weekly Top Rated Movies</h2>
            <button className="more" ><Link to="/moremovies" show={setVisible} className="more-link" > See More... </Link></button>
        </div>

        <div className="movies-container">
            {
                movies.slice(0, visible).map((e) => {
                    return (
                        <div>
                            <>
    <Link style={{color:"black",textDecoration:"none"}} to={`/MoviedetailPage/${e.id}`} key={e.id}>
        <div className="maincard">
        <div  className='card mycard' style={{border:"none",backgroundColor:"#232425"  }}>
      <img variant="top" width={250} height={300} style={{borderRadius:"10px"}} src={IMGPATH + e.poster_path} />
      <div style={{backgroundColor:"#232425"}}>
        <p style={{color:"white"}}>{e.original_title}</p>
        
        <div className="part">
        <p style={{color:"white",fontSize:"20px",}}><img src={starLogo} style={{ height: "13px" }} />{e.vote_average}</p>  </div> 
        {/* <Button className='button' variant="primary">Go somewhere</Button> */}
      </div>
    </div>   
    
        </div>
        </Link>
        </>
                        </div>
                    )
                })
            }
        </div>
    </div>

    <div className="right-container-second-content">
        <div className="title">
            <h2>Most Recent Movies</h2>
            <button className="more"><Link to="/moremovies" className="more-link"> See More... </Link></button>
        </div>

        <div className="movies-container">
            {popularMovies.slice(0, visible).map((e) => {
                return (
                    <div>
                          <>
    <Link style={{color:"black",textDecoration:"none"}} to={`/MoviedetailPage/${e.id}`} key={e.id}>
        <div className="maincard">
        <div  className='card mycard' style={{border:"none",backgroundColor:"#232425"  }}>
      <img variant="top" width={250} height={300} style={{borderRadius:"10px"}} src={IMGPATH + e.poster_path} />
      <div style={{backgroundColor:"#232425"}}>
        <p style={{color:"white"}}>{e.original_title}</p>
        
        <div className="part">
        <p style={{color:"white",fontSize:"20px",}}><img src={starLogo} style={{ height: "13px" }} />{e.vote_average}</p>  </div> 
        {/* <Button className='button' variant="primary">Go somewhere</Button> */}
      </div>
    </div>   
    
        </div>
        </Link>
        </>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}

export default MovieCard;