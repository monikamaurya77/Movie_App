import {createContext, useState} from 'react';

export const AuthContext = createContext();

const CustomProvider = ({children}) => {

//const [isLoggedIn, setIsLoggedIn] = useState(true);
const [ApiData, SetApiData] = useState([]);
const [getData, SetGetData] = useState([]);
const [SearchApi, setSearchApi] = useState([]);
const [Email,SetEmail]=useState('')
const [Password,SetPassword]=useState('')
const [login, setlogin] = useState(false);
const [search,setSearch]=useState('')
  const [Rated,SetRated]=useState([])
  const[Popular,SetPopular]=useState([])

    return(
    <AuthContext.Provider value={{search,setSearch,SetRated,Rated,Popular,SetPopular, login, setlogin,Email,SetEmail,Password,SetPassword,ApiData, SetApiData,getData,SetGetData,SearchApi,setSearchApi}}>
            {children}
        </AuthContext.Provider>
    )
}

export default CustomProvider;

