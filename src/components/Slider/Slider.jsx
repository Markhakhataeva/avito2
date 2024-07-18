import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const Slider = ({item}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="slider_cont">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#a5a0a0',
                    '--swiper-pagination-color': '#a5a0a0',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                direction="horizontal"
                initialSlide={0}
                width={800}
                effect={"slide"}
                loop={false}
            >
                <SwiperSlide>
                    <img src={item.largeImage}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={item.image_1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={item.image_2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={item.image_3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={item.image_4}/>
                </SwiperSlide>
        </Swiper>
    <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        setWrapperSize={true}
    >
        <SwiperSlide>
            <img src={item.largeImage} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={item.image_1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={item.image_2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={item.image_3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={item.image_4} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
