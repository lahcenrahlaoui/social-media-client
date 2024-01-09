import AvailableChats from "pages/Home/components/FollowingList.js";
import Meteo from "pages/Home/components/Meteo";

const LeftSide = ({ focused }) => {
    return (
        <div
            className={`${
                !focused ? "focused-opacity-none" : "focused-opacity"
            } flex flex-col gap-2 col-span-12 lg:col-span-3  px-3  `}
        >
            {process.env.NODE_ENV !== "development" && <Meteo />}
            <AvailableChats />
        </div>
    );
};

export default LeftSide;
