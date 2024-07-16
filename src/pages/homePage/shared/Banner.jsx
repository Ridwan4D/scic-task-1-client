import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../../assets/Green and Yellow Simple Clean Shoes Sale Banner.png";
import banner2 from "../../../assets/Red Yellow Financial Education YouTube Channel Art.png";
const Banner = () => {

    return (
        <div className="mt-5 md:px-10">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                //   navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src={banner1}
                        alt={`slide ${banner1}`}
                        className="w-full max-h-[450px] h-[40vh] md:h-auto  rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={banner2}
                        alt={`slide ${banner2}`}
                        className="w-full max-h-[450px] h-[40vh] md:h-auto  rounded-md"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;