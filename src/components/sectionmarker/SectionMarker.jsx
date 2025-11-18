import React from 'react';
import styles from './SectionMarker.module.css';

export default function SectionMarker({title, style}) {
    return (
        <div className={styles.sectionMarker} style={style}>
            <p className={styles.sectionMarkerTitle}>{title}</p>
        </div>
    );
}