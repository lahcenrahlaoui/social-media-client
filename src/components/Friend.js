const Friend = ({ friend }) => {
    return (
        <>
            <div className="flex gap-4 w-full items-center mx-2 pl-3 pr-20  ">
                <img
                    src={friend.img}
                    className="bg-yellow-200 rounded-full"
                    style={{ width: 60, height: 60 }}
                />

                <div className="flex flex-col gap-2 text-xs w-full ">
                    <div className="text-base text-blue-500">{friend.name}</div>
                    <div className="cursor-pointer">add friend</div>
                </div>
            </div>
            <span className="h-px w-full bg-gray-300 w-full"></span>
        </>
    );
};

export default Friend;
