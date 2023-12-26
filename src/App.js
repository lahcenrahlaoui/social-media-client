import React from "react";
import PostDetails from "./pages/PostDetails.js";
import Home from "./pages/Home.js";
import NewPost from "./pages/NewPost.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Admin from "./pages/Admin.js";
import "./App.css";
import Signup from "./pages/Signup.js";
import Signin from "./pages/Signin.js";

function App() {

    return (
        <div className=" flex items-center justify-center app">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/signin" element={<Signin />} />

                    <Route exact path="/signup" element={<Signup />} />

                    <Route exact path="/admin" element={<Admin />} />

                    <Route exact path="/" element={<Home />} />
                    {/* <Route path="/:id" element={<PostDetails />} /> */}
                    <Route path="/createNew" element={<NewPost />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
