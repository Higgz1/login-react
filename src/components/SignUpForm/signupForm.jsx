import "./SignupForm.css";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

function SignupForm() {
  const [Form, setForm] = useState("SignUp");
  const changeForm = () => {
    setForm("Login");
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e)


  }

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
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </p>

              <div className="role">
                <select className="role" required>
                  <option selected hidden value=""  >
                    Select a role
                  </option>
                  <option value="grapefruit">
                    User
                  </option>
                  <option value="lime">Creator</option>
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
