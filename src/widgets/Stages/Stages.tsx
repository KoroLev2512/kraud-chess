import React from 'react';
import styles from "./styles.module.scss";

export const Stages = () => {
    const stages = [
        { id: 1, text: "Строительство железнодорожной магистрали Москва-Васюки", className: styles.div1 },
        { id: 2, text: "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов", className: styles.div2 },
        { id: 3, text: "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет", className: styles.div3 },
        { id: 4, text: "Строительство дворца для турнира", className: styles.div4 },
        { id: 5, text: "Размещение гаражей для гостевого автотранспорта", className: styles.div5 },
        { id: 6, text: "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов", className: styles.div6 },
        { id: 7, text: "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анджелес и Мельбурн", className: styles.div7, image: "/images/plane.svg"}];

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
                                <img src={stage.image}
                                     alt={`Stage ${stage.id}`
                                }
                            />
                            }
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
};
