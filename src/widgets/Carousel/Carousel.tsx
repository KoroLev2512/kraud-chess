import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselSlide } from '@/widgets/types';
import ArrowNextIcon from "@/shared/lib/icons/ArrowNextIcon";
import ArrowPrevIcon from "@/shared/lib/icons/ArrowPrevIcon";
import styles from './styles.module.scss';

interface CarouselProps {
    slides: CarouselSlide[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const handleSlideChange = (swiper: SwiperType) => {
        const realIndex = swiper.realIndex;
        setActiveSlideIndex(realIndex);
    };

    const handleNextSlide = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };

    const handlePreviousSlide = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };

    const isPrevDisabled = activeSlideIndex === 0;
    const isNextDisabled = activeSlideIndex === slides.length - slidesPerView;

    useEffect(() => {
        if (swiperInstance) {
            setSlidesPerView(swiperInstance.params.slidesPerView as number);
        }
    }, [swiperInstance]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Участники турнира
                <div className={styles.controls}>
                    <div
                        className={styles.arrowPrev}
                        onClick={!isPrevDisabled ? handlePreviousSlide : undefined}
                    >
                        <ArrowPrevIcon
                            fill={isPrevDisabled ? "#D6D6D6" : "#313131"}
                        />
                    </div>
                    <span className={styles.fraction}>
                        {activeSlideIndex + 1}/{slides.length - (slidesPerView >= 3 ? 2 : slidesPerView >= 2 ? 1 : 0)}
                    </span>
                    <div
                        className={styles.arrowNext}
                        onClick={!isNextDisabled ? handleNextSlide : undefined}
                    >
                        <ArrowNextIcon
                            fill={isNextDisabled ? "#D6D6D6" : "#313131"}
                        />
                    </div>
                </div>
            </div>
            <Swiper
                navigation={{
                    nextEl: `.${styles.arrowNext}`,
                    prevEl: `.${styles.arrowPrev}`,
                }}
                loop={false}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    520: { slidesPerView: 1 },
                    720: { slidesPerView: 2 },
                    960: { slidesPerView: 3 },
                }}
                className={styles.carouselContainer}
                onSlideChange={handleSlideChange}
                onSwiper={setSwiperInstance}
                speed={500}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className={styles.content}>
                        <img
                            className={styles.image}
                            src={slide.image}
                            alt={`Slide ${index}`}
                        />
                        <div className={styles.name}>
                            {slide.name}
                        </div>
                        <div className={styles.rank}>
                            {slide.rank}
                        </div>
                        <button className={styles.button}>
                            Подробнее
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.mobileControls}>
                <div
                    className={styles.arrowPrev}
                    onClick={!isPrevDisabled ? handlePreviousSlide : undefined}
                >
                    <ArrowPrevIcon
                        fill={isPrevDisabled ? "#D6D6D6" : "#313131"}
                    />
                </div>
                <span className={styles.fraction}>
                    {activeSlideIndex + 1}/{slides.length - (slidesPerView >= 3 ? 2 : slidesPerView >= 2 ? 1 : 0)}
                </span>
                <div
                    className={styles.arrowNext}
                    onClick={!isNextDisabled ? handleNextSlide : undefined}
                >
                    <ArrowNextIcon
                        fill={isNextDisabled ? "#D6D6D6" : "#313131"}
                    />
                </div>
            </div>
        </div>
    );
};