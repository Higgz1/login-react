import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = async (newUser) => {
    const response = await fetch("http://localhost:3000/users/login", {
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
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
