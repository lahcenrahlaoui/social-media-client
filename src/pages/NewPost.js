import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post.js";
import { useEffect, useState } from "react";
import { getPosts } from "../actions";
import NavBar from "../components/NavBar.js";
import Hero from "../components/Hero.js";
import { Link, useNavigate } from "react-router-dom";
import {setPost} from '../actions'

function Home() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.posts);

    console.log(state);
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");


    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(
            setPost({
                title,
                content,
                image,
            })
        );
        navigate('/');


    };

    return (
        <div className="w-full">
            <NavBar />

            <form  onSubmit={onSubmit} className="flex flex-col gap-5 p-10 border border-2">
                <div className="flex gap-10">
                    <label>title </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="bg-green-50 py-2 px-1"
                    />
                </div>
                <div className="flex gap-10">
                    <label>content </label>
                    <input
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        className="bg-green-50 py-2 px-1"
                    />
                </div>
                <div className="flex gap-10">
                    <label>image </label>
                    <input
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        className="bg-green-50 py-2 px-1"
                    />
                </div>
                <button type="submit">
                    submit
                </button>
            </form>
        </div>
    );
}

export default Home;
