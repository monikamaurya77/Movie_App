import starLogo from '../assets/star.png';
import { Link } from 'react-router-dom';

const MostRecentMovies = ({ poster_path, title, release_date, vote_average }) => {
    return (
        <div>
            <Link to="/moviedetails">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} width="200px" height="200px" />
            </Link>

            <Link to="/moviedetails" style={{ color: "white", textDecoration: "none" }}>
                <p>{title}</p>
            </Link>
            <p style={{ marginTop: "-1rem", color: "gray" }}>{release_date}</p>
            <p style={{ marginTop: "-1rem" }}><img src={starLogo} style={{ height: "13px" }} /> {vote_average}</p>
        </div>
    )
}

export default MostRecentMovies;