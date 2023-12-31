import {
    GET_POST,
    IS_LOADING,
    GET_POSTS_ALL,
    SET_POSTS_ALL,
    SET_LIKE,
    SET_ONE_LIKE,
    SET_NEW_LIKE,
    GET_COMMENTS_ALL,
    IS_LOADING_COMMENTS,
    IS_NOT_LOADING_COMMENTS,
    IS_LOADING_COMMENTS_CREATION,
    SET_COMMENTS_ALL,
    LOADING_FOLLOWING_LIST,
    SET_FOLLOWING_LIST,
    LOADING_SUGGESTION_LIST,
    SET_SUGGESTION_LIST,
    UPDATE_SUGGESTION_LIST,
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

/////////////////////////////////////////////////////////////////////////////////

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
        default:
            return state;
    }
};

/////////////////////////////////////////////////////////////////////////////////
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
                    return {
                        [Object.keys(item)[0]]: Object.values(
                            action.payload
                        )[0],
                    };
                }
                return item;
            });

            return { ...state, data: x };
        default:
            return state;
    }
};

/////////////////////////////////////////////////////////////////////////////////

const initialComments = {
    data: {},
    isLoading: false,
};
export const commentsReducer = (state = initialComments, action) => {
    switch (action.type) {
        case IS_LOADING_COMMENTS:
            return {
                ...state,
                isLoading: true,
            };
        case IS_NOT_LOADING_COMMENTS:
            return {
                ...state,
                isLoading: false,
            };

        // case GET_COMMENTS_ALL:

        //     console.log(action.payload);
        //     return {
        //         ...state,
        //         data: [...state.data, ...action.payload],
        //         isLoading: false,
        //     };

        // case SET_COMMENTS_ALL:
        //     return {
        //         ...state,
        //         data: [...action.payload, ...state.data],
        //         isLoading: false,
        //     };

        case GET_COMMENTS_ALL:
            const s = { ...state.data };

            if (Object.keys(s).includes(action.payload.postId)) {
                s[action.payload.postId] = [
                    ...s[action.payload.postId],
                    ...action.payload.data,
                ];
            } else {
                s[action.payload.postId] = [...action.payload.data];
            }
            return {
                ...state,
                data: s,
                isLoading: false,
            };

        case SET_COMMENTS_ALL:
            const x = { ...state.data };
            if (Object.keys(x).includes(action.payload.postId)) {
                x[action.payload.postId] = [
                    ...x[action.payload.postId],
                    action.payload.data,
                ];
            } else {
                x[action.payload.postId] = [action.payload.data];
            }
            return {
                ...state,
                data: x,
                isLoading: false,
            };

        // case SET_NEW_COMMENT:
        //     return {
        //         ...state,
        //         data: [...state.data, action.payload],
        //     };

        // case GET_COMMENTS:
        //     return { ...state, data: action.payload };

        // case SET_COMMENT:
        //     return { ...state, data: action.payload };
        // case SET_ONE_COMMENT:
        //     const x = state.data.map((item) => {
        //         if (Object.keys(item)[0] === Object.keys(action.payload)[0]) {
        //             return action.payload;
        //         }
        //         return item;
        //     });

        //     return { ...state, data: x };
        default:
            return state;
    }
};

// const commentReducerState = {
//     data: {},
//     isLoading: true,
// };

// export const commentReducer = (state = commentReducerState, action) => {
//     switch (action.type) {
//         case IS_LOADING_COMMENTS_CREATION:
//             return {
//                 ...state,
//                 isLoading: true,
//             };
//         case GET_POST:
//             return {
//                 ...state,
//                 data: action.payload,
//                 isLoading: false,
//             };

//         default:
//             return state;
//     }
// };

////////////////////////////////////////////////////////////////////////////////////

const intialFollowingList = {
    data: [],
    isLoading: false,
};
export const followingListReducer = (state = intialFollowingList, action) => {
    switch (action.type) {
        case LOADING_FOLLOWING_LIST:
            return {
                ...state,
                isLoading: true,
            };
        case SET_FOLLOWING_LIST:
           
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
};

const initialSeggestionList = {
    data: [],
    isLoading: false,
};

export const suggestionListReducer = (
    state = initialSeggestionList,
    action
) => {
    switch (action.type) {
        case LOADING_SUGGESTION_LIST:
            return {
                ...state,
                isLoading: true,
            };
        case SET_SUGGESTION_LIST:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case UPDATE_SUGGESTION_LIST:
            const x = state.data.filter((item) => {
                return item.email !== action.payload;
            });

            return {
                ...state,
                data: x,
                isLoading: false,
            };

        default:
            return state;
    }
};
