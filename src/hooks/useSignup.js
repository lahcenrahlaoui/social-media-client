import axios from "axios";
import { useState } from "react";

import { LOGIN } from "constants";
import { useAuthContext } from "./useAuthContext";
import { BASE_URL } from "constants";
export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { dispatch } = useAuthContext();
    const singup = async (formData) => {
        setIsLoading(true);
        setError(null);

        const credentials = { withCredentials: true };

        const response = await axios.post(`${BASE_URL}/auth/signup`,formData,credentials);

        
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

    return [singup, error, isLoading];
};
