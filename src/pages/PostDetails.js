import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getPost } from "../actions/postAction.js";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar.js";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

function PostDetails() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.post);
    const location = useLocation();

    useEffect(() => {
        dispatch(getPost(location.pathname));
    }, [dispatch]);

    return (
        <div className="w-full">
            <NavBar />
            {state.isLoading ? (
                ""
            ) : (
                <div className="h-screen flex items-center justify-center  ">
                    <div className="h-4/5 w-4/5 flex items-center justify-center gap-5 ">
                        <LazyLoadImage
                            src={state?.data?.image}
                            // style={{
                            //     width: 300,
                            //     height: 300,
                            // }}
                            // width="300px"
                            // height="300px"
                            effect="blur"
                            placeholderSrc={state?.data?.image}
                            alt="post image"
                            className="w-full "
                        />

                        <div className="flex flex-col  w-2/3 gap-4">
                            <div className="text-2xl font-bold">
                                {state?.data?.title}
                            </div>
                            <div className="text-xl font-bold text-green-500">
                                {state?.data?.price} $
                            </div>

                            <div className="flex items-center">
                                <svg
                                    className="w-4 h-4 text-yellow-300 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p className="ms-2 text-sm font-bold text-gray-900">
                                    {state?.data?.rating?.rate}
                                </p>
                                <span className="w-1.5 h-1.5 mx-1.5 bg-gray-500 rounded-full"></span>
                                <p className="text-sm font-medium text-gray-900 ">
                                    {state?.data?.rating?.count} reviews
                                </p>
                            </div>

                            <div className="text-sm font-semibold">
                                {state?.data?.content}
                            </div>
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 w-fit
                                                focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                                                py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                                                focus:outline-none dark:focus:ring-blue-800"
                            >
                                add item
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostDetails;
