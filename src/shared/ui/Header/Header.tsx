import React from 'react';
import Logo from '@/shared/lib/images/Logo';
import styles from './styles.module.scss';

export const  Header = () => {
    return (
        <>
            <div className={styles.header}>
                <Logo/>
            </div>
        </>
    );
};
