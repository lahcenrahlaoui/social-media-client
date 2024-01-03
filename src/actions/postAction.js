import {
    setNewPost,
    fetchPostById,
    fetchPostsAll,
    fetchPostsProfile,
} from "api";
import { GET_POSTS_ALL_FROM_USER } from "constants";
import { IS_LOADING_POSTS_FOR_PROFILE } from "constants";
import { IS_LOADING_POSTS_FROM_USER } from "constants";
import {
    GET_POST,
    GET_POSTS_ALL,
    SET_POSTS_ALL,
    IS_LOADING,
    SET_LIKE,
    SET_NEW_LIKE,
} from "constants";

export const getPostAction = (id, user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING,
    });
    const response = await fetchPostById(id);

    dispatch({
        type: GET_POST,
        payload: response.data,
    });
};

export const getPostsAction = (user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING,
    });

    const response = await fetchPostsAll(user);

    console.log(response.data);
    const ids = response.data.map((d) => d._id);
    const likes = response.data.map((d) => d.likes);

    const result = ids.map((item, idx) => {
        return {
            [item]: likes[idx],
        };
    });

    dispatch({
        type: GET_POSTS_ALL,
        payload: response.data,
    });

    dispatch({
        type: SET_LIKE,
        payload: result,
    });
};

export const setPostAction = (data, user) => async (dispatch, getState, x) => {
    const response = await setNewPost(data, user);

    response.data.image = URL.createObjectURL(data.get("image"));

    dispatch({
        type: SET_POSTS_ALL,
        payload: response.data,
    });

    // this added hero to handle likes

    const changeThis = {
        [response.data._id]: response.data.likes,
    };
    dispatch({
        type: SET_NEW_LIKE,
        payload: changeThis,
    });
};

export const getPostsProfile = (user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING_POSTS_FOR_PROFILE,
    });

    const response = await fetchPostsProfile(user);

    const ids = response.data.map((d) => d._id);
    const likes = response.data.map((d) => d.likes);

    const result = ids.map((item, idx) => {
        return {
            [item]: likes[idx],
        };
    });

    dispatch({
        type: GET_POSTS_ALL_FROM_USER,
        payload: response.data,
    });

    dispatch({
        type: SET_LIKE,
        payload: result,
    });
};
