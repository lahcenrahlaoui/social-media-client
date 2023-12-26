import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setPost } from "../actions";
import { BiUpload } from "react-icons/bi";

import Tags from "@yaireo/tagify/dist/react.tagify"; // React-wrapper file
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import createHashtagPlugin from "@draft-js-plugins/hashtag";


{
    /* <img src="https://i.stack.imgur.com/dy62M.png" /> */
}
const FormPost = () => {
    const text = "s";
    const editor = useRef();
    const [state, setState] = useState({
        editorState: createEditorStateWithText(text),
    });

    const onChange = (e) => {
       
        setState(e.target.value);
    };

    const hashtagPlugin = createHashtagPlugin();
    const plugins = [hashtagPlugin];

    const dispatch = useDispatch();

    const [content, setContent] = useState();
    const [image, setImage64] = useState("");

    // const getBase64FromUrl = async (url) => {
    //     const data = await fetch(url);
    //     const blob = await data.blob();
    //     return new Promise((resolve) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(blob);
    //         reader.onloadend = () => {
    //             const base64data = reader.result;
    //             resolve(base64data);
    //         };
    //     });
    // };

    // const imgFilehandler = async (e) => {
    //     if (e.target.files.length !== 0) {
    //         const urlImage = URL.createObjectURL(e.target.files[0]);

    //         setImage64(await getBase64FromUrl(urlImage));
    //     }
    // };

    // const imageRef = useRef();

    // const imgFilehandler = (e) => {
    //     if (e.target.files.length !== 0) {
    //         const urlImage = URL.createObjectURL(e.target.files[0]);

    //         setImage64(urlImage);
    //     }
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("image", image);
        formData.append("content", content);
        setContent("");
        setImage64("");

        dispatch(setPost(formData));
    };

    const area = useRef();

    // const handleTextArea = (e) => {
    //     const text = e.target.value.split(" ").filter((v) => v.startsWith("#"));
    //     const fullText = e.target.value;
    //     let result;
    //     const changedText = text.map((t) => {
    //         return <span className="bg-red-200">{t}</span>;
    //     });

    //     console.log("changedText");
    //     console.log(changedText);
    //     const items = [];
    //     if (changedText.length > 0) {
    //         var node = document.createElement(changedText[0].type);
    //         node.classList.add(changedText[0].props.className);
    //         node.innerHTML = changedText[0].props.children;
    //         console.log(node);
    //         items.push(node);
    //     }

    //     for (let i = 0; i < items.length; i++) {
    //         result = fullText.replace(text[i], items[i]);
    //     }
    //     console.log("result");
    //     console.log(result);
    //     setContent(result);
    // };
    const handleTextArea = (e) => {};

    // const onChange = useCallback((e) => {
    //     console.log(
    //         "CHANGED:",
    //         e.detail.tagify.value, // Array where each tag includes tagify's (needed) extra properties
    //         e.detail.tagify.getCleanValue(), // Same as above, without the extra properties
    //         e.detail.value // a string representing the tags
    //     );
    // }, []);

    return (
        <form
            onSubmit={onSubmit}
            className="flex justify-center pt-5 bg-red-200 w-4/5"
        >
            <div
                className={`flex flex-col justify-center items-center gap-2 ${
                    image !== "" ? "basis-5/6" : "w-full"
                } `}
            >
                <div className=" flex w-3/4">
                    {/* <Tags
                    tagifyRef={Object} // optional Ref object for the Tagify instance itself, to get access to  inner-methods
                    settings={Object}  // tagify settings object
                    defaultValue={content} 
                    className="bg-white"
                    onChange={onChange}
                    /> */}

                    <div className={editor} >
                        <Editor
                            editorState={state.editorState}
                            onChange={onChange}
                            plugins={plugins}
                            ref={editor}
                        />
                    </div>

                    {/* <input
                        ref={area}
                        id="postContent"
                        name="postContent"
                        rows="4"
                        className="w-full border-2 rounded-md px-4 py-2 leading-5
                                    transition duration-150 ease-in-out sm:text-sm
                                    sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
                        placeholder="What's on your mind?"
                        onChange={handleTextArea}
                        value={content}
                    /> */}
                </div>

                <div className="  w-3/4">
                    <div
                        className="relative  px-4 py-3 bg-white flex items-center justify-between 
                                hover:border-blue-500 transition duration-150 ease-in-out "
                    >
                        <input
                            type="file"
                            id="fileAttachment"
                            name="fileAttachment"
                            className="absolute inset-0 opacity-0 bg-blue-100 w-16 h-16 cursor-pointer "
                            onChange={(e) => setImage64(e.target.files[0])}
                            accept="image/*"
                        />
                        <div className="flex border-2 rounded-md p-2 items-center cursor-pointer">
                            <svg
                                className="w-6 h-6 text-gray-400"
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
                            className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
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
            </div>
            {image === "" ? (
                image
            ) : (
                <div className={`flex relative basis-1/6 border  `}>
                    <div
                        onClick={() => {
                            setImage64("");
                        }}
                        className="cursor-pointer w-6 h-6 flex items-center justify-center  bg-red-100 absolute right-0"
                    >
                        X
                    </div>
                    <img
                        src={URL.createObjectURL(image)}
                        width={150}
                        height={20}
                        alt={image.name}
                    />
                </div>
            )}
        </form>
    );
};

export default FormPost;
