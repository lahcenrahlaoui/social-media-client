import { Link } from "react-router-dom";
import { BiComment, BiShare } from "react-icons/bi";

import Like from "./Like";

import { Markup } from "interweave";

import ImageComponent from "./ImageComponent";
import { useEffect, useRef, useState } from "react";
import CommentIcon from "./CommentIcon";
import NewComment from "./NewComment";
import Comments from "./Comments";
import { Avatar, FormControl, Grid, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = ({ item, isLoading }) => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((state) => !state);
    };

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
    });

    const [seeComments, setSeeComments] = useState(false);
    // handle content
    const showItem = item.content.replace(
        /(^|\s)(#[a-z\d-]+)/gi,
        "$1<span class='bg-red-200'>$2</span>"
    );

    // handle tags
    const tags = showItem.match(/#\w+/g) || [];

    const data = (
        <div className={`relative  ${open && "border "} `}>
            <Grid
                ref={menuRef}
                item
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => handleToggle()}
            >
                <MoreHorizIcon />
            </Grid>

            {open && (
                <FormControl
                    fullWidth
                    style={{
                        background: "red",
                        left: "0", 
                    }}
                >
                    <MenuItem value={10}>Hide idem </MenuItem>
                    <MenuItem value={20}>Report</MenuItem>
                    <MenuItem value={30}>Bookmark</MenuItem>
                </FormControl>
            )}
        </div>
    );
    return (
        <div className="flex flex-col justify-between bg-white border border-blue-200 rounded-lg ">
            <div className="flex flex-col w-full gap-2 p-3">
                <div className="flex justify-between px-2">
                    <div className="flex gap-2">
                        <Avatar alt="Remy Sharp" src={item.image_small} />

                        <div className="text-sm font-semibold">
                            <div>john deo</div>
                            <div>2022-10-10</div>
                        </div>
                    </div>
                    <div className="relative bg-red-100">{data}</div>
                </div>

                <div className="mt-2 text-lg text-gray-900 whitespace-normal ">
                    <Markup content={showItem} />
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
                <div className="overflow-hidden flex justify-center  flex-col gap-2">
                    <NewComment
                        item={item}
                        className={"  w-full border border-2 px-1 py-3 "}
                        placeholder={"Add comment"}
                    />

                    <Comments
                        commentId={item._id}
                        item={item}
                        seeComments={seeComments}
                    />
                </div>
            </div>
        </div>
    );
};

export default Post;
