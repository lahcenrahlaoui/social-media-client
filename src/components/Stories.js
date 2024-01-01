/* eslint-disable no-sparse-arrays */
/* eslint-disable jsx-a11y/alt-text */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";

import { getFollowingUserAction } from "../actions";
const Stories = () => {
    const { user } = useAuthContext();

    // const [followingList, setFollowingsList] = useState([]);

    const state = useSelector((state) => state.followingList);

    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            const data = {};

            dispatch(getFollowingUserAction(data, user));
        }
    }, [dispatch, user]);

    const cats = [
        "https://loremflickr.com/640/360",
        "https://loremflickr.com/640/303",
        "https://loremflickr.com/602/320",
        "https://img.freepik.com/photos-gratuite/chat-rouge-blanc-je-studio-blanc_155003-13189.jpg?w=360&t=st=1703979495~exp=1703980095~hmac=1a08747695714c609787a823699b8cb4a7d3f0ed62bb4cbaf23104dc7be49a91",
        "https://img.freepik.com/photos-gratuite/beau-chat-blanc-boules-interieur_23-2150752870.jpg?w=740&t=st=1703979513~exp=1703980113~hmac=26d2a9a3b94355b9707c5458fc561fc1869dd6d244c4691657a5c78790d1b287",
        ,
        "https://img.freepik.com/photos-gratuite/kitty-mur-monochrome-derriere-elle_23-2148955134.jpg?w=360&t=st=1703979535~exp=1703980135~hmac=4a9949a2504ca2f83ce1f4e871200221a8a67c330c01835951ff99e0c48c2e5d",
    ];

    let renderCats = cats.map((cat) => {
        return (
            <div className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 cursor-pointer">
                <img
                    className="rounded-full w-14 h-14 object-cover "
                    src={cat}
                />
            </div>
        );
    });

    return (
        <div className="sticky top-16  z-[20]  ">
            <div className="  flex flex-col items-center gap-2 rounded-xl bg-white py-2 border  ">
                <div className="font-2xl font-bold">Stories</div>

                <div className="grid  grid-flow-col lg:grid-flow-row lg:grid-cols-3 gap-1 ">
                    {renderCats}
                </div>
            </div>
        </div>
    );
};

export default Stories;
