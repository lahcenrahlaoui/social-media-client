import { useEffect, useState } from "react";
import Friend from "./Friend";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDispatch, useSelector } from "react-redux";
import { followingUserAction, getSuggestionAction } from "../actions";

const FrinedSide = () => {
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

    console.log("state.data000000000000")
    console.log(state.data)
    if (state.data.length > 0) {
        renderList = state.data.map((friend) => {
            return <Friend key={friend._id} friend={friend} />;
        });
    }

    return (
        <div className="relative h-full   w-full   ">
            <div className="fixed flex flex-col items-center h-full gap-3 w-fit ">
                <div className="font-2xl font-bold capitalize">suggestion</div>

                <div className="grid grid-cols-1 gap-3 w-full ">
                    {renderList}
                </div>
            </div>
        </div>
    );
};

export default FrinedSide;
