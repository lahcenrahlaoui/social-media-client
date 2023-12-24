import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneLike } from "../actions/postAction";
import { BiLike } from "react-icons/bi";

const Like = ({item}) => {

    const dispatch = useDispatch();
    const handleLike = () => {
        dispatch(setOneLike(item.id));
    };

    const likesState = useSelector((state) => state.likes.data);

    const likes = likesState.filter((like) => {
        if (item.id === Object.keys(like).join("")) {
            return Object.values(like);
        }
    });

    const regularLike = likes[0];




    return (
        <div
            onClick={handleLike}
            className="flex items-center justify-center w-1/3 gap-2 py-2 cursor-pointer border-x hover:bg-blue-200"
        >
            <BiLike />
            {(regularLike !== null &&
                regularLike !== undefined &&
                Object.values(regularLike)[0].length) ||
                0}
        </div>
    );
};

export default Like;
