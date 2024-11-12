import React, {useState} from 'react';
import styles from "./styles.module.scss";
import {Swiper as SwiperType} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import ArrowPrevIcon from "@/shared/lib/icons/ArrowPrevIcon";
import ArrowNextIcon from "@/shared/lib/icons/ArrowNextIcon";

export const Stages = () => {
    const stages = [
        {id: 1, text: "Строительство железнодорожной магистрали Москва-Васюки", className: styles.div1},
        {
            id: 2,
            text: "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
            className: styles.div2
        },
        {
            id: 3,
            text: "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
            className: styles.div3
        },
        {id: 4, text: "Строительство дворца для турнира", className: styles.div4},
        {id: 5, text: "Размещение гаражей для гостевого автотранспорта", className: styles.div5},
        {
            id: 6,
            text: "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
            className: styles.div6
        },
        {
            id: 7,
            text: "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анджелес и Мельбурн",
            className: styles.div7,
            image: "/images/plane.svg"
        }
    ];

    const mobileStages = [
        [
            {id: 1, text: "Строительство железнодорожной магистрали Москва-Васюки", className: styles.div1},
            {
                id: 2,
                text: "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
                className: styles.div2
            }
        ],
        [
            {
                id: 3,
                text: "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
                className: styles.div3
            },
        ],
        [
            {id: 4, text: "Строительство дворца для турнира", className: styles.div4},
            {id: 5, text: "Размещение гаражей для гостевого автотранспорта", className: styles.div5},
        ],
        [
            {
                id: 6,
                text: "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
                className: styles.div6
            }
        ],
        [
            {
                id: 7,
                text: "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анджелес и Мельбурн",
                className: styles.div7
            }
        ]
    ]

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
    const isNextDisabled = activeSlideIndex === mobileStages.length - 1;


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
                            {/*{stage.image &&*/}
                            {/*    <img */}
                            {/*        className={styles.image}*/}
                            {/*        src={stage.image}*/}
                            {/*        alt={`Stage ${stage.id}`*/}
                            {/*    }*/}
                            {/*/>}*/}
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
                autoplay={{delay: 5000, disableOnInteraction: false}}
                pagination={{clickable: true, el: `.${styles.pagination}`}}
                slidesPerView={1}
                className={styles.carouselContainer}
                onSlideChange={handleSlideChange}
                onSwiper={setSwiperInstance}
                speed={500}
            >
                {mobileStages.map((stagePair, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <div className={styles.stageSlideFirst}>
                            <div className={styles.stageFirstNumber}>{stagePair[0].id}</div>
                            <div className={styles.text}>{stagePair[0].text}</div>
                        </div>
                        {stagePair[1] && (
                            <div className={styles.stageSlideSecond}>
                                <div className={styles.stageSecondNumber}>{stagePair[1].id}</div>
                                <div className={styles.text}>{stagePair[1].text}</div>
                            </div>
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
                        <span
                            key={index}
                            className={`${styles.dot} ${index === activeSlideIndex ? styles.active : ''}`}
                        ></span>
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
