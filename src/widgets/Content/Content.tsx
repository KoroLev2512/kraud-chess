import React from 'react';
import styles from './styles.module.scss'

export const Content = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles.left}>
                    ПРЕВРАТИТЕ <br/> УЕЗДНЫЙ ГОРОД
                </div>
                <div className={styles.center}>
                    В СТОЛИЦУ <br/> ЗЕМНОГО ШАРА
                </div>
            </div>
            <div className={styles.description}>
                Оплатите взнос на телеграммы для организации <br/> Международного васюкинского турнира по шахматам
            </div>
            <div className={styles.buttons}>
                <button className={styles.support}>
                    Поддержать шахматную мысль
                </button>
                <button className={styles.more}>
                    Подробнее о турнире
                </button>
            </div>
        </div>

    );
};
