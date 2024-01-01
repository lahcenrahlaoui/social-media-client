import { useDispatch } from "react-redux";
import { useAuthContext } from "hooks/useAuthContext";
import { followingUserAction } from "actions";
import { BiPlusCircle } from "react-icons/bi";

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
        <div className="w-fit px-6 py-1 ">
            <div className="flex gap-4   ">
                <div className="relative  w-16 h-16 min-w-[3.5rem] min-h-[3.5rem]">
                    <img
                        src={friend.image}
                        className="absolute rounded-full  object-cover bottom-0 w-14 h-14"
                    />

                    <div
                        onClick={handleFollow}
                        className=" absolute cursor-pointer bottom-0 -right-px text-xl text-[#ff2d2dd1] bg-white
                                    flex items-center justify-center 
                                    rounded-full"
                    >
                        <BiPlusCircle />
                    </div>
                </div>
            </div>
            <span className="h-4 w-full bg-gray-900 "></span>
        </div>
    );
};

export default Friend;
