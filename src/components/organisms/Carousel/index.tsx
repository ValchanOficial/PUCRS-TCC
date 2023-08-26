import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { Description } from '@/components/atoms';
import Image from 'next/image';
import styles from './carousel.module.css';

type Item = {
    id: number;
    image: string;
    title: string;
}

interface CarouselProps {
    list: Item[];
    className?: string;
    options?: {
        reverseDirection: boolean; // https://splidejs.com/v3/guides/options/#direction
    }
}

export default function Carousel({ list = [], className, options }: CarouselProps) {
    return (
        <div className={`${styles.container} ${className}`} >
            <Splide
                options={{
                    type: 'loop',
                    gap: '1rem',
                    autoplay: true,
                    pauseOnHover: false,
                    resetProgress: false,
                    perPage: list.length > 6 ? 6 : list.length,
                    arrows: false,
                    pagination: false,
                    speed: 1000,
                    direction: options?.reverseDirection ? 'rtl' : 'ltr',
                    easing: 'ease',
                }}
            >
                {list && list.map(({ id, title, image }: Item) => (
                    <SplideSlide key={id} className={styles.swiper}>
                        <Image alt={title} src={image} height={150} width={150} />
                        <Description theme="light">{title}</Description>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
} 