import React from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
    const loadedToy = useLoaderData();
    const navigate = useNavigate();
    const { _id, toy_name, price, available_quantity, detail_description } =
        loadedToy;

    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const available_quantity = form.quantity.value;
        const detail_description = form.description.value;

        const updatedToy = {
            price,
            available_quantity,
            detail_description,
        };

        fetch(`http://localhost:5000/myToys/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedToy),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, update it!",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                "Updated!",
                                "Your file has been updated.",
                                "success"
                            ).then((nextRes) => {
                                if (nextRes.isConfirmed) {
                                    navigate(`/myToys`);
                                }
                            });
                        }
                    });
                }
            });
    };

    return (
        <div className="container mb-24">
            <h1 className="text-center font-bold text-5xl mb-6">
                Update Toy: {toy_name}
            </h1>
            <div className="card-body">
                <Form onSubmit={handleUpdateToy}>
                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price in USD</span>
                            </label>
                            <input
                                type="text"
                                name="price"
                                defaultValue={price}
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
                                defaultValue={available_quantity}
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
                                defaultValue={detail_description}
                                placeholder="Type here"
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Update Toy"
                            className="btn btn-accent hover:btn-success btn-block"
                        />
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default UpdateToys;
