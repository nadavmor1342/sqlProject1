import React from "react";
import "../login.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from './navbar';

const ChangePassword = () => {
    // const [data,setData] = useState({})
    // const navigator = useNavigate()

    // const handleSubmit = async (event)=>{
    //   try{
    //     event.preventDefault();
    //     const result = await axios.post('http://localhost:3005/login',data)
    //     console.log(result.data);
    //     localStorage.setItem('token',result.data)
    //     navigator('/')
    //   }catch(error){
    //     alert('invalid password or email')
    //   }}
    return ( 
        <div>
            <NavBar/>
    <form class="login">
    <input type="Email" placeholder="Email"/>
    <input type="password" placeholder="Password"/>
    <input type="password" placeholder="Password"/>
    <button type="submit">Login</button>
    <br />
    <text className="under" >dont have an account?</text><a className="signLink" href="/signup">sign up</a>
      </form>
      </div>
       );
}
 
export default ChangePassword;