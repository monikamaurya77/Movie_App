import Navbar from './Navbar';
import './css/Home.css';
import { Link, Outlet } from 'react-router-dom';
import MovieCard from './MovieCard';

const Home = () => {

    return (
        <div style={{ color: "white" }}>

            <div>
                <Navbar />
            </div>

            <section className="main-container">
                <div className="left-container">
                    <ul className="left-container-items">
                        <li><Link to='toprated' className="li">Top Rated</Link></li>
                        <li><Link to='allmovies' className="li">All Movies</Link></li>
                        <li><Link to='action' className="li">Action</Link></li>
                        <li><Link to='comedy' className="li">Comedy</Link></li>
                        <li><Link to='drama' className="li">Drama</Link></li>
                    </ul>
                </div>

                {/* <mainsection className="right-container">
               <MovieCard/>
                </mainsection> */}
                <div className=" right-container">
                    <Outlet />
                </div>

            </section>
            {/* bodysection */}


        </div>
    )
}

export default Home;