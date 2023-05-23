import React, { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";
import { Form } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const AddToys = () => {
    const { user } = useContext(AuthContext);
    useTitle("Add Toys");

    const categories = [
        "LEGO City",
        "LEGO Marvel Super Heroes",
        "LEGO Star Wars",
        "LEGO Speed Champions",
    ];
    const handleAddToys = (event) => {
        event.preventDefault();

        const form = event.target;

        const picture = form.image.value;
        const toy_name = form.name.value;
        const seller_name = user?.displayName;
        const seller_email = user?.email;
        const sub_category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.quantity.value;
        const detail_description = form.description.value;

        const toyDetails = {
            sub_category,
            picture,
            toy_name,
            seller_name,
            seller_email,
            price,
            rating,
            available_quantity,
            detail_description,
        };

        Swal.fire({
            title: "Are you sure?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add Please",
            showClass: {
                popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
        }).then((result) => {
            // if only result isConfirmed true then delete will happen other wise not.
            if (result.isConfirmed) {
                fetch(
                    "https://toy-market-place-server-two.vercel.app/addToys",
                    {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(toyDetails),
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.insertedId > 0) {
                            Swal.fire("A new toy has been added", "success");
                        }
                    });
            }
        });
    };

    // const handelSelect = () => {

    // }

    return (
        <div className="container mb-24">
            <h1 className="text-center font-bold text-5xl mb-6">Add Toys</h1>
            <div className="card-body">
                <Form onSubmit={handleAddToys}>
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
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Choose one from below"
                                className="input input-bordered"
                            />
                            <p>
                                "LEGO City", "LEGO Marvel Super Heroes", "LEGO
                                Star Wars", "LEGO Speed Champions",
                            </p>
                        </div>
                        {/* <div className="">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <select
                                className="w-full h-12 rounded-lg"
                                onChange={handelSelect}>
                                {categories.map((category) => {
                                    console.log(category);
                                    <option value={category}>
                                        {category}
                                    </option>;
                                })}
                            </select>
                        </div> */}
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
                                type="number"
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
                    <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Add Toy"
                            className="btn btn-accent hover:btn-success btn-block"
                        />
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddToys;
