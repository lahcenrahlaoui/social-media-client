import axios from "axios";
import { useState } from "react";

import { LOGIN } from "../constants";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(null);

    const { dispatch } = useAuthContext();
    const singup = async (email, password) => {
        setIsloading(true);
        setError(null);

        const data = {
            email,
            password,
        };

        const response = await axios.post("/auth/signup", data);
        console.log(response);
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

        return response.data;
    };

    return [singup, error, isLoading];
};
