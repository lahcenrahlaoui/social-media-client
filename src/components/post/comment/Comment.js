import React from "react";

const Comment = ({ comment }) => {
    return (
        <div className=" gap-2 p-2 cursor-pointer bg-red-200 m-2 ">
            {comment.content}
    
        </div>
    );
};

export default Comment;
