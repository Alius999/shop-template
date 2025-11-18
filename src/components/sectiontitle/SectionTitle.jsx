import React from 'react';
import styles from './SectionTitle.module.css';

export default function SectionTitle({title, style}) {
    return (
        <p className={styles.exploreProductsTitle} style={style}>{title}</p>
    )
}