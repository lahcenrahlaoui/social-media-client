import { BiSolidUserPlus } from "react-icons/bi";

const Friend = ({ friend }) => {
    return (
        <div className="flex justify-between w-full  bg-white border items-center mx-2 px-2 bg-rose-800">
            <div className="flex items-center gap-2 h-16 w-full ">
                <img
                    src={friend.img}
                    className="bg-yellow-200 rounded-full"
                    style={{ width: 50, height: 50 }}
                />

                <div className="text-xs ">
                    <div className="font-semibold">{friend.name}</div>
                    <div>{friend.message}</div>
                </div>
            </div>
            <BiSolidUserPlus className="text-2xl hover:cursor-pointer" />
        </div>
    );
};

export default Friend;
