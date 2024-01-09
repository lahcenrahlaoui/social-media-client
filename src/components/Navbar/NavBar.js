/* eslint-disable jsx-a11y/alt-text */

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";

import { Link } from "react-router-dom";
import logo_page from "images/logo_page.png";
import { useMenuAnimation } from "hooks/useMenuAnimation";

import { useLogout } from "hooks/useLogout";
import SearchComponent from "./SearchComponent";
const NavBar = ({ user, focused }) => {
    // for menu dropdown animation
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    const { logout } = useLogout();

    const handleLougout = () => {
        logout();
    };

    const decoded = jwtDecode(user.token);
    user._id = decoded._id;

    useEffect(() => {
        let handler = (e) => {
            if (!scope.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [isOpen, scope]);

    // drop down menu
    const data = (
        <div ref={scope} className={`relative  h-14 w-48 `}>
            <motion.button
                className="right-0 absolute h-full cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="arrow flex h-full  ">
                    <div className="flex items-center gap-2  h-full">
                        <img
                            src={user?.image}
                            className="  rounded-full  object-cover  w-12 h-12"
                        />
                    </div>
                </div>
            </motion.button>

            {/* className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-6 w-full cursor-pointer */}

            <ul
                className={` bg-white divide-y divide-gray-100 rounded-lg shadow  border
                                    absolute top-6 w-full cursor-pointer 
                                    overflow-hidden  transition-all duration-300 ease-in-out 
                `}
            >
                <Link to={"/" + user._id}>
                    <li className="block px-4 py-2 hover:bg-gray-200 ">Home</li>
                </Link>

                <Link
                    to={"/auth/signin"}
                    className=" font-semibold capitalize hover:bg-gray-200"
                    href="#"
                    onClick={handleLougout}
                >
                    <li className="block px-4 py-2 hover:bg-gray-200 ">
                        logout
                    </li>
                </Link>
            </ul>
        </div>
    );

    return (
        <div
            className={`w-[100vw] flex justify-center  fixed bg-white ${
                focused ? "z-[20]" : "z-[50]"
            }  `}
        >
            <div
                className={` flex justify-between w-5/6 px-4 py-2 gap-10 h-14 `}
            >
                <Link to={"/"} className="cursor-pointer">
                    <img src={logo_page} style={{ width: 100, height: 50 }} />
                </Link>

                <SearchComponent />

                <div className=" flex gap-20 items-center    ">
                    {user ? (
                        <>
                            <div className="relative ">{data}</div>
                        </>
                    ) : (
                        <>
                            <Link
                                to={"/auth/signin"}
                                className="text-xl font-semibold capitalize"
                                href="#"
                                onClick={handleLougout}
                            >
                                login
                            </Link>
                            <Link
                                to={"/auth/login"}
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
