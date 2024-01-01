/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";

import { differenceInMinutes } from "date-fns";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsAction } from "actions";
import { useAuthContext } from "hooks/useAuthContext";
import { formateDate } from "utils/functions";
const Comments = ({ item, seeComments, skipValue, setSkipValue }) => {
    const { user } = useAuthContext();
    const dispatch = useDispatch();

    // get all comments fot the post
    const state = useSelector((state) => state.comments);

    const handleFetchComments = () => {
        const data = {
            postId: item._id,
            skipValue: skipValue,
        };
        if (user) {
            dispatch(fetchCommentsAction(data, user));
            setSkipValue((state) => state + 3);
        }
    };

    useEffect(() => {
        if (seeComments && !skipValue) {
            handleFetchComments();
        }
    }, [seeComments, item, user]);

    console.log("******************************");

    let renderComments;
    if (Object.keys(state.data).includes(item._id)) {
        const comments = state.data[item._id];

        renderComments = comments.map((comment, idx) => {
            return (
                <React.Fragment key={idx}>
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
                </React.Fragment>
            );
        });
    }

    return (
        <div className=" gap-1 cursor-pointer px-6 py-5 ">
            {renderComments}

            <div
                className="float-right underline text-blue-600 capitalize"
                onClick={() => {
                    handleFetchComments();
                }}
            >
                {item.comments.length > skipValue && " load more"}
            </div>
        </div>
    );
};

export default Comments;
