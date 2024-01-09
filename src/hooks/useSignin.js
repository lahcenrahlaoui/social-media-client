import axios from "axios";
import { useState } from "react";

import { LOGIN } from "constants";
import { useAuthContext } from "./useAuthContext";
import {BASE_URL} from "constants"
export const useSignin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const { dispatch } = useAuthContext();
    const singin = async (email, password) => {
        setIsLoading(true);
        setError(null); 
        const data = {   email,   password,  }; 
        const credentials = {    withCredentials: true, };
        
       
    
        const response = await axios.post(`${BASE_URL}/auth/signin`, data , credentials);
        if (response.data.error) {
            setIsLoading(false);
            setError(response.data.error);
            return response.data.error;
        }
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
            type: LOGIN,
            payload: response.data,
        });
        setIsLoading(false);

        return response.data;
    };

    return [singin, error, isLoading];
};
