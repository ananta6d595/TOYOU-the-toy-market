import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const loadedToy = useLoaderData();
    const {
        picture,
        toy_name,
        seller_name,
        seller_email,
        price,
        rating,
        available_quantity,
        detail_description,
    } = loadedToy;

    console.log(loadedToy);
    return (
        <>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row bg-white rounded-3xl md:p-12">
                    <img
                        src={picture}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{toy_name}</h1>
                        <p className="pt-6 font-bold text-gray-500 md:w-[80%] mb-3">
                            {detail_description}
                        </p>
                        <p className="mb-3">
                            <span className="bg-cyan-100 rounded-full p-1 px-2 font-medium">
                                Sold by:{" "}
                            </span>{" "}
                            {seller_name}
                        </p>
                        <p className="mb-3">
                            <span className="bg-cyan-100 rounded-full p-1 px-2 font-medium">
                                Email:{" "}
                            </span>
                            {seller_email}
                        </p>
                        <p className="mb-3">
                            <span className="bg-cyan-100 rounded-full p-1 px-2 font-medium">
                                Price:{" "}
                            </span>
                            {price} USD
                        </p>
                        <p className="mb-3">
                            <span className="bg-cyan-100 rounded-full p-1 px-2 font-medium">
                                Rating:{" "}
                            </span>
                            {rating}
                        </p>
                        <p className="mb-3">
                            <span className="bg-cyan-100 rounded-full p-1 px-2 font-medium">
                                Quantity:{" "}
                            </span>

                            {available_quantity}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToyDetails;
