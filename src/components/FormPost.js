/* eslint-disable jsx-a11y/alt-text */
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setPostAction } from "../actions";

import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import createHashtagPlugin from "@draft-js-plugins/hashtag";

import { convertToRaw } from "draft-js";
import { BiImageAdd, BiX } from "react-icons/bi";
import hashtagStyles from "../../src/hashtagStyles.module.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { BiSend } from "react-icons/bi";

// eslint-disable-next-line no-undef
const plugins = [createHashtagPlugin({ theme: hashtagStyles })];

const FormPost = () => {
    const [content, setContent] = useState(createEditorStateWithText(""));
    const [image, setImage64] = useState("");

    const [focused, setFocused] = useState(false);

    const { user } = useAuthContext();
    const editor = useRef(null);

    const onChange = (newEditorState) => {
        setContent(newEditorState);
    };

    const focus = () => {
        editor?.current?.focus();
        setFocused(true);
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
            {/* <form
                onSubmit={onSubmit}
                className="flex items-center justify-center w-full  "
                onClick={focus}
            >
                <div
                    ref={divRef}
                    className={`flex flex-col bg-white border gap-2 cursor-text rounded-lg
                    ${
                        focused
                            ? " w-full border border-[#3498db]  "
                            : " w-full"
                    } transition-all transition ease-in  duration-200 delay-100
                 `}
                    onBlur={() => setFocused(false)}
                >
                    <div className="flex gap-3 mx-4 my-4">
                        <img
                            style={{ width: 40, height: 40 }}
                            className="rounded-full "
                            src={user?.image}
                        />

                        <div className="flex flex-col justify-center w-full text-xl ">
                            <div className="w-full h-full pt-1 pb-2 ">
                                <Editor
                                    editorState={content}
                                    onChange={onChange}
                                    plugins={plugins}
                                    ref={editor}
                                />
                            </div>
                            <div className="mt-4">
                                {image === "" ? (
                                    image
                                ) : (
                                    <div className={`flex relative w-1/5   `}>
                                        <div
                                            onClick={() => {
                                                setImage64("");
                                            }}
                                            className="absolute right-0 flex items-center justify-center w-6 h-6 text-4xl text-red-700 cursor-pointer"
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

                    <hr />
                    <div className="relative flex items-center justify-between px-4 py-3 transition duration-150 ease-in-out group ">
                        <input
                            type="file"
                            id="fileAttachment"
                            name="fileAttachment"
                            className="absolute inset-0 w-16 h-16 opacity-0 cursor-pointer "
                            onChange={(e) => setImage64(e.target.files[0])}
                            accept="image/*"
                        />

                        <div
                            className="flex items-center p-2 border border-2 group-hover:border-[#c5ddec] rounded-md cursor-pointer 
                          transition duration-150 "
                        >
                            <svg
                                className="w-6 h-6 text-gray-400 "
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                ></path>
                            </svg>
                        </div>
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                        >
                            Post
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                id="send"
                                fill="#fff"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </form> */}

            <form
                onSubmit={onSubmit}
                className="flex items-center justify-center w-full  "
                onClick={focus}
            >
                <div
                    ref={divRef}
                    className={`flex flex-col bg-[#fdfdfd] border gap-2 cursor-text rounded-lg
                    ${
                        focused
                            ? " w-full border border-[#3498db]  "
                            : " w-full"
                    } transition-all transition ease-in duration-200 delay-100
                 `}
                    onBlur={() => setFocused(false)}
                >
                    <div className="flex gap-3 py-2 px-2  ">
                        <img
                            className="rounded-full  min-w-[3rem] min-h-[3rem] object-cover  w-[3rem] h-[3rem] "
                            src={user?.image}
                        />

                        <div className="flex flex-col justify-center w-full text-xl  ">
                            <div className="flex items-center  w-full h-full  ">
                                <Editor
                                    editorState={content}
                                    onChange={onChange}
                                    plugins={plugins}
                                    ref={editor}
                                />
                            </div>
                            <div className="mt-4">
                                {image === "" ? (
                                    image
                                ) : (
                                    <div className={`flex relative w-1/5 `}>
                                        <div
                                            onClick={() => {
                                                setImage64("");
                                            }}
                                            className="absolute right-0 flex items-center justify-center w-6 h-6 text-4xl text-red-700 cursor-pointer"
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

                        <div
                            className="relative flex items-start justify-between px-1 py-1  gap-3 
                                        transition duration-150 ease-in-out group "
                        >
                            <input
                                type="file"
                                id="fileAttachment"
                                name="fileAttachment"
                                className="absolute inset-0 w-16 h-16 opacity-0 cursor-pointer "
                                onChange={(e) => setImage64(e.target.files[0])}
                                accept="image/*"
                            />

                            <div
                                className="flex items-center justify-center text-3xl  w-10 h-10  
                                            group-hover:border-[#c5ddec] rounded-md cursor-pointer 
                                            transition duration-150 "
                            >
                                <BiImageAdd />
                            </div>
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2  w-10 h-10 rounded-full  text-center  text-lg
                                text-white transition duration-300 bg-blue-500 hover:bg-blue-600 
                                focus:outline-none focus:shadow-outline-blue"
                            >
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
