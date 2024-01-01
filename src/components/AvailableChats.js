/* eslint-disable jsx-a11y/alt-text */

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "hooks/useAuthContext";
import { useDispatch, useSelector } from "react-redux";



import { getFollowingUserAction } from "actions";
const Friends = () => {
    const { user } = useAuthContext();

    // const [followingList, setFollowingsList] = useState([]);

    const state = useSelector((state) => state.followingList);

    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            const data = {};

            dispatch(getFollowingUserAction(data, user));
        }
    }, [dispatch, user]);
    let renderCats;
    if (state.data.length > 0) {
        renderCats = state.data.map((friend) => {
            return (
                <div
                    key={friend.name}
                    className="flex items-center justify-center w-[4rem] h-[4rem]   cursor-pointer"
                >
                    <div className=" w-14 h-14 hover:w-[4rem] hover:h-[4rem] transition-all duration-200  marker:">
                        <img
                            className="rounded-full object-cover h-full w-full "
                            src={friend.image}
                        />
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="sticky top-16    ">
            <div className="  flex flex-col items-center gap-2 rounded-xl bg-white py-2 border  ">
                <div className="font-2xl font-bold">Available Chats</div>

                <div className="grid  grid-flow-col lg:grid-flow-row lg:grid-cols-3 gap-1 ">
                    {renderCats}
                </div>
            </div>
        </div>
    );
};

export default Friends;
