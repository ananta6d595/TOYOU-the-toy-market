import React from "react";
import { NavLink } from "react-router-dom";

const TabToysCard = ({ toy }) => {
    return (
        <>
            <div className="relative p-3 hover:bg-cyan-100 rounded-3xl">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={toy.picture}
                            className="h-36 rounded-xl ms-4"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{toy.toy_name}</h2>
                        <p>Price: {toy.price}</p>
                        <p>Rating: {toy.rating}</p>
                        <NavLink to={`/toy/${toy._id}`}>
                            <button className="btn btn-accent hover:btn-info">
                                details
                            </button>
                        </NavLink>
                    </div>
                </div>

                {/* <a

                    className="absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                /> */}
            </div>
        </>
    );
};

export default TabToysCard;
