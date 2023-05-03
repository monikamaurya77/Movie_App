import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './css/Home.css';
import { Link } from 'react-router-dom';
import TopRatedMovies from './TopRatedMovies';
import MostRecentMovies from './MostRecentMovies';
import Sidebar from './Sidebar';

const Home = () => {

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



    return (
        <div style={{ color: "white" }}>

            <div>
                <Navbar />
            </div>

            <section className="main-container">

                <Sidebar />

                <mainsection className="right-container">
                    <div className="right-container-first-content">
                        <div className="title">
                            <h2>Weekly Top Rated Movies</h2>
                            <button className="more" ><Link to="/moremovies" show={setVisible} className="more-link" > See More... </Link></button>
                        </div>

                        <div className="movies-container">
                            {
                                movies.slice(0, visible).map((ele) => {
                                    return (
                                        <div>
                                            <TopRatedMovies key={ele.id} {...ele} />
                                            {/* <img src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} width="200px" height="200px"/>  */}
                                            {/* {ele.title} */}
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
                            {popularMovies.slice(0, visible).map((ele) => {
                                return (
                                    <div>
                                        <MostRecentMovies key={ele.id} {...ele} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </mainsection>

            </section>


        </div>
    )
}

export default Home;