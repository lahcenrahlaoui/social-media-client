import React from "react";

function PostSkeleton() {
    return (
        <div className="flex  items-center justify-center  rounded-lg w-full ">
            <div className="animate-pulse bg-gray-300 rounded-xl  w-4/5    h-[8rem] sm:h-[20rem] md:h-[28rem] lg:h-96 ">
                <div className="w-full h-full  ">
                    <div className="flex gap-3     pt-4 pl-4">
                        <div className=" w-12 h-12 rounded-full animate-pulse bg-gray-400"></div>
                        <div className="flex flex-col gap-2 pt-2">
                            <div className="w-24 rounded-lg h-2 animate-pulse bg-gray-400"></div>
                            <div className="w-16 rounded-lg h-2 animate-pulse bg-gray-400"></div>
                        </div>
                    </div>
                    <div className=" ml-4 animate-pulse bg-gray-300 px-4 h-2 w-1/3 mt-6 rounded-lg "></div>
                    <div className="w-full px-20 h-2/3 mt-6">
                        <div className="w-full h-full animate-pulse bg-gray-400"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostSkeleton;

// w-[18rem] sm:w-[25rem] md:w-[35rem] lg:w-[40rem]
// h-[13rem] sm:h-[2rem] md:h-[25rem] lg:h-96
