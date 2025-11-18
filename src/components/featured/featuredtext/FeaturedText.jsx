import React from 'react';
import styles from './FeaturedText.module.css';

export default function FeaturedText({ title, description, link, linkText, style }) {
    return (
        <span className={styles.featuredText}>
            <p className={styles.featuredTextTitle}>{title}</p>
            <p className={styles.featuredTextDescription} style={style}>{description}</p>
            <a href={link} className={styles.featuredTextLink}>{linkText}</a>
        </span>
    )
}

