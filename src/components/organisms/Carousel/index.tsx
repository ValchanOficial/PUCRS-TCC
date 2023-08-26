import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AutoplayOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Description } from '@/components/atoms';
import Image from 'next/image';
import styles from './carousel.module.css';

type Item = {
    id: number;
    image: string;
    title: string;
}

interface CarouselProps {
    autoplay?: AutoplayOptions;
    list: Item[];
    className?: string;
}

export default function Carousel({ list = [], className, autoplay }: CarouselProps) {
    return (
        <div className={`${styles.container} ${className}`} >
            <Swiper
                modules={[A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={list.length > 6 ? 6 : list.length}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    reverseDirection: true,
                    ...autoplay,
                }}
                onSwiper={(swiper) => swiper.autoplay.start()}
            >
                {list && list.map(({ id, title, image }: Item) => (
                    <SwiperSlide key={id} className={styles.swiper}>
                        <Image alt={title} src={image} height={150} width={150} />
                        <Description theme="light">{title}</Description>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
} 