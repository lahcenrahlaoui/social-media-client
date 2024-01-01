import AvailableChats from "components/AvailableChats.js";

// import Meteo from "components/Meteo.js";

const LeftSide = ({ focused }) => {
    return (
        <div
            className={`${
                !focused ? "focused-opacity-none" : "focused-opacity"
            } flex flex-col gap-2 col-span-12 lg:col-span-3  px-3  `}
        >
            {/* <Meteo /> */}
            <AvailableChats />
        </div>
    );
};

export default LeftSide;
