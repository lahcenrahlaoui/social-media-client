import { getPostById, getPostsAll, setNewPost, setUserLike , setUserComment } from "../api";
import {
    GET_POST,
    GET_POSTS_ALL,
    SET_POSTS_ALL,
    IS_LOADING,
    SET_LIKE,
    SET_NEW_LIKE,
} from "../constants";

export const getPost = (id , user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING,
    });
    const response = await getPostById(id);

    dispatch({
        type: GET_POST,
        payload: response.data,
    });
};

export const getPosts = (user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING,
    });

    const response = await getPostsAll(user);

    const ids = response.data.map((d) => d.id);
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

export const setPost = (data , user) => async (dispatch) => {
    const response = await setNewPost(data , user);

    response.data.image = URL.createObjectURL(data.get("image"));
    // response.data.classes = "animate-slide-down"
    
    dispatch({
        type: SET_POSTS_ALL,
        payload: response.data,
    });
    const changeThis = {
        [response.data.id]: response.data.likes,
    };
    // this added hero to handle likes 
    dispatch({
        type: SET_NEW_LIKE,
        payload: changeThis,
    });
};




