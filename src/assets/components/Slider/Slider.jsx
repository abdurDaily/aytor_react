import React from 'react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './slider.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = () => {
    
    return (
        <>
            <div className="container test">
            <Swiper
    navigation={true}
    
            
                    breakpoints={{
                        '@0.00': {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        '@0.75': {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        '@1.00': {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        '@1.50': {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                      }}
                loop={true}
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper"    

                
            >
                <SwiperSlide>
                    <div className="card shadow my-5">
                       <div className="img">

                            <img className='img-fluid' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


                            <img className='img-fluid' src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                       </div>
                        <h4>Foods..</h4>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className="card shadow my-5">
                       <div className="img">

                            <img className='img-fluid' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


                            <img className='img-fluid' src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                       </div>
                        <h4>Foods..</h4>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className="card shadow my-5">
                       <div className="img">

                            <img className='img-fluid' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


                            <img className='img-fluid' src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                       </div>
                        <h4>Foods..</h4>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className="card shadow my-5">
                       <div className="img">

                            <img className='img-fluid' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


                            <img className='img-fluid' src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                       </div>
                        <h4>Foods..</h4>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className="card shadow my-5">
                       <div className="img">

                            <img className='img-fluid' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


                            <img className='img-fluid' src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                       </div>
                        <h4>Foods..</h4>
                    </div>
                </SwiperSlide>
               
            </Swiper>
            </div>
        </>
    );
};

export default Slider;