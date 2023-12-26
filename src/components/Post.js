import { BiShare } from "react-icons/bi";

import Like from "./LikeIcon";

import { Markup } from "interweave";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ImageComponent from "./ImageComponent";
import CommentIcon from "./comment/CommentIcon";
import Comments from "./comment/Comments";
import NewComment from "./comment/NewComment";

const Post = ({ user , item, isLoading }) => {
    // for text in post
    const [showMore, setShowMore] = useState(false);

    // to handle how much comments we should get
    const [skipValue, setSkipValue] = useState(0);

    // to hide comments
    const [seeComments, setSeeComments] = useState(false);

    // for dropdown active or not
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((state) => !state);
    };

    // for dropdown
    const menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [open]);

    // handle content
    let showItem;
    if (showMore) {
        showItem = item.content.replace(
            /(^|\s)(#[a-z\d-]+)/gi,
            "$1<span class='bg-red-200'>$2</span>"
        );
    } else {
        showItem = item.content
            .replace(
                /(^|\s)(#[a-z\d-]+)/gi,
                "$1<span class='bg-red-200'>$2</span>"
            )
            .substring(0, 50);
    }

    // handle tags
    const tags = showItem.match(/#\w+/g) || [];

    // drop down
    const data = (
        <div className={`relative  w-60 h-20 ${open && "  "} `}>
            <div
                ref={menuRef}
                className="right-0 absolute  cursor-pointer "
                onClick={() => handleToggle()}
            >
                <MoreHorizIcon />
            </div>

            <div
                className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-6 w-full cursor-pointer                  
                
                                overflow-hidden  transition-all duration-300 ease-in-out

                                ${
                                    open
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }
                        `}
            >
                <div className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </div>
                <div className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </div>
                <div className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </div>
                <div className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </div>
                <div className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </div>
                <div className="block px-4 py-2 hover:bg-gray-200 ">
                    Hide idem
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col justify-between bg-white border border-blue-200 rounded-lg bg-white ">
            <div className="flex flex-col w-full gap-1 p-3">
                <div className="flex justify-between px-2">
                    <div className="flex gap-2">
                        <Avatar alt="Remy Sharp" src={item.image_small} />

                        <div className="text-sm font-semibold">
                            <div>john deo</div>
                            <div>2022-10-10</div>
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
                        id={item.id}
                    />
                </div>
                <div className="text-xs">you and others liked this</div>
            </div>

            <div className="flex justify-around w-full border-y ">
                <Like item={item} />

                <CommentIcon
                    item={item}
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
                    <NewComment item={item} placeholder={"Add comment"} />
                </div>
            </div>
        </div>
    );
};

export default Post;
