/* eslint-disable jsx-a11y/alt-text */

import { useEffect } from "react";
import { useAuthContext } from "hooks/useAuthContext";
import { useDispatch, useSelector } from "react-redux";

import { getFollowingUserAction } from "actions";
import { Link } from "react-router-dom";
import SkeletonSmallImages from "../../../components/SkeletonSmallImages";
const FollowingList = () => {
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
    let renderChats;
    const skeletonRenderArray = [0, 0, 0];
    if (state.data.length > 0) {
        renderChats = state.data.map((friend) => {
            return (
                <Link key={friend.name} to={"/" + friend._id}>
                    <div className="flex items-center justify-center w-[4rem] h-[4rem]   cursor-pointer">
                        <div className=" w-14 h-14 hover:w-[4rem] hover:h-[4rem] transition-all duration-200  marker:">
                            <img
                                className="rounded-full object-cover h-full w-full "
                                src={friend.image}
                            />
                        </div>
                    </div>
                </Link>
            );
        });
        skeletonRenderArray.pop([0]);
        skeletonRenderArray.pop([0]);
        skeletonRenderArray.unshift(...renderChats);
    }

    let skeleton = skeletonRenderArray.map((i, idx) => {
        if (typeof i !== "number") {
            return i;
        } else {
            return <SkeletonSmallImages key={idx} />;
        }
    });

    return (
        <div className="sticky top-16    ">
            <div
                className={`  flex flex-col items-center gap-2 rounded-xl bg-white   border ${
                    renderChats?.length > 0 ? "py-2" : "pt-2"
                } `}
            >
                <div className="font-2xl font-bold">Following List </div>

                <div className="grid  grid-flow-col lg:grid-flow-row lg:grid-cols-3 gap-1 ">
                    {state.isLoading
                        ? skeleton
                        : renderChats || (
                              <div className="text-lg text-orange-700 bg-orange-100 py-2 px-4 col-span-3 text-center ">
                                  {" "}
                                  Follow someone to see new feeds{" "}
                              </div>
                          )}
                </div>
            </div>
        </div>
    );
};

export default FollowingList;
