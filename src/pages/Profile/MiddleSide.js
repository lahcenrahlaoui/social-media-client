import { getPostsProfile } from "actions";
import Post from "components/post/Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MiddleSide = ({ user, focused, setFocused }) => {
    const state = useSelector((state) => state.profilePosts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(getPostsProfile(user));
        }
    }, [dispatch, user]);

    // // to render posts

    const renderItems = state?.data?.map((item) => {
        console.log("item----------------------------");
        console.log("item----------------------------");
        console.log("item----------------------------");
        console.log(item);
        console.log("item----------------------------");
        console.log("item----------------------------");
        console.log("item----------------------------");
        return (
            <div className={item.classes || ""} key={item._id}>
                <Post user={user} item={item} isLoading={state.isLoading} />
            </div>
        );
    });

    return (
        <div className="col-span-12 lg:col-span-6 z-[40] ">
            <div className="flex flex-col gap-4 items-center   ">
                <div
                    className={`${
                        !focused ? "focused-opacity-none" : "focused-opacity"
                    } flex items-center justify-center  w-full `}
                >
                    <div className="grid flex-1  w-full grid-cols-1 gap-4 ">
                        {renderItems}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSide;
