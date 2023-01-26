import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './home';
import LogIn from './logIn';
import MyCourses from './myCourses';
import "../App.css"
import SignUp from './signUp';
import ChangePassword from './forgetPassword';

const Main = () => {
    return ( 
        <div className='all'>
            
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/myCourses' element={<MyCourses/>}></Route>
                <Route path='/login' element={<LogIn/>}></Route>
                <Route path='changePassword' element={<ChangePassword/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
            </Routes>
        </div>
     );
}
 
export default Main;