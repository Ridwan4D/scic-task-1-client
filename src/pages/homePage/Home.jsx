import Banner from "./shared/Banner";
import HomeCategory from "./shared/HomeCategory";

const Home = () => {
    return (
        <div className="space-y-20">
            {/* banner */}
            <Banner />
            {/* home categories */}
            <HomeCategory />
        </div>
    );
};

export default Home;