import React from 'react';
import styles from "./styles.module.scss"
import {Session} from "@/shared/ui/Session";
import {Lecture} from "@/shared/ui/Lecture";

export const Info = () => {
    return (
        <div className={styles.wrapper}>
            <Lecture/>
            <Session/>
        </div>
    );
};