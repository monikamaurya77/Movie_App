import React,{useContext} from 'react';
import './css/Navbar.css';
import movieLogo from '../assets/video-camera.png';
import userLogo from '../assets/user.png';
import {AuthContext} from './contextApi/context';

const Navbar = () => {

const {setlogin} = useContext(AuthContext);

const logOut = () => {
    setlogin(false);
}

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={movieLogo} style={{ width: "40px", padding: "6px" }} />
            </div>

            <div className="navbar-items">
                <div className="input-container">
                    <input type="text" placeholder="Search any movies or tv shows" />
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