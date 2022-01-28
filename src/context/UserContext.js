import { createContext, useState, useEffect } from 'react';
const UserContext = createContext()

export const UserProvider = ({children})=>{

    const [user, setUser] = useState({});

    return <UserContext.Provider value={{
        user
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext