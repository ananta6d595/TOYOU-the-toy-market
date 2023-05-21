import React from "react";

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
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                <NavLink to={`/toy/${toy._id}`}>
                    <button className="btn btn-accent hover:btn-info">
                        details
                    </button>
                </NavLink>
                {/* <a

                    className="absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                /> */}
            </div>
        </>
    );
};

export default TabToysCard;
