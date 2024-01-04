import { createEditorStateWithText } from "@draft-js-plugins/editor";
import Post from "components/post/Post";
import FormPost from "pages/Home/FormPost";
import { useState } from "react";
import { BiSad } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const MiddleSide = ({ state, user, focused, setFocused }) => {
    // // to render posts for profile
    const renderItems = state?.data?.map((item) => {
        return (
            <div className={item.classes || ""} key={item._id}>
                <Post user={user} item={item} isLoading={state.isLoading} />
            </div>
        );
    });

    const pathname = useLocation().pathname.split("/")[1];
    console.log("pathname");
    console.log("pathname");
    console.log("pathname");
    console.log("pathname");
    console.log("pathname");
    console.log(pathname);

    const [content, setContent] = useState(createEditorStateWithText(""));
    const [image, setImage64] = useState("");

    return (
        <div className="col-span-12 lg:col-span-6 z-[40] ">
            <div className="flex flex-col gap-4 items-center   ">
                <div className={`  flex items-center justify-center w-full `}>
                    <div className="grid flex-1  w-full grid-cols-1 gap-4 ">
                        {user._id === pathname && (
                            <div className=" flex justify-center">
                                <div className="w-3/4 lg:w-1/2">
                                    <FormPost
                                        content={content}
                                        setContent={setContent}
                                        image={image}
                                        setImage64={setImage64}
                                        user={user}
                                        focused={focused}
                                        setFocused={setFocused}
                                    />
                                </div>
                            </div>
                        )}

                        {!renderItems.length ? (
                            <div className="flex items-center justify-center bg-white h-40">
                                <div className="flex text-xl items-center justify-center gap-2">
                                    <spna className="text-3xl">
                                        {" "}
                                        <BiSad />{" "}
                                    </spna>{" "}
                                    There is no posts yet in this profile
                                </div>
                            </div>
                        ) : (
                            renderItems
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSide;
