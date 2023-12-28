import axios from "axios";

const baseUrl = "";

export const getPostById = async (id, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
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

    const response = await axios.post(`/api/posts`, data, config);

    return response;
};

// change likes
export const setOneLike = async (_id, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
    };

    const response = await axios.patch(`/api/posts/${_id}/likes`, {}, config);
 
    return response;
};
// change comments
export const setNewComment = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
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
        `/api/comments/newComment/${post_id}`,

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
        params: { postId: postId, skip: skip },
    };

    const response = await axios.get(`/api/comments/post/`, config);

    return response;
};
export const setFollowingUser = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        params: { following: data.email },
    };

    const response = await axios.patch(`/api/user/set/following`, {}, config);

 
    return response;
};

export const getFollowingList = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
    };

    const response = await axios.get(`/api/user/get/following`, config);
 

    return response;
};

export const getSuggestionList = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
    };

    const response = await axios.get(`/api/suggestions/suggestions`, config);
 
 
    return response;
};
