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
                <span className={styles.red}>
                    «Плодотворная дебютная идея»
                </span>
            </div>
            <img
                className={styles.image}
                src="/images/lecture.svg"
                alt="lecture"
            />
        </div>
    );
};
