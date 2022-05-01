import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import "./signup.css";
const Signup = () => {
  const [firstName, setFirstName] = useState("shanu");
  const [lastName, setLastName] = useState("agrawal");
  const [email, setEmail] = useState("shanu.agrawal@gmail.com");
  const [password, setPassword] = useState("1234");
const navigate  = useNavigate()
const signupHandler = async () => {
 
const body = {
  email: email,
  password: password,
  firstName: firstName,
  lastName: lastName,
}
try {
const response = await axios.post("/api/auth/signup", body)
localStorage.setItem("token", response.data.encodedToken)
setTimeout(() => {
  navigate("/login")
}, 1000);
} catch (error) {
 alert("failed")
}
}

  return (

      <div className="signup__form">
        <div className="signup__form__text">Signup</div>
        <input
          type="text"
          placeholder="First Name"
          name=""
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name=""
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          name=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <button  className="button primary_btn" onClick = {() => signupHandler()}>Signup</button>
        <div className="signup__link">
          <div className="small_text">Already have a account?</div>
          <Link to="/login">
            <span className="signup_text">Login</span>
          </Link>
        </div>
      </div>

  );
};

export { Signup };
