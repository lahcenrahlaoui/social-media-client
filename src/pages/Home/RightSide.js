import Suggestions from "./components/Suggestions";
import Stories from "./components/Stories";

const RightSide = ({ focused }) => {
    return (
        <div
            className={` 
            hidden lg:flex 
            flex-col 
            gap-8
            ${!focused ? "focused-opacity-none" : "focused-opacity"}  
            col-span-3  
            `}
        >
            <Suggestions />
            <Stories />
        </div>
    );
};

export default RightSide;
