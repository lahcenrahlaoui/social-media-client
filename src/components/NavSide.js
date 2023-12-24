import { Link, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { BiSolidUserPlus } from "react-icons/bi";

import { getPost } from "../actions/postAction";
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
        "https://placekitten.com/g/310/310",
        "https://placekitten.com/g/318/318",
        "https://placekitten.com/g/312/312",
        "https://placekitten.com/g/313/313",
        "https://placekitten.com/g/314/314",
    ];

    const renderCats = cats.map((cat) => {
        return (
            <div
                key={cat}
                className="flex items-center justify-center w-[4.5rem] h-[4.5rem]"
            >
                <div className=" w-16 h-16 hover:w-[4.5rem] hover:h-[4.5rem] transition-all duration-200 ">
                    <img className="rounded-full" src={cat} />
                </div>
            </div>
        );
    });

    return (
        <div className="relative h-full w-80 pt-2 ">
            <div className="fixed flex flex-col items-center w-80 gap-2 rounded-xl bg-red-100 bg-white py-2 border  ">
                <div className="font-2xl font-bold">i m following</div>

                <div className="grid grid-cols-4 gap-1 ">{renderCats}</div>
            </div>
        </div>
    );
};

export default NavSide;
