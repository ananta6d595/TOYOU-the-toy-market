import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/Navbar/NavigationBar";

const Main = () => {
    return (
        <>
            <div className="bg-[#d2ebf0]">
                <NavigationBar></NavigationBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Main;
