import React from 'react';
import { Stage } from "@/widgets/types";
import styles from "./styles.module.scss";

interface StageSlideProps {
    stage: Stage;
    className: string;
}

export const StageSlide: React.FC<StageSlideProps> = ({ stage, className }) => (
    <div className={className}>
        <div className={styles.stageNumber}>{stage.id}</div>
        <div className={styles.text}>{stage.text}</div>
    </div>
);
