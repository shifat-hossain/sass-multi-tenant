import { createContext, useContext, useEffect, useState } from "react";
import { axiosCLient } from "../lib/axios";

export const AuthContext = createContext(null);

export function AuthProvider( { children }) {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
        try {
            await axiosCLient.get('/sanctum/csrf-cookie');
            const { data } = await axiosCLient.get('api/user');
            setAuthUser(data);
        } catch (error) {
            setAuthUser(null);
        }
    };

    fetchUser();
    }, []);

    const login = (user) => {
        setAuthUser(user);
    }

    const logout = () => {
        setAuthUser(null);
    }

    return (
        <AuthContext value={{ authUser, login, logout, isLoggedIn: authUser !== null }}>
            {children}
        </AuthContext>
    )
}

export const useAuth = () => useContext(AuthContext);
