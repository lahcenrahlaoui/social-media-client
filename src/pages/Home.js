import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post.js";
import { useEffect } from "react";
import { getPost, getPosts } from "../actions/postAction.js";
import NavBar from "../components/NavBar.js";

import FormPost from "../components/FormPost.js";
import NavSide from "../components/NavSide.js";
import FriendSide from "../components/FriendSide.js";
import SearchComponent from "../components/SearchComponent.js";

import { Box, Container, Divider, Grid, ListItem } from "@mui/material";

function Home() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const renderItems = state?.data?.map((item) => {
        return (
            <div className={item.classes || ""} key={item.id}>
                <Post item={item} isLoading={state.isLoading} />
            </div>
        );
    });

    return (
        <div className="w-full pb-20">
            <NavBar />
            {/* <Hero /> */}
            {state.isLoading ? (
                ""
            ) : (
                <div className="grid grid-cols-12 gap-4 mt-16    w-full">
                    <div className="col-span-3">
                        <div className="flex flex-col gap-2 col-span-4   px-3">
                            {/* <FormPost /> */}
                            <NavSide />
                        </div>
                    </div>
                    <div className="col-span-5  ">
                        <div className="flex flex-col gap-4 items-center   ">
                            <FormPost />

                            <div className="flex justify-between items-center">
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
                        <div>
                            <FriendSide />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
