import React from 'react'
import {Link} from "react-router-dom"
import "./signup.css"
const Signup = () => {
  return (
    <div className="signup__page">
    <form action="" className="signup__form">
        <div className="signup__form__text">Signup</div>
        <input type="text" placeholder="Name" name="" />
        <input type="text" placeholder="Email" name="" />
        <input type="password" placeholder="create password" name="" />
        <input type="password" placeholder="confirm password" name="" />
        <input type="submit" value= "Signup" className="button primary_btn"/>
        <div className="signup__link">
        <div className="small_text">Already have a account?</div>
        <Link to = "/login" ><span className="signup_text">Login</span></Link> 
        </div>
        </form>



</div>
  )
}

export  {Signup}