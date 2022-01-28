import "./SignupForm.css";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import {useContext } from 'react'
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


function SignupForm() {
  const [Form, setForm] = useState("SignUp");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const {signUp} = useContext(UserContext);
  let navigate = useNavigate();



  const changeForm = () => {
    setForm("Login");
  };

  const getName = (e) => {
    setName(e.target.value);
  };

  const getUserName = (e) => {
    setUsername(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const getRole = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      username,
      email,
      password,
      role
    };
    
    signUp(newUser).then((resp)=>{
      navigate("/content", { replace: true });
      })
  };

  if (Form === "SignUp") {
    return (
      <div>
        {" "}
        <div>
          <div id="login-form-wrap">
            <h2>Sign Up</h2>
            <form id="login-form" onSubmit={handleSubmit}>

            <p>
                <input
                  type="text"
                  id="name"
                  onChange={getName}
                  name="name"
                  placeholder="Name"
                  required
                />
                <i className="validation">
                  <span></span>
                  <span></span>
                </i>
              </p>


              <p>
                <input
                  type="text"
                  id="username"
                  onChange={getUserName}
                  name="username"
                  placeholder="Username"
                  required
                />
                <i className="validation">
                  <span></span>
                  <span></span>
                </i>
              </p>

              <p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={getEmail}
                  placeholder="Email Address"
                  pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}"
                  required
                />
                <i className="validation">
                  <span></span>
                  <span></span>
                </i>
              </p>

              <p>
                <input
                  onChange={getPassword}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </p>

              <div className="role">
                <select className="role" required onChange={getRole}>
                  <option defaultValue hidden value="">
                    Select a role
                  </option>
                  <option value="user">User</option>
                  <option value="creator">Creator</option>
                </select>
              </div>

              <p>
                <input type="submit" id="login" value="Sign Up" />
              </p>
            </form>

            <div id="create-account-wrap">
              <p>
                Already have an account?
                <a href="javascript:void(0)" onClick={changeForm}>
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <LoginForm />;
  }
}

export default SignupForm;
