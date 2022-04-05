import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <>
    <div>
        <form action="" className="login__form">
            <div className="login__form__text">Login</div>
            <input type="text" placeholder="xyz@abc.com" name="" />
            <input type="password" placeholder="user password" name="" />
            <input type="submit" value= "Login" className="button primary_btn"/>
            <div className="signup__link">
            <div className="small_text">Not a member?</div>
            <Link to = "/signup" ><span className="signup_text">Signup</span></Link> 
            </div>
            </form>

    

    </div>
    </>
  )
}

export {Login}