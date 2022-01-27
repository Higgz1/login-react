import "./LoginForm.css";
import SignupForm from "../SignUpForm/SignupForm";
import { useState } from "react";

function LoginForm() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Form, setForm] = useState("Login");

  const changeForm = () => {
    setForm("SignUp");
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      
      Email,
      Password,
      
    };
    console.log(newUser);
  };

  if (Form === "Login") {
    return (
      <div>
        <div id="login-form-wrap">
          <h2>Login</h2>
          <form id="login-form" onSubmit={handleSubmit}>
            <p>
              <input
                onChange={getEmail}
                type="email"
                id="email"
                name="email"
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

            <p>
              <input type="submit" id="login" value="Login" />
            </p>
          </form>

          <div id="create-account-wrap">
            <p>
              Not a member?
              <a href="javascript:void(0)" onClick={changeForm}>
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <SignupForm />;
  }
}

export default LoginForm;
