import { useEffect, useState } from "react";
import Friend from "./Friend";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
const FrinedSide = () => {
    const suggestFriends = [
        {
            name: "jhon",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            message: "hey look at my profile ",
        },
        {
            name: "dima",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
            message: " see new pics  ",
        },
        {
            name: "edward",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
            message: " you are around to see what i have  ",
        },
    ];

    const [firneds, setFriends] = useState([]);

    const { user } = useAuthContext();
    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/suggestions");

            const data = response.data.filter((item) => {
                return user.email !== item.email;
            });
            // console.log(response.data)
            setFriends(data);
        })();
    }, []);

    const renderList = firneds.map((friend) => {
        return <Friend key={friend.name} friend={friend} />;
    });

    return (
        <div className="relative h-full   w-full   ">
            <div className="fixed flex flex-col items-center h-full gap-3 w-fit  ">
                <div className="font-2xl font-bold capitalize">suggestion</div>

                <div className="grid grid-cols-1 gap-3 w-full ">
                    {renderList}
                </div>
            </div>
        </div>
    );
};

export default FrinedSide;
