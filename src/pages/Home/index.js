import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "actions";
import NavBar from "components/Navbar/NavBar.js";
import Post from "components/post/Post.js";

import FormPost from "pages/Home/FormPost.js";
import Suggestions from "pages/Home/components/Suggestions.js";

import SearchComponent from "components/Navbar/SearchComponent.js";
import { useAuthContext } from "hooks/useAuthContext.js";
import Stories from "pages/Home/components/Stories.js";

import LeftSide from "./LeftSide.js";
import RightSide from "./RightSide.js";
import MiddleSide from "./MiddleSide.js";
//import Meteo from "components/Meteo.js";
// import Meteo from "components/Meteo.js";
function Home() {
    const { user } = useAuthContext();

    const [focused, setFocused] = useState(false);

    // for form opacity
    useEffect(() => {
        if (focused) {
            document.body.style.overflow = "hidden";
            document.body.style.width = "calc(100vw - 16px)";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.width = "100%";
        }
    }, [focused]);

    return (
        <div className=" relative w-full pb-14 bg-[#F4F4F4]  ">
            <div
                className={`${
                    focused
                        ? "absolute  w-full h-full bg-[#000000d9] z-[30] "
                        : ""
                }`}
            ></div>
            <NavBar user={user} focused={focused} />

            <div
                className={`flex flex-col lg:flex-row items-center justify-center gap-4 mt-14  pt-2  bg-[#F4F4F4]  w-full
                    transition-all  ease-in duration-500  
                    `}
            >
                <div className="grid grid-cols-12 gap-4 w-11/12">
                    <LeftSide focused={focused} />

                    {/* <div
                        className={`hidden lg:block gap-2 col-span-12 lg:col-span-3 px-3 `}
                    > 
                    <RightSide focused={focused} />
                    </div> */}

                    <div
                        className={` flex lg:hidden flex-col gap-8
                                    ${  !focused
                                            ? "focused-opacity-none"
                                            : "focused-opacity" }  
                                    col-span-12 
                                    lg:col-span-3 `}
                    >
                        <Suggestions />
                        <Stories />
                    </div>

                    <MiddleSide
                        user={user}
                        focused={focused}
                        setFocused={setFocused}
                    />

                    <RightSide focused={focused} />
                </div>
            </div>
        </div>
    );
}

export default Home;
