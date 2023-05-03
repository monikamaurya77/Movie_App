import './css/Login.css';
import React, { useContext,  useState } from 'react';
import { AuthContext } from './contextApi/context';

const Login = () => {

    const { setlogin } = useContext(AuthContext);
    const [user, setUser] = useState({
      name: "",
      password: "",
    });

    const handleLogin = () => {
        if(user.name === "monika" && user.password === "m123" ) {
          setlogin(true);
        } else {
          alert("Enter Proper Credentials");
        }
      };


    return (
        <div className="container">
            <div className="image">
                <img src="https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg" width="430px" height="570px" />
            </div>
            <div className="right">
                <h1>Welcome back,</h1>
                <p style={{color: "#a3a4b1"}}>Sign in to your account</p>
                <p className="email">Email</p>
                <input  onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }} type="email" placeholder="Enter Your Email" className="input"/>
                <p className="password">Password</p>
                <input onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }} type="password" placeholder="Enter password" className="input" />
                <p className="forget-password">Forget Password?</p>
                <button onClick={handleLogin} className="sign-in">Sign in</button>
                <p className="sign-up">Don't have an account?<span style={{ color: "red" }}>Sign up</span></p>
            </div>
        </div>
    )
}

export default Login;