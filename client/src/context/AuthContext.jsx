import { createContext, useContext, useState, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie';


export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [error, setError] = useState(null); // Add error state
    const [loading, setLoading] = useState(true);


    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuth(true);
            setError(null); // Clear any previous errors on successful signup
        } catch (error) {
            setError("Signup failed. Please try again."); // Set error message on failure
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);
            setUser(res.data);
            setIsAuth(true);
            setError(null); // Clear any previous errors on successful signin
        } catch (error) {
            setError("Signin failed. Please check your credentials."); // Set error message on failure
        }
    }

    const logout = ()=>{
        Cookies.remove('token');
        setIsAuth(false);
        setUser(null);

    }

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
              setIsAuth(false);
              setLoading(false);
              return;
            }
      
            try {
              const res = await verifyTokenRequest(cookies.token);
              console.log(res);
              if (!res.data) return setIsAuth(false);
              setIsAuth(true);
              setUser(res.data);
              setLoading(false);
            } catch (error) {
              setIsAuth(false);
              setLoading(false);
            }
          };
          checkLogin();

    }, [])
    

    return (
        <AuthContext.Provider value={{
            signup,
            user,
            isAuth,
            signin,
            error,
            loading,
            logout // Include error in the context value
        }}>
            {children}
        </AuthContext.Provider>
    )
}
