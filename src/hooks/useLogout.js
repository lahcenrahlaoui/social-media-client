import { LOGOUT } from "../constants";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const logout = async (email, password) => {
        localStorage.removeItem("user");
        dispatch({
            type: LOGOUT,
        });
    };

    return { logout };
};
