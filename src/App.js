import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext.js";
import Home from "./pages/Home.js";
import Signin from "./pages/Signin.js";
import Signup from "./pages/Signup.js";

function App() {
    const { user } = useAuthContext();

    return (
        <div className=" flex items-center justify-center app">
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/signin"
                        element={!user ? <Signin /> : <Navigate to="/" />}
                    />
                    <Route
                        exact
                        path="/signup"
                        element={!user ? <Signup /> : <Navigate to="/" />}
                    />

                    <Route
                        exact
                        path="/"
                        element={user ? <Home /> : <Navigate to="/signin" />}
                    />

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
