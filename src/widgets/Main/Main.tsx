import styles from './styles.module.scss';
import {Header} from "@/shared/ui/Header";
import {Content} from "@/widgets/Content";
import {Line} from "@/shared/ui/Line";

export const Main = () => {
    return (
        <>
            <div className={styles.bg}>
                <div className={styles.wrapper}>
                    <Header/>
                    <div className={styles.content}>
                        <Content/>
                        {/*<img*/}
                        {/*    src='/images/bg-image.svg'*/}
                        {/*    alt="Background Image"*/}
                        {/*    className={styles.image}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
            <Line/>
        </>
    );
};