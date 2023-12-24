/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const ImageComponent = ({ image_thumbnail, image, id }) => {
    const [bigImage, setBigImage] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        imageRef?.current?.addEventListener("load", () => {
            setShow(true);
        });

        if (!image?.includes("blob")) {
            (async () => {
                const newImage = await axios.get(`/api/posts/image/${id}`);
                setBigImage(newImage.data);
            })();
        } else {
            setBigImage(image);
        }
    }, [id]);

    const imageRef = useRef();
    const divRef = useRef();

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
