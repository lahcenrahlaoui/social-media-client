import { Link, useLocation } from "react-router-dom";
import cart from "../images/cart.png";
import logo_page from "../images/logo_page.png";

import { useDispatch } from "react-redux";

import { getPost } from "../actions/postAction";
const NavBar = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const onGoBack = () => {
        dispatch(getPost(null));
    };

    return (
        <div className=" flex fixed justify-between border-b border-black px-4 py-2 w-full gap-10 h-14 bg-white z-50 ">
            <img src={logo_page} style={{ width: 100, height: 50 }} />

            
            <div className=" flex gap-4 items-center    ">
                <Link
                    to={"/login"}
                    className="text-xl font-semibold capitalize"
                    href="#"
                >
                    login
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
