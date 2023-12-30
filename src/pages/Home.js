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
import Stories from "../components/Stories.js";

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

    const [focused, setFocused] = useState(false);

    useEffect(() => {
        if (focused) {
            document.body.style.overflow = "hidden";
            document.body.style.width = "calc(100vw - 16px)";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.width = "100%";
        }
    }, [focused]);

    return (
        <div className=" relative w-full pb-20 bg-[#F4F4F4]  ">
            <div
                className={`${
                    focused
                        ? "absolute  w-full h-full bg-[#00000060] z-[30] "
                        : ""
                }`}
            ></div>
            <NavBar user={user} focused={focused} />
            {state.isLoading ? (
                ""
            ) : (
                <>
                    <div
                        className={`flex flex-col lg:flex-row items-center justify-center gap-4 mt-24  pt-2  bg-[#F4F4F4]  w-full
                    transition-all  ease-in duration-500  
                    `}
                    >
                        <div className="grid grid-cols-12 gap-4 w-11/12">
                            <div
                                className={`${
                                    !focused
                                        ? "focused-opacity-none"
                                        : "focused-opacity"
                                } flex flex-col gap-2 col-span-12 lg:col-span-3  px-3  `}
                            >
                                <NavSide />
                            </div>
                            <div
                                className={`${
                                    !focused
                                        ? "focused-opacity-none"
                                        : "focused-opacity"
                                }  lg:hidden   gap-2 col-span-12 lg:col-span-3  px-3 `}
                            >
                                <FriendSide />
                            </div>
                            <div className="col-span-12 lg:col-span-6 z-[40] ">
                                <div className="flex flex-col gap-4 items-center   ">
                                    <FormPost
                                        user={user}
                                        focused={focused}
                                        setFocused={setFocused}
                                    />

                                    {/* <div
                                        className={`${
                                            !focused
                                                ? "focused-opacity-none"
                                                : "focused-opacity"
                                        } flex w-full text-sm justify-between items-center`}
                                    >
                                        <div className="flex gap-2">
                                            <div>New posts </div>
                                            <div>trend </div>
                                        </div>

                                        <SearchComponent />
                                    </div> */}

                                    <div
                                        className={`${
                                            !focused
                                                ? "focused-opacity-none"
                                                : "focused-opacity"
                                        } flex items-center justify-center  w-full `}
                                    >
                                        <div className="grid flex-1  w-full grid-cols-1 gap-4 ">
                                            {renderItems}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`
                                
                                flex flex-col gap-2 
                                ${
                                    !focused
                                        ? "focused-opacity-none"
                                        : "focused-opacity"
                                } hidden lg:block  col-span-3  `}
                            >
                                <Stories />
                                <FriendSide />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
