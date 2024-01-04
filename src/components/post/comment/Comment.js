/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BiHeart } from "react-icons/bi";

import { formateDate } from "utils/functions";

const Comment = ({ comment }) => {
    return (
        <>
            <div className="flex justify-between items-center ">
                <div className="flex gap-3 ">
                    <div className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem]">
                        <img
                            src={comment.image}
                            className="bg-yellow-200 rounded-full  object-cover  w-10 h-10"
                        />
                    </div>

                    <div className="flex flex-col justify-center  ">
                        <div className="text-xs font-semibold">
                            {comment.name}
                        </div>
                        <p>{comment.content}</p>
                        <p className="text-gray-600 text-xs">
                            {formateDate(comment.createdAt)}
                        </p>
                    </div>
                </div>
                <div className=" ">
                    <BiHeart />
                </div>
            </div>

            <div className="bg-gray-200 w-full h-px  my-3">&nbsp;</div>
        </>
    );
};

export default Comment;
