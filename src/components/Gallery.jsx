import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Gallery = ({images}) => {
        useEffect(() => {
            Aos.init();
        }, []);

    return (
        <>
            <div className="container mb-14" data-aos="fade-left">
                <swiper-container
                    slides-per-view="3"
                    navigation="true"
                    pagination="true"
                    autoplay
                    speed="1000"
                    loop="true"
                    css-mode="true">
                    {images.map((image, index) => {
                        return (
                            <swiper-slide key={index}>
                                <div className="mx-2">
                                    <img
                                        src={image}
                                        className="h-72 bg-cover rounded-3xl"
                                    />
                                </div>
                            </swiper-slide>
                        );
                    })}
                </swiper-container>
            </div>
        </>
    );
};

export default Gallery;