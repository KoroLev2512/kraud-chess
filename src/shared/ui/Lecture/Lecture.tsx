import React from 'react';
import styles from "./styles.module.scss"

export const Lecture = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div>
                    Чтобы поддержать Международный васюкинский турнир
                </div>
                <div>
                    посетите лекцию на тему:
                </div>
                <div className={styles.red}>
                    «Плодотворная дебютная идея»
                </div>
            </div>
            <img
                className={styles.image}
                src="/images/lecture.svg"
                alt="lecture"
            />
        </div>
    );
};
