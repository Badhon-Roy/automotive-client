import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { BiSolidCar } from 'react-icons/bi';
import './testimonial.css';

const Testimonial = () => {
    return (
        <div className='mt-32 mb-8 md:px-0 px-4'>
            <div data-aos="fade-right">
                    <p className='flex gap-2 items-center justify-center mx-auto text-xl text-blue-600'><BiSolidCar></BiSolidCar>Testimonials</p>
                <h2 className='text-center md:text-4xl text-2xl mb-8 font-bold'>What Our <span className='text-blue-600'>Client Says</span></h2>
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
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/04.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Parker Jimenez</h2>
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
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/05.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Heruli Naz</h2>
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
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/03.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Reid E Butt</h2>
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
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://live.themewild.com/motex/assets/img/testimonial/02.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Gordo Novak</h2>
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
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://www.rypeoffice.com/wp-content/uploads/2022/07/Greg-opt-400x400-1.jpg" alt="" />
                        <h2 className='text-xl font-bold'>Srek Naz</h2>
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
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://media.licdn.com/dms/image/D5603AQG5G-ep8tJWPg/profile-displayphoto-shrink_800_800/0/1678854750838?e=2147483647&v=beta&t=sdKX2-K5mtknwQYSgDTSC-CYPygf8Kou2IhYopKno4s" alt="" />
                        <h2 className='text-xl font-bold'>Saurabh Shrivastava</h2>
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
                        <img className='rounded-full w-36 h-36 mx-auto border-[5px] border-blue-500' src="https://media.licdn.com/dms/image/D4E03AQE8yRasnv-fCg/profile-displayphoto-shrink_400_400/0/1686153791037?e=1702512000&v=beta&t=70mCgc9OzFJLxQJhgJeOUozkwdRmzBGFM59vJDqbnsc" alt="" />
                        <h2 className='text-xl font-bold'>Lee Jelenic</h2>
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
