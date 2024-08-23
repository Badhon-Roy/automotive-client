import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div >
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
        >
            <SwiperSlide>
                <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://staticg.sportskeeda.com/editor/2023/09/bd29c-16945403266317-1920.jpg")' }}>
                    <div className=" bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                        <div>
                            <h2 className="text-2xl md:text-4xl text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">
                                <TypeAnimation
                                    sequence={[
                                        'Your Journey, Your Drive',
                                        1000,
                                    ]}
                                    speed={75}
                                />
                            </h2>
                            <p className="text-white md:text-xl md:font-bold">We are here to fuel your automotive enthusiasm. Dive into our comprehensive collection of articles, reviews, and industry insights</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://cdn.mos.cms.futurecdn.net/URkyS6DB8X3pdNcuNdhdxm.jpg")' }}>
                    <div className="bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                        <div>
                            <h2 className="text-2xl md:text-4xl text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">Your Journey, Your Drive</h2>
                            <p className="text-white md:text-xl md:font-bold">We are here to fuel your automotive enthusiasm. Dive into our comprehensive collection of articles, reviews, and industry insights</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://www.bmw.co.uk/content/bmw/marketGB/bmw_co_uk/en_GB/footer/experience-bmw/luxury-class/jcr:content/par/mosaicgallery/items/mosaicgalleryitem_2069872416/image/mobile.transform/mosaic963/image.1711372945132.jpg")' }}>
                    <div className="bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
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

export default Banner;