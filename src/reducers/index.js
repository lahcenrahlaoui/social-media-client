import { combineReducers } from "redux";
import { postReducer, postsReducer, likeReducer, commentsReducer } from "./postReducer";

const reducers = combineReducers({
    post: postReducer,
    posts: postsReducer,
    likes: likeReducer,
    comments : commentsReducer
});

export default reducers;
