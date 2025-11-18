import React from 'react';
import styles from './FirstScreen.module.css';
import Sidebar from '../sidebar/Sidebar';
import Slider from '../slider/Slider';

export default function FirstScreen() {
    return (
        <div className={styles.firstScreen}>
            <Sidebar />
            <Slider />
        </div>
    );
}

