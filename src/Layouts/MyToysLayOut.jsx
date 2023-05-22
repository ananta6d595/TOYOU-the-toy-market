import React from "react";

import { Outlet } from "react-router-dom";

const MyToysLayOut = () => {
    return (
        <div className="bg-[#d2ebf0]">
            <Outlet></Outlet>
        </div>
    );
};

export default MyToysLayOut;
