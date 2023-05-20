import React from 'react';

const Gallery = ({images}) => {
    return (
        <>
            <div className="container">
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
                                <div className="mx-2 rounded-lg">
                                    <img
                                        src={image}
                                        className="h-72 bg-cover"
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