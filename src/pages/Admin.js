import { useDispatch, useSelector } from "react-redux";
import Post from "components/post/Post";
import { useEffect } from "react";
import { getPosts } from "actions";
import NavBar from "components/Navbar/NavBar.js";
import Hero from "components/Hero.js";
import { Link } from "react-router-dom";

function Admin() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.posts);

   
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const renderItems = state?.data?.map((item) => {
        return <Post item={item} key={item.id} />;
    });

    return (
        <div className="w-full">
            <NavBar />
            {/* <Hero /> */}
            {state.isLoading ? (
                ""
            ) : (
                <div className="flex flex-col justify-center items-center" >
                    <Link to={'/createnew'}>
                        <button className="bg-red-100 w-20">add new post </button>
                    </Link>
                    <div className="flex items-center justify-center mt-8 ">
                        <div className="grid w-4/5 md:grid-cols-4 sm:grid-cols-3 gap-4">
                            {renderItems}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Admin;
