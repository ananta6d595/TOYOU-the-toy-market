import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    //get user data for my toys' to show only logged in user's added toys.
    let [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    // load all data (would be great if I could pass user displayName to server and get specific user toys).
    let data = useLoaderData();

    // better to use set state function in useEffect to skip too much re-render error
    useEffect(() => {
        if (data) {
            data = data?.filter(
                (datum) => datum.seller_name == user?.displayName
            );
            setToys(data);
        }
    }, [data]);

    // const onSearchHandler = (event) => {
    //     const token = event.target.value;

    //     if (token === "") setToys(data.slice(0, 20));
    //     else {
    //         // didn't used toys variable because toys variable is already sliced and data variable isn't.
    //         // toys variable's value is used for showing limited data and data variable's value is used for searching.
    //         // to search we need all values not limited values.
    //         let toysData = data.filter((toy) =>
    //             toy.toy_name?.toLowerCase().includes(`${token.toLowerCase()}`)
    //         );
    //         setToys(toysData);
    //     }
    // };

    // const HandelDelete = () => {

    // }

    // console.log(toys);
    return (
        <div className="container mb-12">
            <h1 className="text-center font-bold text-5xl mb-8">
                {" "}
                {toys?.seller_name} LEGO Toys
            </h1>
            {/* <h2 className="text-center">Search</h2> */}
            <div className="w-full text-center mb-8">
                <input
                    type="text"
                    name="search"
                    className="rounded-full input input-bordered input-info w-full max-w-xl mx-auto"
                    placeholder="Search"
                    // onChange={onSearchHandler}
                />
                {/* <button className="absolute left-3/4 md:left-[80%]  text-gray-400">Search</button> */}
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="md:ps-12">Toy Name</th>
                            <th>Seller</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>
                                Available <br /> Quantity
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                {toys?.map((toy) => (
                            <MyToysRow key={toy?._id} toy={toy}></MyToysRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
