import "./SignupForm.css";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

function SignupForm() {
  const [Form, setForm] = useState("SignUp");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");

  const changeForm = () => {
    setForm("Login");
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
      Username,
      Email,
      Password,
      Role
    };
    console.log(newUser);
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
