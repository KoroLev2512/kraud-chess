import React from 'react';
import styles from "./styles.module.scss"

export const Footer = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.wrapper}>
                Все персонажи, события и цитаты являются вымышленными и не принадлежат создателям сайта. С подробностями
                можно познакомиться в главе XXXIV романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев».
            </div>
        </div>
    );
};
