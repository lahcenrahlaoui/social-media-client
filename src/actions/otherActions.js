import { setNewComment } from "../api";
import { fetchCommentsByPost, setUserLike } from "../api";
import {
    GET_COMMENTS_ALL,
    IS_LOADING_COMMENTS,
    IS_NOT_LOADING_COMMENTS,
    SET_COMMENTS_ALL,
    SET_ONE_LIKE,
} from "../constants";

export const setOneLike = (_id, user) => async (dispatch) => {
    const response = await setUserLike(_id, user);

    console.log("response.data--------------------");
    console.log("response.data--------------------");
    console.log("response.data--------------------");
    console.log("response.data--------------------");
    console.log("response.data--------------------");
    
    const changeThis = {
        [response.data._id]: response.data.likes,
    };
    console.log(changeThis);

    dispatch({
        type: SET_ONE_LIKE,
        payload: changeThis,
    });
};

export const setComment = (data, user) => async (dispatch) => {
    const response = await setNewComment(data, user);

    const comments = {
        data: response.data,
        postId: response.data.postId,
    };

    dispatch({
        type: SET_COMMENTS_ALL,
        payload: comments,
    });
};

export const fetchComments = (data, user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING_COMMENTS,
    });

    const response = await fetchCommentsByPost(data, user);

    const comments = {
        data: response.data,
        postId: data.postId,
    };

    if (response.data.length > 0) {
        dispatch({
            type: GET_COMMENTS_ALL,
            payload: comments,
        });
    } else {
        dispatch({
            type: IS_NOT_LOADING_COMMENTS,
        });
    }
};
