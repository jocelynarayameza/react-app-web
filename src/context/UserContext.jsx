import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children})  => {
    const [user, setUser] = useState(true)

    const logout = () => {
        setUser(false)
    }

    return (
        <UserContext.Provider value ={{user, logout}}>
            {children}
        </UserContext.Provider>
    )
}