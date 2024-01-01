import React from "react";
import { BiSolidComment } from "react-icons/bi";
import { useSelector } from "react-redux";

const CommentIcon = ({ length, addition, setSeeComments, executeScroll }) => {
    const state = useSelector((state) => state.posts);
    console.log(state?.data[0].comments.length);
    return (
        <div
            onClick={() => {
                executeScroll();
                setSeeComments(true);
            }}
            className=" relative cursor-pointer bg-[#6BA4E9] flex items-center justify-center 
                                          text-xl      p-3 text-white rounded-full "
        >
            <BiSolidComment />

            <div className="flex items-center before:justify-center absolute bg-white text-[#6BA4E9] rounded-full w-3.5 h-3.5 right-0 bottom-0 text-xs">
                <div>{length + addition}</div>
            </div>
        </div>
    );
};

export default CommentIcon;
