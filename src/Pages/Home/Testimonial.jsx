import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { BiSolidCar } from 'react-icons/bi';
import './testimonial.css';

const Testimonial = () => {
    return (
        <div className='mt-32 mb-8'>
            <div>
                    <p className='flex gap-2 items-center justify-center mx-auto text-xl text-blue-600'><BiSolidCar></BiSolidCar>Testimonials</p>
                <h2 className='text-center text-4xl mb-8 font-bold'>What Our <span className='text-blue-600'>Client Says</span></h2>
            </div>
            <Swiper
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
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    769: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='p-5'>
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/01.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Sylvia H Green</h2>
                        <p className='text-blue-600 font-bold'>Customer</p>
                        <p className='text-left my-5 text-sm'>I was able to find the perfect car for my needs and budget on Quattro. The search function was easy to use and the listings were very informative. I would definitely recommend  to anyone looking to buy a car.</p>
                        <div className='rating'>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5'>
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/01.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Sylvia H Green</h2>
                        <p className='text-blue-600 font-bold'>Customer</p>
                        <p className='text-left my-5 text-sm'>I was able to find the perfect car for my needs and budget on Quattro. The search function was easy to use and the listings were very informative. I would definitely recommend  to anyone looking to buy a car.</p>
                        <div className='rating'>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5'>
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/01.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Sylvia H Green</h2>
                        <p className='text-blue-600 font-bold'>Customer</p>
                        <p className='text-left my-5 text-sm'>I was able to find the perfect car for my needs and budget on Quattro. The search function was easy to use and the listings were very informative. I would definitely recommend  to anyone looking to buy a car.</p>
                        <div className='rating'>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5'>
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/01.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Sylvia H Green</h2>
                        <p className='text-blue-600 font-bold'>Customer</p>
                        <p className='text-left my-5 text-sm'>I was able to find the perfect car for my needs and budget on Quattro. The search function was easy to use and the listings were very informative. I would definitely recommend  to anyone looking to buy a car.</p>
                        <div className='rating'>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5'>
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/01.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Sylvia H Green</h2>
                        <p className='text-blue-600 font-bold'>Customer</p>
                        <p className='text-left my-5 text-sm'>I was able to find the perfect car for my needs and budget on Quattro. The search function was easy to use and the listings were very informative. I would definitely recommend  to anyone looking to buy a car.</p>
                        <div className='rating'>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5'>
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/01.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Sylvia H Green</h2>
                        <p className='text-blue-600 font-bold'>Customer</p>
                        <p className='text-left my-5 text-sm'>I was able to find the perfect car for my needs and budget on Quattro. The search function was easy to use and the listings were very informative. I would definitely recommend  to anyone looking to buy a car.</p>
                        <div className='rating'>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5'>
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/01.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Sylvia H Green</h2>
                        <p className='text-blue-600 font-bold'>Customer</p>
                        <p className='text-left my-5 text-sm'>I was able to find the perfect car for my needs and budget on Quattro. The search function was easy to use and the listings were very informative. I would definitely recommend  to anyone looking to buy a car.</p>
                        <div className='rating'>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5'>
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/01.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Sylvia H Green</h2>
                        <p className='text-blue-600 font-bold'>Customer</p>
                        <p className='text-left my-5 text-sm'>I was able to find the perfect car for my needs and budget on Quattro. The search function was easy to use and the listings were very informative. I would definitely recommend  to anyone looking to buy a car.</p>
                        <div className='rating'>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;
