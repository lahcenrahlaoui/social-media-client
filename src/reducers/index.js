import { combineReducers } from "redux";
import {
    postReducer,
    postsReducer,
    likeReducer,
    commentsReducer,
    followingListReducer,
    suggestionListReducer,
} from "./postReducer";

const reducers = combineReducers({
    post: postReducer,
    posts: postsReducer,
    likes: likeReducer,
    comments: commentsReducer,
    followingList: followingListReducer,
    suggestionList: suggestionListReducer,
});

export default reducers;
