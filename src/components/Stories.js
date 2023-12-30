/* eslint-disable jsx-a11y/alt-text */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";

import { getFollowingUserAction } from "../actions";
const Stories = () => {
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

    return (
        <div className="sticky top-16    ">
            <div className="  flex flex-col items-center gap-2 rounded-xl bg-white py-2 border  ">
                <div className="font-2xl font-bold">Stories</div>

                <div className="grid  grid-flow-col lg:grid-flow-row lg:grid-cols-3 gap-1 ">
                    {renderCats}
                </div>
            </div>
        </div>
    );
};

export default Stories;
