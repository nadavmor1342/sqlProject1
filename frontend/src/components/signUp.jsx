import "../login.css";
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [data, setdata] = useState({});
          const navigator = useNavigate()
  const handleSubmit=async(event)=>{
    event.preventDefault();      
        try{
          const result = await axios.post('http://localhost:3005/signup',data);
          console.log(result.data);
            localStorage.setItem('token',result.data) 
            navigator('/login')
        }catch(error){
          alert('invalid name,password or email')
          return console.log(error);
        }
  }
  return (
    <form class="login" onSubmit={(e)=>{handleSubmit(e)}}>
        <input type="text" placeholder="Name"
        onChange={(ev)=>setdata({...data,name:ev.target.value})}/>
        <input type="text" placeholder="Email"
        onChange={(ev)=>setdata({...data,email:ev.target.value})}/>
        <input type="password" placeholder="Password"
        onChange={(ev)=>setdata({...data,password:ev.target.value})}/>
        <button type="submit">sign up</button>
        <br />
        <text className="under" >already have an account?</text><a className="signLink" href="/login">login</a>
    </form>
  );
};

export default SignUp;
