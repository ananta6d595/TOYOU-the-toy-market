import React from 'react';

const Gallery = ({images}) => {
    return (
        <>
            <div className="container mb-14">
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