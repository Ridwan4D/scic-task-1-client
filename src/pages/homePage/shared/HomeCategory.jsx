import CategoryLayerOne from "./CategoryLayerOne";
import CategoryLayerTwo from "./CategoryLayerTwo";

const HomeCategory = () => {
    return (
        <div className="py-20 bg-[#fff1f7] px-10">
            <h2 className="text-5xl font-semibold text-center">All Financial Solutions in a Platform</h2>
            {/* category layer one */}
            <CategoryLayerOne />
            {/* category layer two */}
            <CategoryLayerTwo /> 
        </div>
    );
};

export default HomeCategory;