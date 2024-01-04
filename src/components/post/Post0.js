import { BiX } from "react-icons/bi";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect, useRef, useState } from "react";
import ImageComponent from "./ImageComponent";
import Comments from "./comment/Comments";
import NewComment from "./comment/NewComment";
import { formateDate } from "utils/functions";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "constants";
import { useAuthContext } from "hooks/useAuthContext";
import Content from "./Content";
import Icons from "./Icons";

const Post = ({ item }) => {
    // for text in post
    const [showMore, setShowMore] = useState(false);

    // add comment number
    const [addition, setAddition] = useState(0);

    // to handle how much comments we should get
    const [skipValue, setSkipValue] = useState(0);

    // to hide comments ( collapse )
    const [seeComments, setSeeComments] = useState(false);

    const showItem = showMore
        ? item.content.replace(
              /(^|\s)(#[a-z\d-]+)/gi,
              "$1<span className='bg-red-200'>$2</span>"
          )
        : item.content
              .replace(
                  /(^|\s)(#[a-z\d-]+)/gi,
                  "$1<span className='bg-red-200'>$2</span>"
              )
              .substring(0, 50);

    // handle tags
    const tags = showItem.match(/#\w+/g) || [];

    // drop down menu
    const data = (
        <div className="group inline-block relative   ">
            <button>
                <MoreHorizIcon />
            </button>
            <ul
                className="  border rounded-md transform scale-0 group-hover:scale-100 
                                absolute bg-white right-0
                                transition duration-150 delay-500 ease-in-out origin-top min-w-32"
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

    const scrollingElementRef = useRef(null);

    const executeScroll = async () => {
        window.scrollTo({
            top: scrollingElementRef.current.offsetTop - 60,
            behavior: "smooth",
        });
    };

    const likesState = useSelector((state) => state.likes.data);

    const likes = likesState.filter((like) => {
        if (item._id === Object.keys(like).join("")) {
            return Object.values(like);
        }
    });

    const regularLike = likes[0];

    const allLikes = Object.values(regularLike)[0];

    const [people, setPeople] = useState([]);

    const { user } = useAuthContext();

    console.log(allLikes);
    useEffect(() => {
        (async () => {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
                params: {
                    allLikes,
                },
            };

            const response = await axios.get(
                `${BASE_URL}/api/user/get/user-information`,
                config
            );

            setPeople(response.data);
        })();
    }, [allLikes, user]);

    return (
        <div
            ref={scrollingElementRef}
            className=" flex flex-col justify-between bg-white border border-gray-200 rounded-2xl   "
        >
            <div className=" relative flex flex-col w-full gap-1 p-2 pb-4">
                {!seeComments && (
                    <div className=" relative flex flex-col w-full gap-1 p-2  ">
                        {/* name and drop down  */}
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
                                        {item.name}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        {formateDate(item.createdAt)}
                                    </div>
                                </div>
                            </div>
                            <div className="relative ">{data}</div>
                        </div>

                        {/* text  */}

                        <Content
                            showItemshowItem
                            item={item}
                            setShowMore={setShowMore}
                            showMore={showMore}
                            tags={tags}
                        />

                        {/*  to show image  */}

                        <ImageComponent
                            image={item.image}
                            image_thumbnail={item.image_thumbnail}
                            _id={item._id}
                        />

                        {/* icons   to like and see comments  */}

                        <Icons
                            length={item.comments.length}
                            setSeeComments={setSeeComments}
                            executeScroll={executeScroll}
                            addition={addition}
                            allLikes={allLikes}
                            regularLike={regularLike}
                            item={item}
                        />
                    </div>
                )}

                {/* comments  */}

                {seeComments && (
                    <div className=" relative flex flex-col w-full gap-1 p-3    ">
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
                                    setAddition={setAddition}
                                    placeholder={"Add comment"}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/** likes images in the bottom  */}
            {!seeComments && (
                <div
                    className={`grid w-full grid-cols-12 ${
                        !people.length ? " h-0 " : " h-20 "
                    }     transition-all ease-in duration-200  `}
                >
                    <div className={`h-20 py-2 px-4   flex   col-span-2 `}>
                        <div className="relative w-fit flex items-center   ">
                            {people.length &&
                                people?.slice(0, 5).map((one, idx) => {
                                    return (
                                        <>
                                            <div
                                                style={{
                                                    left: `${idx * 0.8}rem`,
                                                }}
                                                className={`    hover:z-[10] hover:cursor-pointer w-8 h-8 
                                                                hover:w-[3.1rem] hover:h-[3.1rem] 
                                                                transition-all duration-300 absolute 
                                                                border rounded-full bg-[#8eeee0] `}
                                            >
                                                <img
                                                    src={one.image}
                                                    alt={"da"}
                                                    className={` h-full w-full realtive object-cover rounded-full`}
                                                />
                                            </div>
                                        </>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="col-span-3  flex flex-col justify-center   ">
                        {people.length &&
                            people?.slice(0, 1).map((one) => {
                                return (
                                    <div className="px-0.5 text-sm font-bold">
                                        {one.name}
                                    </div>
                                );
                            })}
                        {people?.length > 1 ? (
                            <div className="px-0.5 text-xs font-semibold">
                                and others liked this
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
