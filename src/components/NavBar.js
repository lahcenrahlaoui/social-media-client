/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import logo_page from "../images/logo_page.png";

import { useLogout } from "../hooks/useLogout";
const NavBar = ({ user }) => {
    const { logout } = useLogout();

    const handleLougout = () => {
        logout();
    };

    return (
        <div className="w-full flex justify-center  fixed bg-[#f0f0f0]   z-50 ">
            <div
                className={` flex justify-between w-5/6 px-4 py-2 gap-10 h-14 `}
            >
                <img src={logo_page} style={{ width: 100, height: 50 }} />

                <div className=" flex gap-20 items-center    ">
                    {user ? (
                        <>
                            <div className="flex items-center gap-2">
                                <div className="capitalize">{user.name}</div>

                                <img
                                    className="rounded-full  min-w-[3rem] min-h-[3rem] object-cover  w-[3rem] h-[3rem] bg-blue-200"
                                    src={user?.image}
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
