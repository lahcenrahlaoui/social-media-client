import { combineReducers } from "redux";
import {
    postReducer,
    postsReducer,
    likeReducer,
    commentsReducer,
    followingListReducer,
    suggestionListReducer,
    postsProfileReducer,
} from "./postReducer";

const reducers = combineReducers({
    post: postReducer,
    posts: postsReducer,
    likes: likeReducer,
    comments: commentsReducer,
    followingList: followingListReducer,
    suggestionList: suggestionListReducer,
    profilePosts: postsProfileReducer,
});

export default reducers;
