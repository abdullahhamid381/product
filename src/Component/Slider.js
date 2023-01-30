import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SlidersImg } from "../Data/Data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
    const [SliderImg, setSliderImg] = useState(SlidersImg);
    return (
        <Fragment>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    SliderImg.map((SlidersImgmap) => {
                        return (
                            <SwiperSlide><img src={SlidersImgmap.img} alt="" /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Fragment>
    );
}
