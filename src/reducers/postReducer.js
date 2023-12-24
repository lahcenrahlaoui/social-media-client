import {
    GET_POST,
    IS_LOADING,
    GET_POSTS_ALL,
    SET_POSTS_ALL,
    SET_LIKE,
    SET_ONE_LIKE,
    SET_NEW_LIKE,
} from "../constants";

const postReducerState = {
    data: {},
    isLoading: true,
};

export const postReducer = (state = postReducerState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_POST:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
};

const postsReducerState = {
    data: [],
    isLoading: true,
};

export const postsReducer = (state = postsReducerState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_POSTS_ALL:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case SET_POSTS_ALL:
            return {
                ...state,
                data: [action.payload, ...state.data],
                isLoading: false,
            };
        // case SET_LIKE:
        //     const x = state.data.map((item) => {
        //         if (item.id === action.payload.id) {
        //             return action.payload;
        //         }
        //         return item;
        //     });

        //     return {
        //         ...state,
        //         data: x,
        //         isLoading: false,
        //     };

        default:
            return state;
    }
};

const initialLikes = {
    data: [],
    isLoading: false,
};

export const likeReducer = (state = initialLikes, action) => {
    switch (action.type) {
        case SET_NEW_LIKE:
            return {
                ...state,
                data: [...state.data, action.payload],
            };

        case SET_LIKE:
            return { ...state, data: action.payload };
        case SET_ONE_LIKE:
            const x = state.data.map((item) => {
                if (Object.keys(item)[0] === Object.keys(action.payload)[0]) {
                    return action.payload;
                }
                return item;
            });

            return { ...state, data: x };
        default:
            return state;
    }
};
