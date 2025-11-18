import React from "react";
import styles from './FeaturesList.module.css';

export default function FeaturesList() {
    return (
        <div className={styles.featuresContainer}>
            <h3 hidden>Features</h3>
            <ul className={styles.featuresList}>
                <li classList={styles.featuresListItem}>
                    <svg className={styles.featuresListIcon} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
                        <circle cx="40" cy="40" r="29" fill="black"/>
                        <g clip-path="url(#clip0_2881_348)">
                        <path d="M33.3334 44.9998C33.3334 43.1589 31.841 41.6665 30 41.6665C28.1591 41.6665 26.6667 43.1589 26.6667 44.9998V48.3332C26.6667 50.1741 28.1591 51.6665 30 51.6665C31.841 51.6665 33.3334 50.1741 33.3334 48.3332V44.9998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M53.3334 44.9998C53.3334 43.1589 51.841 41.6665 50 41.6665C48.1591 41.6665 46.6667 43.1589 46.6667 44.9998V48.3332C46.6667 50.1741 48.1591 51.6665 50 51.6665C51.841 51.6665 53.3334 50.1741 53.3334 48.3332V44.9998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.6667 44.9998V39.9998C26.6667 36.4636 28.0714 33.0722 30.5719 30.5717C33.0724 28.0713 36.4638 26.6665 40 26.6665C43.5362 26.6665 46.9276 28.0713 49.4281 30.5717C51.9286 33.0722 53.3334 36.4636 53.3334 39.9998V44.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M50 51.6665C50 52.9926 48.9464 54.2644 47.0711 55.202C45.1957 56.1397 42.6522 56.6665 40 56.6665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2881_348">
                        <rect width="40" height="40" fill="white" transform="translate(20 20)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p className={styles.featuresItemTitle}>FREE AND FAST DELIVERY</p>
                    <p className={styles.featuresItemDescription}>Free delivery for all orders over $140</p>
                </li>
                <li classList={styles.featuresListItem}>
                    <svg className={styles.featuresListIcon} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
                        <circle cx="40" cy="40" r="29" fill="black"/>
                        <g clip-path="url(#clip0_2881_331)">
                        <path d="M31.6667 51.6667C33.5076 51.6667 35 50.1743 35 48.3333C35 46.4924 33.5076 45 31.6667 45C29.8257 45 28.3333 46.4924 28.3333 48.3333C28.3333 50.1743 29.8257 51.6667 31.6667 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M48.3333 51.6667C50.1743 51.6667 51.6667 50.1743 51.6667 48.3333C51.6667 46.4924 50.1743 45 48.3333 45C46.4924 45 45 46.4924 45 48.3333C45 50.1743 46.4924 51.6667 48.3333 51.6667Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.3333 48.3335H27C25.8954 48.3335 25 47.4381 25 46.3335V41.6668M23.3333 28.3335H39.6666C40.7712 28.3335 41.6666 29.2289 41.6666 30.3335V48.3335M35 48.3335H45M51.6667 48.3335H53C54.1046 48.3335 55 47.4381 55 46.3335V38.3335M55 38.3335H41.6666M55 38.3335L50.5826 30.9712C50.2211 30.3688 49.5701 30.0002 48.8676 30.0002H41.6666" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28 48H26.6667C25.5621 48 24.6667 47.1046 24.6667 46V41.3333M23 28H39.3333C40.4379 28 41.3333 28.8954 41.3333 30V48M35 48H44.6667M52 48H52.6667C53.7712 48 54.6667 47.1046 54.6667 46V38M54.6667 38H41.3333M54.6667 38L50.2493 30.6377C49.8878 30.0353 49.2368 29.6667 48.5343 29.6667H41.3333" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25 31.8184H31.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.8182 35.4546H28.4848" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25 39.0908H31.6667" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2881_331">
                        <rect width="40" height="40" fill="white" transform="translate(20 20)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p className={styles.featuresItemTitle}>24/7 CUSTOMER SERVICE</p>
                    <p className={styles.featuresItemDescription}>Friendly 24/7 customer support</p>
                </li>
                <li classList={styles.featuresListItem}>
                    <svg className={styles.featuresListIcon} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
                        <circle cx="40" cy="40" r="29" fill="black"/>
                        <path d="M39.983 22.5874C41.0046 22.5874 42.004 22.7366 42.7574 23.0181L51.0748 26.1353H51.0758C53.2953 26.962 55.0504 29.5076 55.0504 31.8667V44.2495C55.0504 45.3367 54.7062 46.5895 54.1237 47.7485C53.5777 48.8348 52.8403 49.8024 52.0309 50.4556L51.8678 50.5825L44.7008 55.9321L44.6949 55.937C43.4122 56.9261 41.7236 57.4331 39.9996 57.4331C38.2769 57.433 36.5846 56.9263 35.2643 55.9478H35.2633L28.0992 50.5991C27.2265 49.9484 26.4252 48.9208 25.8424 47.7593C25.2596 46.5976 24.9166 45.3447 24.9166 44.2661V31.8667C24.9166 29.5075 26.6716 26.9619 28.8912 26.1353H28.8922L37.2086 23.0181C37.962 22.7365 38.9614 22.5874 39.983 22.5874ZM40.0006 24.0854C39.202 24.0876 38.3751 24.1949 37.7418 24.4312L37.7408 24.4321L29.4244 27.5483H29.4235C28.596 27.8599 27.8547 28.5225 27.3239 29.2905C26.7928 30.0589 26.4332 30.9898 26.4332 31.8833V44.2661C26.4332 45.1606 26.7438 46.1893 27.2008 47.1011C27.6577 48.0126 28.293 48.8726 29.0006 49.4009L36.1676 54.7505C37.2294 55.5444 38.628 55.9252 40.0016 55.9253C41.3755 55.9253 42.7778 55.5442 43.8473 54.7515L43.8492 54.7505L51.0153 49.4009L51.0162 49.3999C51.731 48.8638 52.3666 48.0049 52.8219 47.0942C53.2772 46.1836 53.5836 45.1596 53.5836 44.2661V31.8667C53.5836 30.9807 53.2232 30.0539 52.693 29.2866C52.1625 28.5191 51.422 27.8539 50.5973 27.5337L50.5924 27.5317L42.275 24.4146L42.2662 24.4116C41.6281 24.1864 40.8 24.0833 40.0006 24.0854Z" fill="#FAFAFA" stroke="#FAFAFA"/>
                        <path d="M44.4039 34.77C44.692 34.4822 45.1755 34.482 45.4635 34.77C45.7514 35.058 45.7513 35.5415 45.4635 35.8296L38.2965 42.9966C38.1452 43.1478 37.9574 43.2163 37.7662 43.2163C37.5752 43.2162 37.3881 43.1477 37.2369 42.9966L34.5533 40.313C34.2655 40.0249 34.2654 39.5414 34.5533 39.2534C34.8414 38.9654 35.3248 38.9655 35.6129 39.2534L37.7662 41.4067L38.1207 41.0532L44.4039 34.77Z" fill="#FAFAFA" stroke="#FAFAFA"/>
                    </svg>
                    <p className={styles.featuresItemTitle}>MONEY BACK GUARANTEE</p>
                    <p className={styles.featuresItemDescription}>We reurn money within 30 days</p>
                </li>
            </ul>
        </div>
    )
}
