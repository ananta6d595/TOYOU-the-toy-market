import React from "react";
import { NavLink } from "react-router-dom";

const MyToysRow = ({ toy, HandelDelete }) => {
    const {
        _id,
        toy_name,
        seller_name,
        sub_category,
        price,
        available_quantity,
    } = toy;

    return (
        <>
            <tr>
                <td>
                    <div className=" ps-9 ">
                        <p className="font-bold w-[300px] whitespace-normal">
                            {toy_name}
                        </p>
                    </div>
                </td>
                <td>{seller_name}</td>
                <td>{sub_category}</td>
                <td>{price} USD </td>
                <td>{available_quantity}</td>
                <th>
                    <NavLink to={`update/${_id}`}>
                        <button className="btn btn-info hover:bg-cyan-700">
                            Update
                        </button>
                    </NavLink>
                </th>
                <th>
                    <button
                        onClick={() => HandelDelete(_id)}
                        className="btn btn-error hover:bg-rose-500">
                        Delete
                    </button>
                </th>
            </tr>
        </>
    );
};

export default MyToysRow;
