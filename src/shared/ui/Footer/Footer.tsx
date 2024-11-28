import React from 'react';
import styles from "./styles.module.scss"

export const Footer = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.wrapper}>
                Все персонажи, события и цитаты являются вымышленными и не принадлежат создателям сайта. С подробностями
                можно познакомиться в главе XXXIV романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев».
                <div>
                    Designed by <a href="https://crowd.yandex.ru/">yandex</a>
                </div>
                <div>
                    Prod by <a href="https://github.com/KoroLev2512">KoroLev2512</a>
                </div>
            </div>
        </div>
    );
};
