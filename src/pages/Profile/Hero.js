/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { BASE_URL } from "constants";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Hero({ user }) {
    const [profile, setProfile] = useState();

    const { pathname } = useLocation();
    useEffect(() => {
        (async () => {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const response = await axios.get(
                `${BASE_URL}/api/user/get/user-information${pathname}`,
                config
            );

            setProfile(response.data.user);
        })();
    }, [pathname, user.token]);

    return (
        <div className="flex justify-center  ">
            <div className="relative  mt-14 w-full lg:w-2/3  ">
                <div className="relative flex justify-center  ">
                    <img
                        src={profile?.image}
                        className="w-[60rem] h-[25rem] object-cover object-top "
                    />
                </div>
                <div className="absolute flex gap-3 bg-[#0000006e] w-full  bottom-0 ">
                    <img
                        src={profile?.image}
                        className=" w-28 h-28 object-cover object-top 
                                    rounded-full p-0.5
                                    bg-[#0000006e] opacity-90 hover:opacity-100 
                                    "
                    />
                    <div className="text-2xl text-white font-semibold translate-y-1/4 capitalize">
                        <div className=" px-2 py-0.5">
                            {profile?.name} {profile?.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
