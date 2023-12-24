import React from "react";
import PostDetails from "./pages/PostDetails.js";
import Home from "./pages/Home.js";
import NewPost from "./pages/NewPost.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Admin from "./pages/Admin.js";


function App() {
    return (
        <div className=" flex items-center justify-center">
            <BrowserRouter>
                <Routes>
                    <Route exact  path="/admin" element={<Admin />} />
                    <Route exact  path="/" element={<Home />} />
                    <Route path="/:id" element={<PostDetails />} />
                    <Route path="/createNew" element={<NewPost />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
