import { createContext, useContext, useEffect, useReducer } from "react";
import { LOGIN, LOGOUT } from "constants";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();
export const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return { user: action.payload };

        case LOGOUT:
            return { user: null };

        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    useEffect(() => {
        (async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            const token =  user?.token ; 
            if (token && jwtDecode(token).exp < Date.now() / 1000) {
                return localStorage.removeItem("user");
            }
            if (user) {
                dispatch({ type: LOGIN, payload: user });
            }
        })();
    }, []);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
