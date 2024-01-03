export const GET_POST = "GET_POST";
export const GET_POSTS_ALL = "GET_POSTS_ALL";
export const GET_USER = "GET_USER";

export const IS_LOADING = "IS_LOADING";

export const IS_LOADING_COMMENTS_CREATION = "IS_LOADING_COMMENTS_CREATION";

export const SET_COMMENTS_ALL = "SET_COMMENTS_ALL";

export const IS_LOADING_COMMENTS = "IS_LOADING_COMMENTS";
export const IS_NOT_LOADING_COMMENTS = "IS_NOT_LOADING_COMMENTS";

export const SET_POSTS_ALL = "SET_POSTS_ALL";

export const SET_LIKE = "SET_LIKE";
export const SET_ONE_LIKE = "SET_ONE_LIKE";
export const SET_NEW_LIKE = "SET_NEW_LIKE";

export const SET_ONE_COMMENT = "SET_ONE_COMMENT";
export const SET_NEW_COMMENT = "SET_NEW_COMMENT";
export const SET_COMMENT = "SET_COMMENT";

export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_ALL = "GET_COMMENTS_ALL";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const LOADING_FOLLOWING_LIST = "LOADING_FOLLOWING_LIST";
export const SET_FOLLOWING_LIST = "SET_FOLLOWING_LIST";

export const LOADING_SUGGESTION_LIST = "LOADING_SUGGESTION_LIST";
export const SET_SUGGESTION_LIST = "SET_SUGGESTION_LIST";
export const UPDATE_SUGGESTION_LIST = "UPDATE_SUGGESTION_LIST";

export const IS_LOADING_POSTS_FOR_PROFILE = "IS_LOADING_POSTS_FOR_PROFILE";
export const GET_POSTS_ALL_FROM_USER = "GET_POSTS_ALL_FROM_USER";

///////
export const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://social-media-server-sand.vercel.app"
        : "";
