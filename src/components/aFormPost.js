/* eslint-disable jsx-a11y/alt-text */
import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setPostAction } from "../actions";

import { BiX } from "react-icons/bi";

import { useAuthContext } from "../hooks/useAuthContext";

import ReactQuill, { Quill } from "react-quill";

import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";

const FormPost = () => {
    const [image, setImage64] = useState("");

    const [focused, setFocused] = useState(false);

    const { user } = useAuthContext();
    const editor = useRef(null);

    const onChange = (newEditorState) => {
        setContent(newEditorState);
    };

    const placeholder = "Compose an epic...";

    const [content, setContent] = useState("");

    const focus = () => {
        editor?.current?.focus();
        setFocused(true);
    };

    const dispatch = useDispatch();

    const divRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        setFocused(false);

        const text = content.replace("<p>", "").replace("</p>", "");

        if (!image || !text) {
            alert("all fields must be filled ");
        } else if (user) {
            formData.append("image", image);
            formData.append("content", text);
            dispatch(setPostAction(formData, user));

            setContent("");
            setImage64("");
        }
    };

    const formats = ["image"];

    const quillRef = useRef();
    useLayoutEffect(() => {
        quillRef.current = new Quill("#editor-container", {
            modules: {
                toolbar: [["image"]],
            },
            formats: formats,
            placeholder: "Compose an epic...",
            theme: "snow",
        });
    }, []);

    return (
        <>
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
                    } transition-all ease-in duration-200 delay-100
                 `}
                    onBlur={() => setFocused(false)}
                >
                    <div className="flex gap-3 py-2 px-2  ">
                        <div className="flex flex-col justify-center w-full text-xl  ">
                            {/* <div className=" relative  w-48  ">
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    placeholder={placeholder}
                                    onChange={setContent}
                                    modules={modules}
                                    formats={formats}
                                    
                                />
                            </div> */}
                            <div class=" flex flex-col w-full bg-red-200 editor-wrapper">
                                <img
                                    className="rounded-full min-w-[3rem] min-h-[3rem] object-cover  w-[3rem] h-[3rem] "
                                    src={user?.image}
                                />
                                <div id="editor-container" className=" "></div>
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

                        {/* <div
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
                        </div> */}
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormPost;











   {/* editor */}
                {/* <div
                    className={` editor-wrapper flex w-full h-full pt-4 border border-gray-200 `}
                    onBlur={() => setFocused(false)}
                >
                    <img
                        className="rounded-full min-w-[3rem] min-h-[3rem] object-cover ml-2 w-[3rem] h-[3rem] "
                        src={user?.image}
                    />
                    <div id="editor-container" className="w-full"></div>
                </div> */}