import { useEffect, useState } from "react";
import Friend from "../../../components/Friend";
import axios from "axios";
import { useAuthContext } from "hooks/useAuthContext";
import { useDispatch, useSelector } from "react-redux";
import { followingUserAction, getSuggestionAction } from "actions";

const Suggestions = () => {
    const { user } = useAuthContext();

    const state = useSelector((state) => state.suggestionList);
    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            const data = {};

            dispatch(getSuggestionAction(data, user));
        }
    }, [dispatch, user]);
    let renderList;

    if (state.data.length > 0) {
        renderList = state.data.map((friend) => {
            return <Friend key={friend._id} friend={friend} />;
        });
    }

    return (
        <div className="  w-full bg-white  ">
            <div className="  flex flex-col items-center gap-2 rounded-xl  py-2 border   ">
                <div className="font-2xl font-bold">suggestion</div>

                <div className="flex flex-wrap  items-center justify-center  ">
                    {renderList}
                </div>
            </div>
        </div>
    );
};

export default Suggestions;