import React from 'react';
import styles from "./styles.module.scss"

export const Line = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.marquee}>
                <div>
                    Шахматы двигают вперёд не только культуру, но и экономику!
                </div>
                <div>
                    •
                </div>
                <div>
                    Лед тронулся, господа присяжные заседатели!
                </div>
                <div>
                    •
                </div>
                <div>
                    Дело помощи утопающим — дело рук самих утопающих!
                </div>
            </div>
        </div>
    );
};
