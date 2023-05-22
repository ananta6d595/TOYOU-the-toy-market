import React, { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";

const AddToys = () => {
    const { user, loading } = useContext(AuthContext);

    const handleAddToys = (event) => {
        event.preventDefault();

        const form = event.target;
        
        const image = form.image;
        const name = form.name;
        const seller = user?.displayName;
        const email = user?.email;
        const category = form.category;
        const price = form.price;
        const rating = form.rating;
        const quantity = form.quantity;
        const description = form.description;

        const toyDetails = {
            image,
            name,
        };

        console.log(toyDetails);

        // fetch("http://localhost:5000/addToys", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(toyDetails),
        // })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data));
    };

    return (
        <div className="container mb-24">
            <h1 className="text-center font-bold text-5xl mb-6">Add Toys</h1>
            <div className="card-body">
                <form onSubmit={handleAddToys}>
                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Image</span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Type here"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input
                                type="text"
                                name="seller"
                                placeholder="Type here"
                                defaultValue={user?.displayName}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Type here"
                                defaultValue={user?.email}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Type here"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price in USD</span>
                            </label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Type here"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="text"
                                name="rating"
                                placeholder="Type here"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Available quantity
                                </span>
                            </label>
                            <input
                                type="text"
                                name="quantity"
                                placeholder="Type here"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Detail description
                                </span>
                            </label>
                            <input
                                type="text"
                                name="description"
                                placeholder="Type here"
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                </form>
                <div className="form-control mt-6">
                    <input
                        type="submit"
                        value="Add Toy"
                        className="btn btn-accent hover:btn-success btn-block"
                    />
                </div>
            </div>
        </div>
    );
};

export default AddToys;
