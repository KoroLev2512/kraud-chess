import React from 'react';
import styles from "./styles.module.scss"

export const Session = () => {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.image}
                src="/images/session.png"
                alt="session"
            />
            <div>
                <div className={styles.text}>
                    и Сеанс
                    <span className={styles.red}> одновременной игры в шахматы на 160 досках </span>
                    гроссмейстера О.Бендера
                </div>
                <div className={styles.table}>
                    <table>
                        <tbody>
                        <tr>
                            <td className={styles.label}>Место проведения:</td>
                            <td><span className={styles.bold}>Клуб «Картонажник»</span></td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Дата и время мероприятия:</td>
                            <td><span className={styles.bold}>22 июня 1927 г. в 18:00</span></td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Стоимость входных билетов:</td>
                            <td><span className={styles.bold}>20 коп.</span></td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Плата за игру:</td>
                            <td><span className={styles.bold}>50 коп.</span></td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Взнос на телеграммы:</td>
                            <td><span className={styles.oldPrice}>100 руб.</span> <span className={styles.bold}>21 руб. 16 коп.</span></td>
                        </tr>
                        </tbody>
                    </table>
                    <p className={styles.contact}>По всем вопросам обращайтесь в администрацию к К. Михельсону</p>
                </div>
            </div>
        </div>
    );
};