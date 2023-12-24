import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneLike } from "../actions/postAction";
import { BiComment } from "react-icons/bi";
import axios from "axios";
import { comment } from "postcss";

const NewComment = ({ item, placeholder ,className   }) => {
    console.log(item);
    useEffect(() => {
        // (async () => {
        //     // const commentsAxios =  await axios.get(`/api/comments/${id}`)
        //     const commentsAxios = await axios.get(`/api/comments/${item._id}/send_the_user_id`);
        //     console.log(commentsAxios);
        // })();
    }, []);

    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const commentsAxios = await axios.post(
            `/api/comments/${item._id}/send_the_user_id`,
            {
                content,
            }
        );
        setContent("");
        console.log(commentsAxios);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder={placeholder}
                onChange={(e) => setContent(e.target.value)}
                value={content}
                className= {className}
                // "w-full border border-2 px-1 py-2 "
            />
        </form>
    );
};

export default NewComment;
