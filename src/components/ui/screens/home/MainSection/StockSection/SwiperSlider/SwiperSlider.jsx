import { Pagination, A11y, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from "./SwiperSlider.module.css"

function SwiperSlider() {
    return (
        <Swiper
            className={styles.swiper}
            modules={[Pagination, A11y, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            allowTouchMove={false}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: true,
            // }}
        >
            <SwiperSlide className={styles.swiperSlide}>
                <img src="/banner1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img src="/banner2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img src="/banner3.png" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperSlider
