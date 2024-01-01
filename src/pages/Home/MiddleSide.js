import Post from "components/post/Post";
import FormPost from "./FormPost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPostsAction } from "actions";
import { createEditorStateWithText } from "@draft-js-plugins/editor";

const MiddleSide = ({ user, focused, setFocused }) => {
    const state = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const [content, setContent] = useState(createEditorStateWithText(""));
    const [image, setImage64] = useState("");

    useEffect(() => {
        if (user) {
            dispatch(getPostsAction(user));
        }
    }, [dispatch, user]);

    // // to render posts

    const renderItems = state?.data?.map((item) => {
       
        return (
            <div className={item.classes || ""} key={item._id}>
                <Post user={user} item={item} isLoading={state.isLoading} />
            </div>
        );
    });

    

    

    return (
        <div className="col-span-12 lg:col-span-6 z-[40] ">
            <div className="flex flex-col gap-4 items-center   ">
                <FormPost
                    content={content}
                    setContent={setContent}
                    image={image}
                    setImage64={setImage64}
                    user={user}
                    focused={focused}
                    setFocused={setFocused}
                />

                <div
                    className={`${
                        !focused ? "focused-opacity-none" : "focused-opacity"
                    } flex items-center justify-center  w-full `}
                >
                    <div className="grid flex-1  w-full grid-cols-1 gap-4 ">
                        {renderItems}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSide;
