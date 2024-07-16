import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* nav */}
            <Nav />
            {/* outlets */}
            <div>
                <Outlet />
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            {/* footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;