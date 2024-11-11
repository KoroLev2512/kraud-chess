import React from 'react';
import styles from "./styles.module.scss"
import {Session} from "@/shared/ui/Session";
import {Lecture} from "@/shared/ui/Lecture";
import Link from "next/link";
import {Line} from "@/shared/ui/Line";

export const Info = () => {
    return (
        <div className={styles.wrapper}>
            <Lecture/>
            <Session/>
            {/*<Line/>*/}
        </div>
    );
};