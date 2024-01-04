import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneLikeAction } from "actions";
import { BiHeart, BiLike, BiSolidLike } from "react-icons/bi";
import { useAuthContext } from "hooks/useAuthContext";

import "boxicons";

const LikeIcon = ({ item, allLikes, regularLike }) => {
    const { user } = useAuthContext();
    const dispatch = useDispatch();
    // const handleLike = () => {
    //     if (user) {
    //         dispatch(setOneLikeAction(item._id, user));
    //     }
    // };

    const heartRef = useRef();

    useEffect(() => {
        if (allLikes?.includes(user.email)) {
            heartRef?.current?.classList.remove("bands-no");
            heartRef?.current?.classList.add("bands");
        } else {
            heartRef?.current?.classList.add("bands-no");
            heartRef?.current?.classList.remove("bands");
        }
    }, [allLikes, user.email]);

    const handleHeartClick = () => {
        if (user) {
            dispatch(setOneLikeAction(item._id, user));
        }
    };

    const xxx = (
        <svg
            ref={heartRef}
            className="mo-icon__svg absolute "
            x="0px"
            y="0px"
            viewBox="0 0 200 200"
            style={{ enableBackground: "new 0 0 200 200" }}
            xmlSpace="preserve"
            id="heart4_0"
        >
            <g id="icon_x5F_wishlist">
                <g transform="translate(0,-952.36218)">
                    <path
                        className="st0 absolute"
                        id="st0"
                        d="M15.33293,980.7616c-19.11968,19.8092-19.10147,51.68518,0,71.51379l84.61456,87.86926 c28.23759-29.25574,56.47517-58.51135,84.71275-87.76758c19.11969-19.80969,19.11969-51.70477,0-71.51422 c-19.12007-19.80945-49.90512-19.80994-69.02521,0l-15.58933,16.15155l-15.68754-16.25305 c-19.12008-19.80945-49.90513-19.80945-69.02521,0L15.33293,980.7616z"
                    />
                </g>
            </g>
        </svg>
    );
    const yyy = (
        <svg
            className="mo-icon__svg absolute "
            x="0px"
            y="0px"
            viewBox="0 0 200 200"
            style={{ enableBackground: "new 0 0 200 200" }}
            xmlSpace="preserve"
            id="heart4_1"
        >
            <g id="icon_x5F_wishlist">
                <g transform="translate(0,-952.36218)">
                    <path
                        className="st0 absolute"
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
                className="  cursor-pointer overflow-hidden bg-[#6BA4E9] flex items-center justify-center p-3 text-white rounded-full "
            >
                <div className="relative  flex items-center justify-center w-5 h-5">
                    {xxx}

                    {yyy}
                </div>
                <div className="flex items-center justify-center absolute bg-white text-[#3e8be9] rounded-full w-3.5 h-3.5 right-0 bottom-0 text-xs">
                    <div
                        className={`   ${
                            allLikes?.includes(user.email) && "text-red-400"
                        }   `}
                    >
                        {(regularLike !== null &&
                            regularLike !== undefined &&
                            allLikes?.length) ||
                            0}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LikeIcon;
