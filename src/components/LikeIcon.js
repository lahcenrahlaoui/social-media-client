import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneLikeAction } from "../actions";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useAuthContext } from "../hooks/useAuthContext";

const Like = ({ item }) => {
    const { user } = useAuthContext();
    const dispatch = useDispatch();
    const handleLike = () => {
        if (user) {
            dispatch(setOneLikeAction(item._id, user));
        }
    };

    const likesState = useSelector((state) => state.likes.data);

    const likes = likesState.filter((like) => {
        if (item._id === Object.keys(like).join("")) {
            return Object.values(like);
        }
    });

    const regularLike = likes[0];

    const allLikes = Object.values(regularLike)[0];

    return (
        <div
            onClick={handleLike}
            className="flex items-center justify-center w-1/3 gap-2 py-2 cursor-pointer border-x hover:bg-blue-200"
        >
            {allLikes.includes(user.email) ? (
                <BiSolidLike className="text-blue-400" />
            ) : (
                <BiLike className="test-red-200" />
            )}
            {(regularLike !== null &&
                regularLike !== undefined &&
                allLikes.length) ||
                0}
        </div>
    );
};

export default Like;
