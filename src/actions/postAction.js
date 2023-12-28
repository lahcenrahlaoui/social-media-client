import {
    getPostById,
    getPostsAll,
    setNewPost,
    setUserLike,
    setUserComment,
} from "../api";
import {
    GET_POST,
    GET_POSTS_ALL,
    SET_POSTS_ALL,
    IS_LOADING,
    SET_LIKE,
    SET_NEW_LIKE,
} from "../constants";

export const getPostAction = (id, user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING,
    });
    const response = await getPostById(id);

    dispatch({
        type: GET_POST,
        payload: response.data,
    });
};

export const getPostsAction = (user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING,
    });

    const response = await getPostsAll(user);

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

export const setPostAction = (data, user) => async (dispatch) => {
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
