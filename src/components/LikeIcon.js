import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneLikeAction } from "../actions";
import { BiHeart, BiLike, BiSolidLike } from "react-icons/bi";
import { useAuthContext } from "../hooks/useAuthContext";

import "boxicons";

const LikeIcon = ({ item }) => {
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

    const heartRef = useRef();

    const handleHeartClick = () => {
        if (user) {
            heartRef.current.classList.toggle("bands");
            dispatch(setOneLikeAction(item._id, user));
        }
    };

    const xxx = (
        <svg
            ref={heartRef}
            className="mo-icon__svg"
            x="0px"
            y="0px"
            viewBox="0 0 200 200"
            style={{ enableBackground: "new 0 0 200 200" }}
            xmlSpace="preserve"
            id="heart4"
        >
            <g id="icon_x5F_wishlist">
                <g transform="translate(0,-952.36218)">
                    <path
                        className="st0"
                        id="st0"
                        d="M15.33293,980.7616c-19.11968,19.8092-19.10147,51.68518,0,71.51379l84.61456,87.86926 c28.23759-29.25574,56.47517-58.51135,84.71275-87.76758c19.11969-19.80969,19.11969-51.70477,0-71.51422 c-19.12007-19.80945-49.90512-19.80994-69.02521,0l-15.58933,16.15155l-15.68754-16.25305 c-19.12008-19.80945-49.90513-19.80945-69.02521,0L15.33293,980.7616z"
                    />
                </g>
            </g>
        </svg>
    );

    return (
        <>
            <div
                onClick={handleHeartClick}
                className="cursor-pointer bg-[#6BA4E9] flex items-center justify-center p-2.5 text-white rounded-full "
            >
                {/* {(regularLike !== null &&
                    regularLike !== undefined &&
                    allLikes.length) ||
                    0} */}

                {allLikes.includes(user.email) ? (
                    <div className="flex items-center justify-center w-5 h-5">
                        {xxx}
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-5 h-5">
                        {xxx}
                    </div>
                )}
            </div>
        </>
    );
};

export default LikeIcon;
