import axios from "axios";

const baseUrl = "";

export const getPostById = async (id) => {
    if (id === null) {
        return {};
    }
    const response = await axios.get(`/api/posts/${id}`);
    console.log("response");
    console.log(response);
    return response;
};
export const getPostsAll = async () => {
    const response = await axios.get(`/api/posts`);

    console.log(response)
    return response;
};

export const setNewPost = async (data) => {
    console.log("data")
    console.log(data)
    const response = await axios.post(`/api/posts`, data);
 console.log(response)
    return response;
}; 

export const setUserLike = async (id) => {
    const response = await axios.patch(`/api/posts/${id}/likes`);
    
    return response;
}; 