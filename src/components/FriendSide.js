 
import { Link, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { BiSolidUserPlus } from "react-icons/bi";

import { getPost } from "../actions";
import Friend from "./Friend";
const FrinedSide = () => {

    
    const dispatch = useDispatch();
    const onGoBack = () => {
        dispatch(getPost(null));
    };

 
 
    
    const suggestFriends = [

        {
            name : "jhon" , 
            img :  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            message : "hey look at my profile "
        } , 
        {
            name : "dima" , 
            img :  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
            message : " see new pics  "
        } , 
        {
            name : "edward" , 
            img :  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
            message : " you are around to see what i have  "
        } , 

    ]

    const renderList = suggestFriends.map((friend)=>{
        return <Friend key={friend.name} friend={friend} />
    })

    return (
        <div className="relative h-full bg-yellow-200 w-full bg-red-200 ">
            <div className="fixed flex flex-col items-center h-full gap-3 w-fit  ">
                <div className="font-2xl font-bold">suggestion</div>

                <div className="grid grid-cols-1 gap-3 w-full ">{renderList}</div>
            </div>
        </div>
    );
};

export default FrinedSide;
