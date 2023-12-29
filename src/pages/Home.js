import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../actions";
import NavBar from "../components/NavBar.js";
import Post from "../components/Post.js";

import FormPost from "../components/FormPost.js";
import FriendSide from "../components/FriendSide.js";
import NavSide from "../components/NavSide.js";
import SearchComponent from "../components/SearchComponent.js";
import { useAuthContext } from "../hooks/useAuthContext.js";

function Home() {
    const state = useSelector((state) => state.posts);

    const { user } = useAuthContext();

    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            dispatch(getPostsAction(user));
        }
    }, [dispatch, user]);

    const renderItems = state?.data?.map((item) => {
        return (
            <div className={item.classes || ""} key={item._id}>
                <Post user={user} item={item} isLoading={state.isLoading} />
            </div>
        );
    });
console.log("Loading000000000000000000")
    return (
        <div className="w-full pb-20">
            <NavBar user={user} />

            {state.isLoading ? (
                ""
            ) : (
                <div
                    className={`flex items-center justify-center gap-4 mt-24  pt-2  bg-[#ffffff]  w-full
                    transition-all transition ease-in duration-500  
                    `}
                >
                    <div className="grid grid-cols-12 gap-4 w-11/12">
                        <div className="flex flex-col gap-2 col-span-3 px-3  ">
                            <NavSide />
                        </div>

                        <div className="col-span-5  ">
                            <div className="flex flex-col gap-4 items-center   ">
                                <FormPost user={user} />

                                <div className="flex w-full text-sm justify-between items-center">
                                    <div className="flex gap-2">
                                        <div>New posts </div>
                                        <div>trend </div>
                                    </div>

                                    <SearchComponent />
                                </div>

                                <div className="flex items-center justify-center  w-full ">
                                    <div className="grid flex-1  w-full grid-cols-1 gap-4 ">
                                        {renderItems}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <FriendSide />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
