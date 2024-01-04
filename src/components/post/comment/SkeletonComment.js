import React from "react";
import { BiHeart } from "react-icons/bi";

function SkeletonComment({}) {
    return (
        <>
            <div className="flex justify-between items-center   ">
                <div className="flex gap-3   ">
                    <div className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem]">
                        <div className=" selection: rounded-full  object-cover bg-gray-300  w-10 h-10" />
                    </div>

                    <div className="flex flex-col justify-center   gap-2  animate-pulse ">
                        <div className="text-xs font-semibold  bg-gray-300  w-20 h-2 "></div>
                        <div className=" bg-gray-300  w-32 h-2 "> </div>
                        <div className="bg-gray-300    w-10 h-2 "></div>
                    </div>
                </div>
                <div className=" ">
                    <BiHeart />
                </div>
            </div>

            <div className="bg-gray-200 w-full h-px  my-3">&nbsp;</div>
        </>
    );
}

export default SkeletonComment;
