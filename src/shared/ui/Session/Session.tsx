import React from 'react';
import styles from "./styles.module.scss"

export const Session = () => {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.image}
                src="/images/session.svg"
                alt="session"
            />
            <div className={styles.text}>

            </div>
        </div>
    );
};
