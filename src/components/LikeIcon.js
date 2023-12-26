import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneLike } from "../actions";
import { BiLike } from "react-icons/bi";
import { useAuthContext } from "../hooks/useAuthContext";

const Like = ({item}) => {

    const {user} = useAuthContext()
    const dispatch = useDispatch();
    const handleLike = () => {
        dispatch(setOneLike(item.id , user));
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
