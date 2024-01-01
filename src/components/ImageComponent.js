/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { BASE_URL } from "../constants";

const ImageComponent = ({ image_thumbnail, image, _id }) => {
    const [bigImage, setBigImage] = useState("");
    const [show, setShow] = useState(false);
    const { user } = useAuthContext();

    const imageRef = useRef();

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

                const newImage = await axios.get(
                    `${BASE_URL}/api/posts/image/${_id}`,
                    config
                );
                setBigImage(newImage.data);
            })();
        } else {
            setBigImage(image);
        }
    }, [_id, image, user.token]);

    return (
        <div
            before=""
            className={`bg-cover bg-center w-full before:content-[attr(before)] h-full inset-0 bg-black bg-opacity-10 flex justify-center  ${
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
                            ? "opacity-1 transition-all ease-in delay-100 duration-300 "
                            : "opacity-0"
                    }  `}
                />
            </div>
        </div>
    );
};

export default React.memo(ImageComponent);
