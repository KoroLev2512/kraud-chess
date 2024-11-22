import styles from './styles.module.scss';
import {Header} from "@/shared/ui/Header";
import {Content} from "@/widgets/Content";
import {Line} from "@/shared/ui/Line";

export const Main = () => {
    return (
        <>
            <div className={styles.bg}>
                <img
                    src='/images/headerBG.png'
                    alt="Background Image"
                    className={styles.mobile}
                />
                <div className={styles.wrapper}>
                    <img
                        src='/images/headerBG.png'
                        alt="Background Image"
                        className={styles.image}
                    />
                    <Header/>
                    <div className={styles.content}>
                        <Content/>
                    </div>
                </div>
            </div>
            <Line/>
        </>
    );
};