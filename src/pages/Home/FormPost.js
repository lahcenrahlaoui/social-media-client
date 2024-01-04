/* eslint-disable jsx-a11y/alt-text */
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setPostAction } from "actions";

import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import createHashtagPlugin from "@draft-js-plugins/hashtag";

import { convertToRaw } from "draft-js";
import { BiImageAdd, BiX } from "react-icons/bi";
import hashtagStyles from "hashtagStyles.module.css";
import { useAuthContext } from "hooks/useAuthContext";
import { BiSend } from "react-icons/bi";

// eslint-disable-next-line no-undef
const plugins = [createHashtagPlugin({ theme: hashtagStyles })];

const FormPost = ({
    focused,
    setFocused,
    content,
    setContent,
    image,
    setImage64,
}) => {
    // const [content, setContent] = useState(createEditorStateWithText(""));
    // const [image, setImage64] = useState("");

    // const [focused, setFocused] = useState(false);

    const { user } = useAuthContext();
    const editor = useRef(null);

    const onChange = (newEditorState) => {
        setContent(newEditorState);
    };

    const focus = () => {
        if (!focused) {
            editor?.current?.focus();
            setFocused(true);
        }
    };

    const dispatch = useDispatch();

    const divRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        setFocused(false);
        const formData = new FormData();
        const text = convertToRaw(content.getCurrentContent()).blocks[0].text;

        if (!image || !text) {
            alert("all fields must be filled ");
        } else if (user) {
            formData.append("image", image);
            formData.append("content", text);
            dispatch(setPostAction(formData, user));

            setContent(createEditorStateWithText(""));
            setImage64("");
        }
    };

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="  flex items-center justify-center w-full  "
                onClick={focus}
            >
                <div
                    ref={divRef}
                    className={` relative flex flex-col bg-[#fdfdfd] border gap-2 cursor-text overflow-hidden
                    ${
                        focused
                            ? image
                                ? " w-full border border-[#3498db]  min-h-[20rem] "
                                : " w-full border border-[#3498db]  min-h-[16rem] "
                            : image
                              ? " w-full min-h-[14rem] rounded-xl "
                              : "w-full min-h-[8rem] rounded-xl"
                    }  
                    transition-all ease-in duration-[400ms] delay-100
                 `}
                    onBlur={() => setFocused(false)}
                >
                    <div className=" flex gap-3 py-2 px-3  ">
                        <img
                            className=" rounded-full  min-w-[3rem] min-h-[3rem] object-cover  w-[3rem] h-[3rem] "
                            src={user?.image}
                        />

                        <div className=" flex flex-col justify-center w-full text-xl ">
                            <div
                                className={`flex items-center overflow-auto text-base w-full  max-h-80  ${
                                    !image && " mb-8 "
                                }`}
                            >
                                <Editor
                                    editorState={content}
                                    onChange={onChange}
                                    plugins={plugins}
                                    ref={editor}
                                    placeholder={"Write something..."}
                                />
                            </div>
                            <div className="mt-4  ">
                                {image === "" ? (
                                    image
                                ) : (
                                    <div
                                        className={`flex relative w-1/5 mb-14`}
                                    >
                                        <div
                                            onClick={() => {
                                                setImage64("");
                                            }}
                                            className="absolute bg-gray-300 rounded-full  hover:bg-white
                                                        right-0 flex items-center justify-center 
                                                        w-4 h-4 text-4xl text-red-700 cursor-pointer"
                                        >
                                            <BiX />
                                        </div>
                                        <img
                                            src={URL.createObjectURL(image)}
                                            width={150}
                                            height={20}
                                            alt={image.name}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full ">
                        <div className="bg-gray-200 w-full h-px">&nbsp;</div>
                        <div className="flex w-full items-center justify-between  px-3 my-1">
                            <div
                                className=" relative flex items-start justify-between 
                                       py-1 gap-3  
                                        transition duration-150 ease-in-out group "
                            >
                                <input
                                    type="file"
                                    id="fileAttachment"
                                    name="fileAttachment"
                                    className="  absolute inset-0 w-full h-16 !opacity-0 cursor-pointer "
                                    onChange={(e) =>
                                        setImage64(e.target.files[0])
                                    }
                                    accept="image/*"
                                />

                                <div
                                    className=" flex items-center justify-center text-2xl h-10 px-2 lg:px-5 bg-gray-200
                                            group-hover:border-[#c5ddec] rounded-3xl cursor-pointer 
                                            transition duration-150 "
                                >
                                    <BiImageAdd />
                                    <span className="text-sm  cursor-pointer  hidden lg:flex  ">
                                        Media
                                    </span>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className=" flex items-center justify-center gap-2  px-3  h-10 rounded-full  text-center  text-lg
                                text-white transition duration-300 bg-blue-500 hover:bg-blue-600 
                                focus:outline-none focus:shadow-outline-blue"
                            >
                                <span className="text-sm  cursor-pointer hidden lg:flex  ">
                                    Publish
                                </span>

                                <BiSend />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormPost;
