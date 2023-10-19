import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const ProductAdvertisement = () => {

    return (
        <div >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="md:h-[50vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://res.cloudinary.com/driveau/image/upload/v1635600192/cms/uploads/uesqrvneumrqxbcddmid.jpg")' }}>
                        <div className=" bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                            <div>
                                <h2 className="text-2xl md:text-4xl text-center font-bold mb-4 md:mb-8 text-white">Travel with Confidence, We have Got You Covered</h2>
                                <p className="text-white md:text-xl md:font-bold">We are here to fuel your automotive enthusiasm. Dive into our comprehensive collection of articles, reviews, and industry insights</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:h-[50vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod/images/gls63-1629117233.jpg?crop=1xw:0.84814453125xh;center,top&resize=1200:*")' }}>
                        <div className=" bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                            <div>
                                <h2 className="text-2xl md:text-4xl text-center font-bold mb-4 md:mb-8 text-white">Travel with Confidence, We have Got You Covered</h2>
                                <p className="text-white md:text-xl md:font-bold">We are here to fuel your automotive enthusiasm. Dive into our comprehensive collection of articles, reviews, and industry insights</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:h-[50vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FNews%2Ftesla_model_x.jpg&c=0")' }}>
                        <div className=" bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                            <div>
                                <h2 className="text-2xl md:text-4xl text-center font-bold mb-4 md:mb-8 text-white">Travel with Confidence, We have Got You Covered</h2>
                                <p className="text-white md:text-xl md:font-bold">We are here to fuel your automotive enthusiasm. Dive into our comprehensive collection of articles, reviews, and industry insights</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:h-[50vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1628757949/autoexpress/2021/08/Honda%20electric%20crossover%202023%20exclusive%20image.jpg")' }}>
                        <div className=" bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                            <div>
                                <h2 className="text-2xl md:text-4xl text-center font-bold mb-4 md:mb-8 text-white">Travel with Confidence, We have Got You Covered</h2>
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