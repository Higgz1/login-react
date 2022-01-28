import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);
  

  const login = async (newUser) => {
    setUser({})
    const response = await fetch("https://react-login-test1.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();
    // console.log(data.access_token);

    var token = data.access_token;
    var decoded = jwtDecode(token);

    console.log(decoded.user);
    setUser(decoded.user)
    setAuth(true)
    
  };

  const signUp = async (newUser) => {
    setUser({})
    const response = await fetch("https://react-login-test1.herokuapp.com/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const user_data = await response.json()

    // console.log('response',user_data);
    const user_details = {
        email:user_data.email,
        password:newUser.password
    }
 
    await login(user_details)
  };

  const LogOut =  () => {
    setUser("")

  };

  return (
    <UserContext.Provider
      value={{
        user,
        auth,
        login,
        signUp,
        LogOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
