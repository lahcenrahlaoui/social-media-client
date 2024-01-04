/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCommentAction } from "actions";
import { BiSend } from "react-icons/bi";
import { useAuthContext } from "hooks/useAuthContext";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const NewComment = ({ item, placeholder, setAddition }) => {
    const [content, setContent] = useState("");

    const { user } = useAuthContext();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            post_id: item._id,
            content,
        };
        if (!content) {
            return alert("comment has no content");
        }
        if (user) {
            dispatch(setCommentAction(data, user));
            setAddition((state) => state + 1);
            setContent("");
        }
    };

    const decoded = jwtDecode(user.token);
    user._id = decoded._id;

    return (
        <form
            onSubmit={handleSubmit}
            className=" relative flex flex-row items-center  w-full px-2 mb-2   "
        >
            <Link to={"/" + user._id} className="absolute  left-3 ">
                <img
                    src={user.image}
                    className=" w-7 h-7 object-cover rounded-full cursor-pointer "
                />
            </Link>
            <input
                placeholder={placeholder}
                onChange={(e) => setContent(e.target.value)}
                value={content}
                className=" w-full border  transition duration-500 
                                placeholder-gray-600  
                                text-gray-800  
                                 py-2.5 px-10
                                focus:placeholder-transparent border-gray-600 
                                bg-transparent rounded-md focus:outline-none "
            />
            <button
                type="submit"
                className="absolute inset-y-0 end-5 flex items-center hover:text-blue-500 text-2xl cursor-pointer  "
            >
                <BiSend />
            </button>
        </form>
    );
};

export default NewComment;
