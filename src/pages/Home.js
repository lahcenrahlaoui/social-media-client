import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post.js";
import { useEffect } from "react";
import { getPost, getPosts } from "../actions";
import NavBar from "../components/NavBar.js";

import FormPost from "../components/FormPost.js";
import NavSide from "../components/NavSide.js";
import FriendSide from "../components/FriendSide.js";
import SearchComponent from "../components/SearchComponent.js";
import { useAuthContext } from "../hooks/useAuthContext.js";
import { useNavigate } from "react-router-dom";

function Home() {
    const state = useSelector((state) => state.posts);

    const { user } = useAuthContext();
    let navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            dispatch(getPosts(user));
        }
    }, [dispatch, user]);

    const renderItems = state?.data?.map((item) => {
        return (
            <div className={item.classes || ""} key={item._id}>
                <Post user={user} item={item} isLoading={state.isLoading} />
            </div>
        );
    });

    return (
        <div className="w-full pb-20">
            <NavBar user={user} />

            {state.isLoading ? (
                ""
            ) : (
                <div className="flex items-center justify-center gap-4 mt-14 pt-2  bg-[#F4F2F2] w-full">
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
