import { Link } from "react-router-dom";
import logo_page from "../images/logo_page.png";

import { useLogout } from "../hooks/useLogout";
const NavBar = ({ user }) => {
    const { logout } = useLogout();

    const handleLougout = () => {
        logout();
    };

    return (
        <div className="w-full flex justify-center  fixed bg-[#231F20] text-white z-50 ">
            <div className=" flex  justify-between   w-5/6  px-4 py-2 gap-10 h-14    ">
                <img src={logo_page} style={{ width: 100, height: 50 }} />

                <div className=" flex gap-20 items-center    ">
                    {user ? (
                        <>
                            <div className="flex items-center gap-2">
                                <div>{user.name}</div>
                                <img
                                    src={user.image}
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>
                            <Link
                                to={"/signin"}
                                className="text-xl font-semibold capitalize"
                                href="#"
                                onClick={handleLougout}
                            >
                                logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to={"/signin"}
                                className="text-xl font-semibold capitalize"
                                href="#"
                                onClick={handleLougout}
                            >
                                login
                            </Link>
                            <Link
                                to={"/login"}
                                className="text-xl font-semibold capitalize"
                                href="#"
                                onClick={handleLougout}
                            >
                                signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
