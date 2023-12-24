import { combineReducers } from "redux";
import { postReducer, postsReducer, likeReducer } from "./postReducer";

const reducers = combineReducers({
    post: postReducer,
    posts: postsReducer,
    likes: likeReducer,
});

export default reducers;
