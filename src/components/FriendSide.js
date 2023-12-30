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

    if (state.data.length > 0) {
        renderList = state.data.map((friend) => {
            return <Friend key={friend._id} friend={friend} />;
        });
    }

    return (
        <div className="  w-full   ">
            <div className="  flex flex-col items-center gap-2 rounded-xl  py-2 border  ">
                <div className="font-2xl font-bold">suggestion</div>

                {/* <div className="grid grid-col-1 gap-1   "> */}
                <div className="grid  grid-flow-col lg:grid-flow-row lg:grid-cols-5 gap-1 ">

                    
                    
                    {renderList}</div>
            </div>
        </div>
    );
};

export default FrinedSide;
