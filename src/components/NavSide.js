/* eslint-disable jsx-a11y/alt-text */
import { Link, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { BiSolidUserPlus } from "react-icons/bi";

import { getPost } from "../actions";
const NavSide = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const onGoBack = () => {
        dispatch(getPost(null));
    };

    const cats = [
        "https://placekitten.com/g/300/300",
        "https://placekitten.com/g/301/301",
        "https://placekitten.com/g/302/302",
        "https://placekitten.com/g/303/303",
        "https://placekitten.com/g/304/304",
        "https://placekitten.com/g/305/305",
        "https://placekitten.com/g/306/306",
        "https://placekitten.com/g/307/307",
        "https://placekitten.com/g/308/308",
        "https://placekitten.com/g/309/309",
 
    ];

    const renderCats = cats.map((cat) => {
        return (
            <div
                key={cat}
                className="flex items-center justify-center w-[4rem] h-[4rem] cursor-pointer"
            >
                <div className=" w-14 h-14 hover:w-[4rem] hover:h-[4rem] transition-all duration-200 ">
                    <img className="rounded-full" src={cat} />
                </div>
            </div>
        );
    });

    return (
        <div className="sticky top-16   h-screen  ">
            <div className="  flex flex-col items-center gap-2 rounded-xl bg-white border bg-white py-2 border  ">
                <div className="font-2xl font-bold">Chat with</div>

                <div className="grid grid-cols-3 gap-1 ">{renderCats}</div>
            </div>
        </div>
    );
};

export default NavSide;
