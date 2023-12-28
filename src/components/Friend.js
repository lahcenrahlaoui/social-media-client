import { useDispatch } from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";
import { followingUserAction } from "../actions";

/* eslint-disable jsx-a11y/alt-text */
const Friend = ({ friend }) => {
    const { user } = useAuthContext();
   
    
    const dispatch = useDispatch();
    const handleFollow = () => {
        const data = {
            email: friend.email,
        };
        if (user) {

            dispatch(followingUserAction(data, user));
        }
    };

 
    return (
        <>
            <div className="flex gap-4 w-full items-center mx-2 pl-3 pr-20  ">
                <img
                    src={friend.image}
                    className="bg-yellow-200 rounded-full  object-cover  w-16 h-16"
                    style={{ width: 60, height: 60 }}
                />

                <div className="flex flex-col gap-2 text-xs w-full ">
                    <div className="text-base text-gray-800 capitalize font-semibold hover:underline cursor-pointer ">
                        {friend.name}
                    </div>
                    <button
                        onClick={handleFollow}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Follow
                    </button>
                </div>
            </div>
            <span className="h-px w-full bg-gray-300 "></span>
        </>
    );
};

export default Friend;
