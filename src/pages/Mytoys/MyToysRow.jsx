import React from "react";
import { NavLink } from "react-router-dom";

const MyToysRow = ({ toy }) => {
    const {
        _id,
        toy_name,
        seller_name,
        sub_category,
        price,
        available_quantity,
    } = toy;

    const HandelDelete = (id) => {
        console.log(id);
    };
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
                        <button className="btn btn-accent hover:btn-info">
                            Update
                        </button>
                    </NavLink>
                </th>
                <th>
                    <NavLink onSubmit={() => HandelDelete(_id)}>
                        <button className="btn btn-accent hover:btn-info">
                            Delete
                        </button>
                    </NavLink>
                </th>
            </tr>
        </>
    );
};

export default MyToysRow;
