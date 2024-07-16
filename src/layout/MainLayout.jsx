import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            {/* nav */}

            {/* outlets */}
            <div>
                <Outlet />
            </div>
            {/* footer */}

        </div>
    );
};

export default MainLayout;