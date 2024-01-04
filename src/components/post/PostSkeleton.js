import React from "react";

function PostSkeleton() {
    return (
        <div className="flex  items-center justify-center  rounded-lg   ">
            <div className="animate-pulse bg-gray-300 rounded-xl w-60 lg:w-[40rem] h-40 lg:h-96 "></div>
        </div>
    );
}

export default PostSkeleton;
