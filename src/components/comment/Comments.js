/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";

import { Divider, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../actions";
import { BiHeart } from "react-icons/bi";
import { useAuthContext } from "../../hooks/useAuthContext";
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
         
            dispatch(fetchComments(data, user));
            setSkipValue((state) => state + 3);
        }
    };

    useEffect(() => {
        if (seeComments && !skipValue) {
            handleFetchComments();
        }
    }, [seeComments, item]);

    let renderComments;
    if (Object.keys(state.data).includes(item._id)) {
        const c = state.data[item._id];
        renderComments = c.map((comment, idx) => {
            return (
                <React.Fragment key={idx}>
                    <div className="flex justify-between items-center ">
                        <div className="flex gap-3 ">
                            <div>
                                <img
                                    className=" w-10 h-10 rounded-full "
                                    src={
                                        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    }
                                />
                            </div>
                            <div className="flex flex-col justify-center  ">
                                <div className="text-xs font-semibold">
                                    Michel Michel
                                </div>
                                <p>{comment.content}</p>
                                <p className="text-gray-600 text-xs">
                                    {" "}
                                    1 minute ago
                                </p>
                            </div>
                        </div>
                        <div className=" ">
                            <BiHeart />
                        </div>
                    </div>

                    <Divider
                        variant="fullWidth"
                        style={{ margin: "0.5rem 0" }}
                    />
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
