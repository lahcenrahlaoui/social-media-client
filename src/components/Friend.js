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
        <div className="w-full px-6 py-1 ">
            <div className="flex gap-4 ">
                <div className="w-14 h-14 min-w-[3.5rem] min-h-[3.5rem]">
                    <img
                        src={friend.image}
                        className="bg-yellow-200 rounded-full  object-cover  w-full h-full"
                    />
                </div>

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
            <span className="h-4 w-full bg-gray-900 "></span>
        </div>
    );
};

export default Friend;
