/* eslint-disable jsx-a11y/alt-text */

import axios from "axios";
import React, { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { useAuthContext } from "hooks/useAuthContext";
import { useDispatch, useSelector } from "react-redux";

import x from "images/download.svg";

import { ReturnIcon } from "./ReturnIcon";
import { format } from "date-fns";
const Meteo = () => {
    const { user } = useAuthContext();

    // const [followingList, setFollowingsList] = useState([]);


    
    const [myLocation, setMyLocation] = useState({
        latitude: "",
        longitude: "",
    });

    const [weatherMinutely, setWeatherMinutely] = useState();
    const [weatherWeekly, setWeatherWeekly] = useState();

    const getMyLocation = () => {
        let location = null;
        let latitude = null;
        let longitude = null;
        if (window.navigator && window.navigator.geolocation) {
            location = window.navigator.geolocation;
        }
        if (location) {
            location.getCurrentPosition(function (position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;

                setMyLocation({ latitude, longitude });
            });
        }
    };

    useEffect(() => {
        getMyLocation();
    }, [user]);

    useEffect(() => {
        if (myLocation.latitude !== "") {
            (async () => {
                const apikey = "7b8710ea87074f64982ef6f3881abf76";
                const lat = myLocation.latitude;
                const lon = myLocation.longitude;

                const urlMinutely = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apikey}&include=minutely`;
                const responseMinutely = await axios.get(urlMinutely);

                const urlWeekly = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${apikey}&days=7`;
                const responseWeekly = await axios.get(urlWeekly);

                // console.log(responseWeekly.data.data);

                setWeatherMinutely(responseMinutely.data.data[0]);
                setWeatherWeekly(responseWeekly.data.data);
            })();
        }
    }, [myLocation]);

    const renderDays = weatherWeekly?.map((day) => {
        const dayName = format(new Date(day.datetime), "EEEE");

        return (
            <div
                key={day.valid_date}
                className=" text-white  flex flex-col  justify-center w-10 lg:w-8 items-center "
            >
                <div className="text-xs   lg:text-xs  ">
                    {dayName.slice(0, 3)}
                </div>
                <div className="text-base lg:text-xl ">
                    <ReturnIcon code={day?.weather?.code} />
                </div>
                <div className="text-sm   lg:text-md ">
                    {Math.round(day.temp)}
                    <span className="font-thin text-md">&deg;</span>
                </div>
            </div>
        );
    });

    return (
        <div className="  top-16  h-80  ">
            <div className=" relative flex flex-col items-center gap-2 rounded-xl h-full border bg-[#5596E6]  ">
                <img
                    className="absolute w-full h-full object-cover bg-blue-200 opacity-60 rounded-xl "
                    src={x}
                />
                <div className="absolute z-[10] flex justify-center flex-col py-2 items-center">
                    <div className=" mt-3 text-white flex justify-center items-center flex-col ">
                        <div className="text-4xl font-semibold ">
                            {Math.round(weatherMinutely?.temp)}
                            <span className="font-thin text-5xl">&deg;</span>
                        </div>
                        <div className="text-6xl ">
                            <ReturnIcon code={weatherMinutely?.weather?.code} />
                        </div>
                        <div className="font-semibold text-sm">
                            {weatherMinutely?.weather.description}
                        </div>

                        <div className="flex justify-center gap-1.5 lg:gap-0.5 bg-[#eeeeee70] w-full h-20 mt-4 py-0.5 lg:py-0.75">
                            {renderDays}
                        </div>

                        <div className=" text-4xl lg:text-lg  font-semibold ">
                            {weatherMinutely?.city_name} , 
                            {weatherMinutely?.timezone}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meteo;
