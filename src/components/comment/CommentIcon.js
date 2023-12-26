import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneLike } from "../../actions";
import { BiComment } from "react-icons/bi";
import axios from "axios";

const CommentIcon = ({ item, seeComments, ...rest }) => {
    
    

    return (
        <div
            {...rest}
            className="flex items-center justify-center w-1/3 gap-2 py-2 cursor-pointer border-x hover:bg-blue-200"
        >
            <BiComment />

            {item?.comments?.length}
        </div>
    );
};

export default CommentIcon;
