import React from 'react';
import styles from './MoreButton.module.css';

export default function MoreButton({label, style}) {
    return (
        <button className={styles.moreButton} style={style}>
            {label}
        </button>
    )
}