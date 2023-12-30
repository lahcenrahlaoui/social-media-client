import { BiShare } from "react-icons/bi";

import Like from "./LikeIcon";

import { Markup } from "interweave";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    format,
    parseISO,
} from "date-fns";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ImageComponent from "./ImageComponent";
import CommentIcon from "./comment/CommentIcon";
import Comments from "./comment/Comments";
import NewComment from "./comment/NewComment";

import { useMenuAnimation } from "../hooks/useMenuAnimation";
const Post = ({ item }) => {
    // for menu dropdown animation
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    // for text in post
    const [showMore, setShowMore] = useState(false);

    // add comment number
    const [adds, setAdds] = useState(0);

    // to handle how much comments we should get
    const [skipValue, setSkipValue] = useState(0);

    // to hide comments ( collapse )
    const [seeComments, setSeeComments] = useState(false);

    const formateDate = (date) => {
        let time = differenceInMinutes(new Date(), new Date(date)) + " m";
        if (time > 59) {
            time = differenceInHours(new Date(), new Date(date)) + " h";
            if (time > 23) {
                time = differenceInDays(new Date(), new Date(date)) + " d";
                if (time > 4) {
                    time = format(parseISO(date), "MM/dd/yyyy");
                }
            }
        }

        return time;
    };

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

    useEffect(() => {
        let handler = (e) => {
            if (!scope.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [isOpen]);

    // drop down menu
    const data = (
        <nav ref={scope} className={`relative w-60 h-20 `}>
            <motion.button
                className="right-0 absolute  cursor-pointer "
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="arrow">
                    <MoreHorizIcon />
                </div>
            </motion.button>

            {/* className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-6 w-full cursor-pointer */}

            <ul
                className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-6 w-full cursor-pointer

                                    overflow-hidden  transition-all duration-300 ease-in-out

                               
                                    `}
            >
                <li className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </li>
                <li className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </li>
                <li className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </li>
                <li className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </li>
                <li className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </li>
                <li className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </li>
            </ul>
        </nav>

        // <div className={`relative  w-60 h-20 ${open && "  "} `}>
        //     <div
        //         ref={menuRef}
        //         className="right-0 absolute  cursor-pointer "
        //         onClick={() => handleToggle()}
        //     >
        //         <MoreHorizIcon />
        //     </div>

        //     <div
        // className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-6 w-full cursor-pointer

        //                 overflow-hidden  transition-all duration-300 ease-in-out

        //                 ${
        //                     open
        //                         ? "grid-rows-[1fr] opacity-100"
        //                         : "grid-rows-[0fr] opacity-0"
        //                 }
        //         `}
        //     >
        //         <div className="block px-4 py-2 hover:bg-gray-200 ">
        //             Hide idem
        //         </div>
        //         <div className="block px-4 py-2 hover:bg-gray-200 ">
        //             Hide idem
        //         </div>
        //         <div className="block px-4 py-2 hover:bg-gray-200 ">
        //             Hide idem
        //         </div>
        //         <div className="block px-4 py-2 hover:bg-gray-200 ">
        //             Hide idem
        //         </div>
        //         <div className="block px-4 py-2 hover:bg-gray-200 ">
        //             Hide idem
        //         </div>
        //         <div className="block px-4 py-2 hover:bg-gray-200 ">
        //             Hide idem
        //         </div>
        //     </div>
        // </div>
    );
    
    return (
        <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-3xl   ">
            <div className="flex flex-col w-full gap-1 p-3">
                <div className="flex justify-between px-2">
                    <div className="flex gap-2">
                        <div className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem]">
                            <img
                                src={item.image_user}
                                className="bg-yellow-200 rounded-full  object-cover  w-10 h-10"
                            />
                        </div>

                        <div className="text-sm font-semibold">
                            <div> {item.name}</div>
                            <div>{formateDate(item.createdAt)}</div>
                        </div>
                    </div>
                    <div className="relative ">{data}</div>
                </div>
                <div className=" text-lg text-gray-900 whitespace-normal ">
                    <Markup content={showItem} />
                    {item.content.length > 50 && (
                        <button
                            className="block text-xs underline text-blue-300"
                            onClick={() => setShowMore((state) => !state)}
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
            </div>

            <div className="flex justify-around w-full border-y ">
                <Like item={item} />

                <CommentIcon
                    length={item.comments.length + adds}
                    onClick={() => {
                        setSeeComments(!seeComments);
                    }}
                    seeComments={seeComments}
                />

                <div className="flex items-center justify-center w-1/3 gap-2 py-2 border-x hover:bg-blue-200">
                    <BiShare /> {item.share?.length || 0}
                </div>
            </div>

            {/* show comments */}
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
    );
};

export default Post;
