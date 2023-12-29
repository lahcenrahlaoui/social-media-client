import axios from "axios";

const baseUrl =
    "https://social-media-server-pesgb5ff2-lahcenrahlaouis-projects.vercel.app";

const credentials = {
    withCredentials: true,
};

export const getPostById = async (id, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials
    };

    if (id === null) {
        return {};
    }
    const response = await axios.get(`${baseUrl}/api/posts/${id}`, config);

    return response;
};
export const getPostsAll = async (user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials
    };

    const response = await axios.get(`${baseUrl}/api/posts`, config);

    return response;
};

export const setNewPost = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials
    };

    const response = await axios.post(`${baseUrl}/api/posts`, data, config);

    return response;
};

// change likes
export const setOneLike = async (_id, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials
    };

    const response = await axios.patch(
        `${baseUrl}/api/posts/${_id}/likes`,
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
        credentials
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
        `${baseUrl}/api/comments/newComment/${post_id}`,

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

    const response = await axios.get(`${baseUrl}/api/comments/post/`, config);

    return response;
};
export const setFollowingUser = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials,
        params: { following: data.email },
    };

    const response = await axios.patch(
        `${baseUrl}/api/user/set/following`,
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
        credentials
    };

    const response = await axios.get(
        `${baseUrl}/api/user/get/following`,
        config
    );

    return response;
};

export const getSuggestionList = async (data, user) => {
    const config = {
        headers: {
            authorization: `Bearer ${user.token}`,
        },
        credentials
    };

    const response = await axios.get(
        `${baseUrl}/api/suggestions/suggestions`,
        config
    );

    return response;
};
