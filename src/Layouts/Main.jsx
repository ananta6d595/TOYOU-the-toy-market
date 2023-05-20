import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/Navbar/NavigationBar";

const Main = () => {
    return (
        <div>
            <div >
                <NavigationBar></NavigationBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;
