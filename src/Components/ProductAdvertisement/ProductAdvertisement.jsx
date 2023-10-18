import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const ProductAdvertisement = ({ car }) => {
    const {image} = car ;

    return (
        <div >
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation]}
                navigation
            >
                <SwiperSlide>
                    <div className="md:h-[50vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
                        <div className=" bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                            <div>
                                <h2 className="text-2xl md:text-4xl text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">Your Journey, Your Drive</h2>
                                <p className="text-white md:text-xl md:font-bold">We are here to fuel your automotive enthusiasm. Dive into our comprehensive collection of articles, reviews, and industry insights</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductAdvertisement;