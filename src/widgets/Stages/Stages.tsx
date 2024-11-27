import React, { useState, memo } from 'react';
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowPrevIcon from "@/shared/lib/icons/ArrowPrevIcon";
import ArrowNextIcon from "@/shared/lib/icons/ArrowNextIcon";
import { CarouselStage, CarouselMobileStage } from "@/widgets/types";
import { StageSlide } from './StageSlide';
import styles from "./styles.module.scss";

interface StagesProps {
    stages: CarouselStage[];
    mobileStages: CarouselMobileStage[];
}

interface DotProps {
    index: number;
    activeSlideIndex: number;
    styles: { readonly [key: string]: string };
}

const Dot: React.FC<DotProps> = memo(({ index, activeSlideIndex, styles }) => (
    <span
        className={`${styles.dot} ${index === activeSlideIndex ? styles.active : ''}`}
    ></span>
));

export const Stages: React.FC<StagesProps> = ({ stages, mobileStages }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

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
    const isNextDisabled = mobileStages.length === 0 || activeSlideIndex === mobileStages.length - 1;

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Этапы преображения Васюков
                <span className={styles.description}>
                    Будущие источники обогащения васюкинцев
                </span>
            </div>
            <section className={styles.transformationStages}>
                <div className={styles.stagesGrid}>
                    {stages.map((stage) => (
                        <div className={`${styles.stageCard} ${stage.className}`} key={stage.id}>
                            <div className={styles.stageNumber}>{stage.id}</div>
                            <p>{stage.text}</p>
                            {stage.image &&
                                <img
                                    className={styles.image}
                                    src={stage.image}
                                    alt={`Stage ${stage.id}`}
                                />
                            }
                        </div>
                    ))}
                </div>
            </section>
            <img
                src="/images/plane.svg"
                alt="plane"
                className={styles.plane}
            />
            <Swiper
                navigation={{
                    nextEl: `.${styles.arrowNext}`,
                    prevEl: `.${styles.arrowPrev}`,
                }}
                loop={false}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: `.${styles.pagination}` }}
                slidesPerView={1}
                className={styles.carouselContainer}
                onSlideChange={handleSlideChange}
                onSwiper={setSwiperInstance}
                speed={500}
            >
                {mobileStages.map((stageGroup, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        {stageGroup.stages[0] && (
                            <StageSlide stage={stageGroup.stages[0]} className={styles.stageSlideFirst} />
                        )}
                        {stageGroup.stages[1] && (
                            <StageSlide stage={stageGroup.stages[1]} className={styles.stageSlideSecond} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.controls}>
                <div
                    className={styles.arrowPrev}
                    onClick={!isPrevDisabled ? handlePreviousSlide : undefined}
                >
                    <ArrowPrevIcon
                        fill={isPrevDisabled ? "#D6D6D6" : "#313131"}
                    />
                </div>
                <div className={styles.pagination}>
                    {mobileStages.map((_, index) => (
                        <Dot
                            key={index}
                            index={index}
                            activeSlideIndex={activeSlideIndex}
                            styles={styles}
                        />
                    ))}
                </div>
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