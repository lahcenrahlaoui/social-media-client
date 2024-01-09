import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext.js";
import Home from "pages/Home/";
import Signin from "./pages/Auth/Signin.js";
import Signup from "./pages/Auth/Signup.js";

import Profile from "pages/Profile/Profile";

function App() {
    const { user } = useAuthContext();

 
    return (
        <div className=" flex items-center justify-center app">
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/auth/signin"
                        element={!user ? <Signin /> : <Navigate to="/" />}
                    />
                    <Route
                        exact
                        path="/auth/signup"
                        element={!user ? <Signup /> : <Navigate to="/" />}
                    />

                    <Route
                        exact
                        path="/"
                        element={
                            user ? <Home /> : <Navigate to="/auth/signin" />
                        }
                    />
                    <Route path="/:id" element={user && <Profile />} />

                    {/* 
                    <Route exact path="/admin" element={user && <Admin />} />

                    <Route exact path="/" element={user && <Home />} />

                    <Route path="/createNew" element={user && <NewPost />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
