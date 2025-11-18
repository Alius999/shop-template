import React from 'react';
import styles from './SaleBanner.module.css';

export default function SaleBanner() {
    return(
        <section className={styles.saleBanner}>
            <h2 hidden>Sale Banner</h2>
            <div className={styles.saleBannerContainer}>
                <p className={styles.saleBannerTitle}>Categories</p>
                <p className={styles.saleBannerHeader}>Enhance Your Music Experience</p>
                <div className={styles.saleBannerCounter}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <button className={styles.saleBannerButton}>Buy Now!</button>
            </div>
            <div className={styles.saleBannerImageWrapper}>
                <img src="assets/images/products/jbl-speaker.png" alt="JBL-Speaker"/>
            </div>
        </section>
    )
}