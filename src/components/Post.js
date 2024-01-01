/* eslint-disable jsx-a11y/alt-text */
import { BiComment, BiHeart, BiLike, BiShare, BiX } from "react-icons/bi";

import LikeIcon from "./LikeIcon";

import { Markup } from "interweave";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ImageComponent from "./ImageComponent";
import CommentIcon from "./comment/CommentIcon";
import Comments from "./comment/Comments";
import NewComment from "./comment/NewComment";

// import { useMenuAnimation } from "../hooks/useMenuAnimation";
import { formateDate } from "../utils/functions";
const Post = ({ item }) => {
    // for menu dropdown animation
    const [isOpen, setIsOpen] = useState(false);
    // const scope = useMenuAnimation(isOpen);

    // for text in post
    const [showMore, setShowMore] = useState(false);

    // add comment number
    const [adds, setAdds] = useState(0);

    // to handle how much comments we should get
    const [skipValue, setSkipValue] = useState(0);

    // to hide comments ( collapse )
    const [seeComments, setSeeComments] = useState(false);

    // handle content
    let showItem;
    if (showMore) {
        showItem = item.content.replace(
            /(^|\s)(#[a-z\d-]+)/gi,
            "$1<span className='bg-red-200'>$2</span>"
        );
    } else {
        showItem = item.content
            .replace(
                /(^|\s)(#[a-z\d-]+)/gi,
                "$1<span className='bg-red-200'>$2</span>"
            )
            .substring(0, 50);
    }

    // handle tags
    const tags = showItem.match(/#\w+/g) || [];

    // for dropdown

    // useEffect(() => {
    //     let handler;
    //     if (scope.current !== null) {
    //         handler = (e) => {
    //             if (!scope.current.contains(e.target)) {
    //                 setIsOpen(false);
    //             }
    //         };
    //         document.addEventListener("mousedown", handler);
    //     }
    //     return () => {
    //         document.removeEventListener("mousedown", handler);
    //     };
    // }, [isOpen, scope]);

    // drop down menu
    const data = (
        <div className="group inline-block relative   ">
            <button>
                <MoreHorizIcon />
            </button>
            <ul
                className="  border rounded-md transform scale-0 group-hover:scale-100 
                                 absolute   bg-white  right-0
                                transition duration-150 ease-in-out origin-top min-w-32"
            >
                <li className="rounded-sm px-10 py-2.5 hover:bg-sky-300 cursor-pointer">
                    Programming
                </li>
                <div className="bg-gray-200 w-full h-px">&nbsp;</div>

                <li className="rounded-sm px-10 py-2.5 hover:bg-sky-300 cursor-pointer">
                    DevOps
                </li>
                <div className="bg-gray-200 w-full h-px">&nbsp;</div>
                <li className="rounded-sm px-10 py-2.5 hover:bg-sky-300 cursor-pointer">
                    Testing
                </li>
            </ul>
        </div>
    );

    const myRef = useRef(null);

    const executeScroll = () => {
        myRef?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div
            ref={myRef}
            className=" flex flex-col justify-between bg-white border border-gray-200 rounded-2xl   "
        >
            <div className=" relative flex flex-col w-full gap-1 p-3">
                {!seeComments && (
                    <div className=" relative flex flex-col w-full gap-1 p-2">
                        <div className="flex justify-between px-2">
                            <div className="flex gap-2">
                                <div className="w-12 h-12 min-w-[3rem] min-h-[3rem]   ">
                                    <img
                                        src={item.image_user}
                                        className="bg-yellow-200 rounded-full  object-cover  w-12 h-12"
                                    />
                                </div>

                                <div className="   flex flex-col justify-center">
                                    <div className="text-sm font-semibold capitalize">
                                        {" "}
                                        {item.name}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        {formateDate(item.createdAt)}
                                    </div>
                                </div>
                            </div>
                            <div className="relative ">{data}</div>
                        </div>
                        <div className=" text-lg text-gray-900 whitespace-normal mt-4 ">
                            <Markup content={showItem} />
                            {item.content.length > 50 && (
                                <button
                                    className="block text-xs underline text-blue-300"
                                    onClick={() =>
                                        setShowMore((state) => !state)
                                    }
                                >
                                    {showMore ? "show less" : "Show more"}
                                </button>
                            )}
                        </div>
                        <div className="text-xs text-blue-400 whitespace-normal ">
                            {tags.join(" ").toString()}
                        </div>
                        <div className="flex justify-center overflow-hidden rounded-lg">
                            <ImageComponent
                                image={item.image}
                                image_thumbnail={item.image_thumbnail}
                                _id={item._id}
                            />
                        </div>

                        <div
                            className=" absolute flex justify-end gap-2 
                                bottom-0 text-lg
                                right-6 w-full translate-y-1/4	
                        "
                        >
                            <div
                                onClick={() => {
                                    executeScroll();
                                    setSeeComments(true);
                                }}
                                className="cursor-pointer bg-[#6BA4E9] flex items-center justify-center 
                                                p-3 text-white rounded-full "
                            >
                                <BiComment />
                            </div>

                            <LikeIcon item={item} />
                        </div>
                    </div>
                )}

                {seeComments && (
                    <div className=" relative flex flex-col w-full gap-1 p-3">
                        <div className="flex w-full justify-between">
                            <div>comments</div>
                            <div
                                className="cursor-pointer text-red-600 text-3xl"
                                onClick={() => setSeeComments(false)}
                            >
                                <BiX />
                            </div>
                        </div>
                        <div
                            className={`grid text-sm text-slate-600 overflow-hidden  transition-all duration-300 ease-in-out ${
                                seeComments
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden flex justify-center  flex-col  ">
                                {seeComments && (
                                    <Comments
                                        commentId={item._id}
                                        item={item}
                                        seeComments={seeComments}
                                        skipValue={skipValue}
                                        setSkipValue={setSkipValue}
                                    />
                                )}
                                <NewComment
                                    item={item}
                                    setAdds={setAdds}
                                    placeholder={"Add comment"}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {!seeComments && (
                <div>
                    fjksdalk jl fjlsdkj ofijweqio j <br />
                    fjksdalk jl fjlsdkj ofijweqio j <br />
                    fjksdalk jl fjlsdkj ofijweqio j <br />
                    fjksdalk jl fjlsdkj ofijweqio j <br />
                    fjksdalk jl fjlsdkj ofijweqio j <br />
                </div>
            )}
            {/* <div className="flex justify-around w-full border-y ">
                            <LikeIcon item={item} />

                            <CommentIcon
                                length={item.comments.length + adds}
                                onClick={() => {
                                    setSeeComments(!seeComments);
                                }}
                                seeComments={seeComments}
                            />
                        </div> */}

            {/* show comments */}
            {/* <div
                className={`grid text-sm text-slate-600 overflow-hidden  transition-all duration-300 ease-in-out ${
                    seeComments
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden flex justify-center  flex-col  ">
                    {seeComments && (
                        <Comments
                            commentId={item._id}
                            item={item}
                            seeComments={seeComments}
                            skipValue={skipValue}
                            setSkipValue={setSkipValue}
                        />
                    )}
                    <NewComment
                        item={item}
                        setAdds={setAdds}
                        placeholder={"Add comment"}
                    />
                </div>
            </div> */}

            {!seeComments && data}
        </div>
    );
};

export default Post;
