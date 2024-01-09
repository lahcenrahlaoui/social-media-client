import axios from "axios";

import { BASE_URL } from "constants";

const credentials = {
    withCredentials: true,
};

// posts 
export const fetchPostById = async (id, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
    };

    if (id === null) {
        return {};
    }
    const response = await axios.get(`${BASE_URL}/api/posts/${id}`, config);

    return response;
};
export const fetchPostsAll = async (user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
    };

    const response = await axios.get(`${BASE_URL}/api/posts`, config);

    return response;
};

export const fetchPostsProfile = async (user) => {
  

    const currentUrl = window.location.href;

    const id = currentUrl.split("/").slice(-1)[0];

    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
    };
    const response = await axios.get(
        `${BASE_URL}/api/user/get/posts/${id}`,
        config
    );
    return response;
};

export const setNewPost = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
    };

    const response = await axios.post(`${BASE_URL}/api/posts`, data, config);

    return response;
};

// change likes
export const setOneLike = async (_id, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
    };

    const response = await axios.patch(
        `${BASE_URL}/api/posts/${_id}/likes`,
        {},
        config
    );

    return response;
};
// change comments
export const setNewComment = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
    };

    const { post_id, content } = data;

    // const response = await axios.post(
    //     `/api/comments/newComment/${post_id}/send_the_user_id`,

    //     {
    //         content,
    //         email,
    //     },
    //     config
    // );

    const response = await axios.post(
        `${BASE_URL}/api/comments/newComment/${post_id}`,

        {
            content,
        },
        config
    );
    return response;
};

export const fetchCommentsByPost = async (data, user) => {
    const postId = data.postId;
    const skip = data.skipValue;
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
        params: { postId: postId, skip: skip },
    };

    const response = await axios.get(`${BASE_URL}/api/comments/post/`, config);

    return response;
};

// following
export const setFollowingUser = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
        params: { following: data.email },
    };

    const response = await axios.patch(
        `${BASE_URL}/api/user/set/following`,
        {},
        config
    );

    return response;
};

export const getFollowingList = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
    };

    const response = await axios.get(
        `${BASE_URL}/api/user/get/following`,
        config
    );

    return response;
};

// suggestions
export const getSuggestionList = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
    };

    const response = await axios.get(
        `${BASE_URL}/api/suggestions/suggestions`,
        config
    );

    return response;
};
