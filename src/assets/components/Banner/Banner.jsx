import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Banner.css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
             <>
                <Swiper 
                
                    pagination={{ 
                        el: '.swiper-pagination',
                        clickable: true,
                    }} 
                    
                    loop={true} 
                    
                    modules={[Pagination]} className="mySwiper">


                    <SwiperSlide style={{ height:"400px", backgroundImage:"url('https://angfuzsoft.com/html/aytor/assets/img/hero/hero_2_bg_3.png')" }}>
                        <div className="container">
                            <h1>Slider - 01 </h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height:"400px", backgroundImage:"url('https://angfuzsoft.com/html/aytor/assets/img/hero/hero_2_bg_3.png')" }}>
                        <div className="container">
                            <h1>Slider - 01 </h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height:"400px", backgroundImage:"url('https://angfuzsoft.com/html/aytor/assets/img/hero/hero_2_bg_3.png')" }}>
                        <div className="container">
                            <h1>Slider - 01 </h1>
                        </div>
                    </SwiperSlide>

                    <div className="swiper-pagination container"></div>

                    
                </Swiper>

             </>
        </div>
    );
};

export default Banner;