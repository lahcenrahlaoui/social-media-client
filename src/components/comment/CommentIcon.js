import React from "react";
import { BiComment } from "react-icons/bi";

const CommentIcon = ({ length, seeComments, ...rest }) => {
    return (
        <div
            {...rest}
            className="flex items-center justify-center w-1/3 gap-2 py-2 cursor-pointer border-x hover:bg-blue-200"
        >
            <BiComment />

            {length}
        </div>
    );
};

export default CommentIcon;
