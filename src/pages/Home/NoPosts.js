import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function NoPosts() {
    return (
        <div className="bg-white w-full lg:h-80 rounded-xl  flex  justify-center items-center ">
            <div className=" w-5/6 h-5/6 flex flex-col items-center justify-center">
                <div className="text-lg w-5/6">
                    <div className="text-2xl font-bold  ">OOPS . . . </div>
                    There is no posts here you should follow more people to see
                    new feeds
                </div>
                <div className="text-8xl ">
                    <BiSearchAlt />
                </div>
              
            </div>
        </div>
    );
}

export default NoPosts;
