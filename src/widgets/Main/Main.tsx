import styles from './styles.module.scss';
import {Header} from "@/shared/ui/Header";
import {Content} from "@/widgets/Content";
import {Line} from "@/shared/ui/Line";

export const Main = () => {
    return (
        <>
            <div className={styles.bg}>
                <Header/>
                <Content/>
            </div>
            <Line/>

        </>

    );
};