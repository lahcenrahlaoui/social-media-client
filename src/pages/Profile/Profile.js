import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsProfile } from "actions";
import NavBar from "components/Navbar/NavBar.js";
import Post from "components/post/Post.js";

import { useAuthContext } from "hooks/useAuthContext.js";
import MiddleSide from "./MiddleSide";

function Profile() {
    const state = useSelector((state) => state.profilePosts);

    const { user } = useAuthContext();

    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            dispatch(getPostsProfile(user));
        }
    }, [dispatch, user]);

    const renderItems = state?.data?.map((item) => {
        return (
            <div className={item.classes || ""} key={item._id}>
                <Post user={user} item={item} isLoading={state.isLoading} />
            </div>
        );
    });

    const [focused, setFocused] = useState(false);

    return (
        <div className=" relative w-full pb-14 bg-[#F4F4F4]  ">
            <NavBar user={user} focused={focused} />

            {state.isLoading ? (
                ""
            ) : (
                <>
                    <div
                        className={`flex flex-col lg:flex-row items-center justify-center gap-4 mt-14  pt-2  bg-[#F4F4F4]  w-full
                    transition-all  ease-in duration-500  
                    `}
                    >
                        <MiddleSide />
                    </div>
                </>
            )}
        </div>
    );
}

export default Profile;
