import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsProfile } from "actions";
import NavBar from "components/Navbar/NavBar.js";
import Post from "components/post/Post";

import { useAuthContext } from "hooks/useAuthContext.js";
import MiddleSide from "./MiddleSide";
import { useLocation } from "react-router-dom";
import PostSkeleton from "components/post/PostSkeleton";

function Profile() {
    const state = useSelector((state) => state.profilePosts);

    const { user } = useAuthContext();

    const { pathname } = useLocation();

    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            dispatch(getPostsProfile(user));
        }
    }, [dispatch, user, pathname]);

    const [focused, setFocused] = useState(false);

    const skeletonRenderArray = [0, 0, 0];

    let skeleton = skeletonRenderArray.map((i, idx) => {
        if (typeof i !== "number") {
            return i;
        } else {
            return <PostSkeleton key={idx} />;
        }
    });

    return (
        <div className=" relative w-full pb-14 bg-[#F4F4F4]  ">
            <NavBar user={user} focused={focused} />

            {state.isLoading ? (
                <div
                    className={`flex flex-col  items-center justify-center gap-4 
                                mt-14  pt-2 bg-[#F4F4F4] 
                                w-full transition-all  ease-in duration-500  
                            `}
                >
                    {skeleton}
                </div>
            ) : (
                <>
                    <div
                        className={`flex flex-col lg:flex-row items-center justify-center gap-4 
                         mt-14  pt-2 bg-[#F4F4F4] 
                         w-full transition-all  ease-in duration-500   
                     `}
                    >
                        <div className="grid grid-cols-12 gap-4 w-11/12  ">
                        <div className="col-start-4 col-span-6">
                            <MiddleSide state={state} user={user} />
                        </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Profile;
