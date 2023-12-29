/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const ImageComponent = ({ image_thumbnail, image, _id }) => {
    const [bigImage, setBigImage] = useState("");
    const [show, setShow] = useState(false);
    const { user } = useAuthContext();

    useEffect(() => {
        imageRef?.current?.addEventListener("load", () => {
            setShow(true);
        });

        if (!image?.includes("blob")) {
            (async () => {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                };
                const baseUrl = "https://social-media-server-sand.vercel.app";

          
                const newImage = await axios.get(
                    `${baseUrl}/api/posts/image/${_id}`,
                    config
                );
                setBigImage(newImage.data);
            })();
        } else {
            setBigImage(image);
        }
    }, [_id]);

    const imageRef = useRef();
    const divRef = useRef();
    console.log("baseUrl55555555555555555555555")
    console.log("baseUrl55555555555555555555555")
    console.log("baseUrl55555555555555555555555")
    console.log(image)
    return (
        <div
            ref={divRef}
            before=""
            className={`bg-cover bg-center w-full before:content-[attr(before)] h-fit inset-0 bg-black bg-opacity-10 flex justify-center  ${
                !show && " animate-pulse"
            } `}
            style={{ backgroundImage: `url(${image_thumbnail})` }}
        >
            <div className="flex items-center justify-center w-full ">
                <img
                    ref={imageRef}
                    src={bigImage}
                    loading="lazy"
                    className={`w-full h-full   ${
                        show
                            ? "opacity-1 transition-all  transition ease-in delay-100 duration-300 "
                            : "opacity-0"
                    }  `}
                />
            </div>
        </div>
    );
};

export default React.memo(ImageComponent);
