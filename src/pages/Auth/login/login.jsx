import React from "react";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/index";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();

  const loginHandler = async () => {
    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("/api/auth/login", body);
      if (response.data.encodedToken) {
        navigate("/");
        setAuth(() => ({
          token: response.data.encodedToken,
          isAuth: true,
          userName: response.data.foundUser.firstName,
        }));
        toast.success("Login Successfully");
      } else {
        toast.error("Invalid userId Password");
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };
  return (
    <>
      <div className="login__form">
        <div className="login__form__text">Login</div>
        <input
          type="text"
          placeholder="xyz@abc.com"
          name=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="user password"
          name=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button primary_btn" onClick={() => loginHandler()}>
          Login
        </button>
   

        <div className="signup__link">
          <div className="small_text">Not a member?</div>
          <Link to="/signup">
            <span className="signup_text">Signup</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Login };
