import axios from 'axios';
import { useContext, useState ,useEffect} from 'react';
import {AuthContext } from '../contextApi/context';
import { Link } from 'react-router-dom';
import starLogo from './star.png';

const Comedy = () => {
    
    
    const [search,setSearch]=useState('')
    // const [ApiData,SetApiData]=useState([])
    const {ApiData,SetApiData} =useContext(AuthContext)
    // const [search, setSearch] = useState("");
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  
    const url='https://api.themoviedb.org/3/movie/popular?api_key=7ffd2f3900b8cdf5634f74d09ca77752&language=en-US&page=55';
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
  return (
    <div>
          <div >

   <div className="upper">
      <h1 style={{color:"white",textAlign:"start",marginLeft:"30px"}}>Comedy Categories</h1>
   </div>

{/* cardsection */}

<div className="cardwala">


{
   ApiData.map((e)=>(
    <>
    <Link style={{color:"black",textDecoration:"none"}} to={`/MoviedetailPage/${e.id}`} key={e.id}>
        <div className="maincard">
        <div className='card mycard' style={{border:"none" ,backgroundColor:"#232425"  }}>
      <img variant="top" width={250} height={300} style={{borderRadius:"10px"}} src={IMGPATH + e.poster_path} />
      <div style={{backgroundColor: '#232425'}}>
        <p style={{color:"white"}}>{e.original_title}</p>
        
        <div className="part">
        <p style={{fontSize:"20px",color:"white"}}><img src={starLogo} style={{ height: "13px" }} />{e.vote_average}</p>  </div> 
        {/* <Button className='button' variant="primary">Go somewhere</Button> */}
      </div>
    </div>   
    
        </div>
        </Link>
        </>
    ))
}
</div>
</div>
    </div>
  )
}

export default Comedy