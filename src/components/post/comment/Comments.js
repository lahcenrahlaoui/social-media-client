/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";

import { fetchCommentsAction } from "actions";
import { useAuthContext } from "hooks/useAuthContext";
import { useDispatch, useSelector } from "react-redux";

import Comment from "./Comment";
import SkeletonComment from "./SkeletonComment";
const Comments = ({ item, seeComments, skipValue, setSkipValue }) => {
    const { user } = useAuthContext();
    const dispatch = useDispatch();

    // get all comments fot the post
    const state = useSelector((state) => state.comments);

    useEffect(() => {
        if (seeComments && !skipValue) {
            handleFetchComments();
        }
    }, [seeComments, item, user]);

    let renderComments;
    const skeletonRenderArray = [0, 0, 0];
    if (Object.keys(state.data).includes(item._id)) {
        const comments = state.data[item._id];

        renderComments = comments.map((comment, idx) => {
            return <Comment key={idx} comment={comment} />;
        });

        skeletonRenderArray.unshift(...renderComments);
    }

    let skeleton = skeletonRenderArray.map((i, idx) => {
        if (typeof i !== "number") {
            return i;
        } else {
            return <SkeletonComment key={idx} />;
        }
    });

    // fetch data onclick
    const handleFetchComments = () => {
        const data = {
            postId: item._id,
            skipValue: skipValue,
        };
        if (user) {
            dispatch(fetchCommentsAction(data, user));
            setSkipValue((state) => state + 3);
        }
    };

    // return data
    return (
        <div className=" gap-1 cursor-pointer px-6 py-5 ">
            <div>
                {state.isLoading ? (
                    skeleton
                ) : !renderComments?.length ? (
                    <div className="text-gray-600 text-sm text-center font-medium ">
                        Be the first one who comments
                    </div>
                ) : (
                    renderComments
                )}
            </div>

            <div
                className="float-right underline text-blue-600 capitalize"
                onClick={handleFetchComments}
            >
                {item.comments.length > skipValue && " load more"}
            </div>
        </div>
    );
};

export default Comments;
