import LikeIcon from "./LikeIcon";
import CommentIcon from "./comment/CommentIcon";

const Icons = ({
    length,
    setSeeComments,
    executeScroll,
    addition,
    allLikes,
    regularLike,
    item,
}) => {
    return (
        <>
            <div
                className=" absolute flex justify-end gap-2 
                                bottom-0 text-lg
                                right-6 w-full translate-y-1/4	
                        "
            >
                <CommentIcon
                    length={length}
                    setSeeComments={setSeeComments}
                    executeScroll={executeScroll}
                    addition={addition}
                    item={item}
                />

                <LikeIcon
                    allLikes={allLikes}
                    regularLike={regularLike}
                    item={item}
                />
            </div>
        </>
    );
};

export default Icons;
