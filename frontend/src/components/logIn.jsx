import React from "react";
import "../login.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
    const [data,setData] = useState({})
    const navigator = useNavigate()

    const handleSubmit = async (event)=>{
      try{
        event.preventDefault();
        const result = await axios.post('http://localhost:3005/login',data)
        console.log(result.data);
        localStorage.setItem('token',result.data)
        navigator('/')
      }catch(error){
        alert('invalid password or email')
      }
    }

  return (
    <form class="login" onSubmit={(e)=>handleSubmit(e)}>
  <input type="Email" placeholder="Email" 
  onChange={(ev)=>setData({...data,email:ev.target.value})}/>
  <input type="password" placeholder="Password"
  onChange={(ev)=>setData({...data,password:ev.target.value})}/>
  <button type="submit">Login</button>
  <br />
  <text className="under" >dont have an account?</text><a className="signLink" href="/signup">sign up</a>
    <button className="back" onClick={()=>{navigator('/')}}>back</button>
    </form>
  );
};

export default LogIn;
