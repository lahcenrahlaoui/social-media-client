import {
    setFollowingUser,
    getFollowingList,
    setNewComment,
    getSuggestionList,
} from "api";
import { fetchCommentsByPost, setOneLike } from "api";
import {
    GET_COMMENTS_ALL,
    IS_LOADING_COMMENTS,
    IS_NOT_LOADING_COMMENTS,
    LOADING_FOLLOWING_LIST,
    LOADING_SUGGESTION_LIST,
    SET_COMMENTS_ALL,
    SET_FOLLOWING_LIST,
    SET_ONE_LIKE,
    SET_SUGGESTION_LIST,
    UPDATE_SUGGESTION_LIST,
} from "constants";

export const setOneLikeAction = (_id, user) => async (dispatch) => {
    const response = await setOneLike(_id, user);

    const changeThis = {
        [response.data._id]: response.data.likes,
    };

    dispatch({
        type: SET_ONE_LIKE,
        payload: changeThis,
    });
};

export const setCommentAction = (data, user) => async (dispatch) => {
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

export const fetchCommentsAction = (data, user) => async (dispatch) => {
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

export const followingUserAction = (data, user) => async (dispatch) => {
    dispatch({
        type: LOADING_FOLLOWING_LIST,
    });

    const response = await setFollowingUser(data, user);

    dispatch({ type: SET_FOLLOWING_LIST, payload: response.data });

    dispatch({ type: UPDATE_SUGGESTION_LIST, payload: data.email });
};

export const getFollowingUserAction = (data, user) => async (dispatch) => {
    dispatch({
        type: LOADING_FOLLOWING_LIST,
    });

    const response = await getFollowingList(data, user);

    dispatch({ type: SET_FOLLOWING_LIST, payload: response.data });
};

export const getSuggestionAction = (data, user) => async (dispatch) => {
    dispatch({
        type: LOADING_SUGGESTION_LIST,
    });

    const response = await getSuggestionList(data, user);

    dispatch({ type: SET_SUGGESTION_LIST, payload: response.data });
};
