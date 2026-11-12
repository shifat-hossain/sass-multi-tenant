
import { createContext, useContext, useEffect, useState } from "react";
import { axiosCLient } from "../lib/axios";

export const AuthContext = createContext(null);

export function AuthProvider( { children }) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const { data } = await axiosCLient.get('api/user');
            setAuthUser(data.data);
        } catch (error) {
            setAuthUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = (user) => {
        setAuthUser(user);
    }

    const logout = async () => {
        try {
            await axiosCLient.post('api/logout');
        } catch (error) {
            // ignore errors
        }
        setAuthUser(null);
    }

    return (
        <AuthContext value={{ authUser, login, logout, isLoggedIn: authUser !== null, isLoading }}>
            {children}
        </AuthContext>
    )
}

export const useAuth = () => useContext(AuthContext);
