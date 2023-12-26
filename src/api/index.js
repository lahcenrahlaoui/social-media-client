import axios from "axios";

const baseUrl = "";

export const getPostById = async (id, user) => {
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    };

    if (id === null) {
        return {};
    }
    const response = await axios.get(`/api/posts/${id}`, config);

    return response;
};
export const getPostsAll = async (user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
    };

    const response = await axios.get(`/api/posts`, config);

    return response;
};

export const setNewPost = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
    };

    const response = await axios.post(`/api/posts`, config, data);

    return response;
};

// change likes
export const setUserLike = async (id, user) => {
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    };

    const response = await axios.patch(`/api/posts/${id}/likes`, config);

    return response;
};
// change comments
export const setNewComment = async (data, user) => {
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    };

    const { post_id, content } = data;
    const response = await axios.post(
        `/api/comments/newComment/${post_id}/send_the_user_id`,
        {
            content,
        }
    );
    return response;
};

export const fetchCommentsByPost = async (data, user) => {
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    };

    const postId = data.postId;
    const skip = data.skipValue;

    const response = await axios.get(`/api/comments/post/`,   {
        params: { postId: postId, skip: skip },
    });

    return response;
};
