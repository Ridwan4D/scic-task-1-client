import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CategoryLayerOne = () => {
    const axiosPublic = useAxiosPublic();
    const { data: categories = [] } = useQuery({
        queryKey: ["categories1"],
        queryFn: async () => {
            const result = await axiosPublic.get('/categoriesOfLayerOne')
            return result.data
        }
    })
    console.log(categories);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-x-5">
            {categories.map((category, idx) =>
                <div key={idx} className="card card-compact bg-base-100 w-auto shadow-xl p-5 hover:scale-105 transition-all cursor-pointer">
                    <figure>
                        <img
                            src={category.image}
                            alt="payment"
                            className="h-[250px] hover:scale-95 transition-all rounded-md"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-semibold">{category.name}</h2>
                        <p className="md:px-10 text-center">{category.description}</p>
                        <div className="card-actions justify-center mt-3">
                            <button className="text-[#e2136e] text-lg">Learn More</button>
                        </div>
                    </div>
                </div>)}

        </div>
    );
};

export default CategoryLayerOne;