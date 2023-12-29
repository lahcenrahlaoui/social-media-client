import axios from "axios";
import { useState } from "react";

import { LOGIN } from "../constants";
import { useAuthContext } from "./useAuthContext";

export const useSignin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(null);

    const { dispatch } = useAuthContext();
    const singin = async (email, password) => {
        setIsloading(true);
        setError(null);

        const data = {
            email,
            password,
        };

        const credentials = {
            withCredentials: true,
        };
        
        const baseUrl =
        "https://social-media-server-sand.vercel.app";
    
        const response = await axios.post(`${baseUrl}/auth/signin`, data , credentials);
        if (response.data.error) {
            setIsloading(false);
            setError(response.data.error);
            return response.data.error;
        }
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
            type: LOGIN,
            payload: response.data,
        });
        setIsloading(false);

        return response.data;
    };

    return [singin, error, isLoading];
};
