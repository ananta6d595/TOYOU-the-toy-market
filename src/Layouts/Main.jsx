import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/Navbar/NavigationBar";


const Main = () => {
    return (
        <div>
            <div className="bg-image">
                <NavigationBar></NavigationBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;