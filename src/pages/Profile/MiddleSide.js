import Post from "components/post/Post";
import { BiSad } from "react-icons/bi";

const MiddleSide = ({ state, user }) => {
    // // to render posts for profile
    const renderItems = state?.data?.map((item) => {
        return (
            <div className={item.classes || ""} key={item._id}>
                <Post user={user} item={item} isLoading={state.isLoading} />
            </div>
        );
    });

    return (
        <div className="col-span-12 lg:col-span-6 z-[40] ">
            <div className="flex flex-col gap-4 items-center   ">
                <div className={`  flex items-center justify-center w-full `}>
                    <div className="grid flex-1  w-full grid-cols-1 gap-4 ">
                        {!renderItems.length ? (
                            <div className="flex items-center justify-center bg-white h-40">
                                <div className="flex text-xl items-center justify-center gap-2">
                                   <spna className="text-3xl"> <BiSad/> </spna>  There is no posts yet in this profile
                                </div>
                            </div>
                        ) : (
                            renderItems
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSide;
