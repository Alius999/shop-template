import React from 'react';
import styles from './About.module.css';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import FeaturesList from '../../components/featured/featureslist/FeaturesList';

export default function About() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const [snaps, setSnaps] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (i) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(i);
      };

    useEffect(() => {
        if(!emblaApi) return;
        setSnaps(emblaApi.scrollSnapList());
        const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
        onSelect();
        emblaApi.on('select', onSelect);
    }, [emblaApi]);

    /* Social icon link */

    function SocialList() {
        return(
            <ul className={styles.aboutSocialsWrapper}>
                <li>
                    <a href="#" className={styles.aboutSocialsLink}>
                        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1211 0.443359C12.9979 0.0925405 13.9592 0.00852311 14.8838 0.201172C15.8082 0.393885 16.6557 0.854624 17.3193 1.52637L17.3486 1.55664H17.3906C17.7296 1.55426 18.0806 1.59738 18.498 1.53809C18.882 1.48352 19.3278 1.34203 19.915 1.00977C19.6091 2.49447 19.4324 3.16729 18.7646 4.08301L18.7451 4.10938V4.14258C18.7451 7.9414 17.5781 10.7564 15.8262 12.7393C14.0729 14.7234 11.7275 15.8816 9.3623 16.3535C7.7452 16.6761 5.754 16.5731 3.99609 16.2109C3.11794 16.03 2.30096 15.7842 1.62012 15.4971C1.03699 15.2511 0.560061 14.9759 0.229492 14.6885C0.6606 14.6463 1.41195 14.553 2.24414 14.3594C3.24389 14.1267 4.37194 13.749 5.20312 13.1406L5.31934 13.0557L5.19922 12.9766C4.50766 12.5207 2.81165 11.4984 1.73145 9.5166C0.667008 7.56375 0.19288 4.66296 1.91406 0.425781C3.57929 2.34325 5.27273 3.66041 6.99512 4.36719C7.57627 4.60556 7.94226 4.72333 8.23145 4.79102C8.51953 4.85841 8.73223 4.8754 8.99219 4.91113L9.28711 4.95215L9.10742 4.77148C9.13232 3.84188 9.4255 2.93867 9.9541 2.17285C10.4906 1.3958 11.2444 0.794138 12.1211 0.443359ZM13.9053 1.90137C13.119 1.90124 12.3638 2.20994 11.8027 2.76074C11.3119 3.24267 11.0038 3.87627 10.9248 4.55371L10.9053 4.84668L10.877 6.4209C10.8756 6.49137 10.8592 6.56125 10.8291 6.625C10.799 6.6887 10.7556 6.74517 10.7021 6.79102C10.6487 6.83684 10.5861 6.87164 10.5186 6.8916C10.4511 6.91147 10.3802 6.91658 10.3105 6.90723L8.74902 6.69531C6.71753 6.41828 4.7663 5.48248 2.88965 3.91895L2.75781 3.80859L2.72754 3.97754C2.42573 5.64812 2.56793 7.0709 3.14746 8.30176C3.72674 9.53198 4.73875 10.5607 6.15625 11.4521L7.90234 12.5498C7.97145 12.5932 8.02959 12.6529 8.07031 12.7236C8.11103 12.7944 8.1339 12.8744 8.13672 12.9561C8.13951 13.0377 8.12173 13.1189 8.08594 13.1924C8.05014 13.2658 7.99667 13.3299 7.93066 13.3779L6.33887 14.541L6.11523 14.7041L6.3916 14.7207C7.34472 14.7801 8.25319 14.738 9.00977 14.5879C11.3887 14.1129 13.375 12.9789 14.7656 11.2207C16.1559 9.46269 16.9453 7.08826 16.9453 4.14258C16.9453 3.99705 16.8715 3.78499 16.7441 3.55762C16.6144 3.32598 16.4211 3.06491 16.167 2.82031C15.6584 2.33085 14.8999 1.90145 13.9053 1.90137Z" fill="black" stroke="white" stroke-width="0.2"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.aboutSocialsLink}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 0.75H4.75C3.68913 0.75 2.67172 1.17143 1.92157 1.92157C1.17143 2.67172 0.75 3.68913 0.75 4.75V14.75C0.75 15.8109 1.17143 16.8283 1.92157 17.5784C2.67172 18.3286 3.68913 18.75 4.75 18.75H14.75C15.8109 18.75 16.8283 18.3286 17.5784 17.5784C18.3286 16.8283 18.75 15.8109 18.75 14.75V4.75C18.75 3.68913 18.3286 2.67172 17.5784 1.92157C16.8283 1.17143 15.8109 0.75 14.75 0.75Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M9.75 13.75C10.8109 13.75 11.8283 13.3286 12.5784 12.5784C13.3286 11.8283 13.75 10.8109 13.75 9.75C13.75 8.68913 13.3286 7.67172 12.5784 6.92157C11.8283 6.17143 10.8109 5.75 9.75 5.75C8.68913 5.75 7.67172 6.17143 6.92157 6.92157C6.17143 7.67172 5.75 8.68913 5.75 9.75C5.75 10.8109 6.17143 11.8283 6.92157 12.5784C7.67172 13.3286 8.68913 13.75 9.75 13.75V13.75Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M15.25 5.25C15.5152 5.25 15.7696 5.14464 15.9571 4.95711C16.1446 4.76957 16.25 4.51522 16.25 4.25C16.25 3.98478 16.1446 3.73043 15.9571 3.54289C15.7696 3.35536 15.5152 3.25 15.25 3.25C14.9848 3.25 14.7304 3.35536 14.5429 3.54289C14.3554 3.73043 14.25 3.98478 14.25 4.25C14.25 4.51522 14.3554 4.76957 14.5429 4.95711C14.7304 5.14464 14.9848 5.25 15.25 5.25Z" fill="black"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.aboutSocialsLink}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 6.05C9.417 5.113 10.611 4.5 12 4.5C13.4587 4.5 14.8576 5.07946 15.8891 6.11091C16.9205 7.14236 17.5 8.54131 17.5 10V17.5H15.5V10C15.5 9.07174 15.1313 8.1815 14.4749 7.52513C13.8185 6.86875 12.9283 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10V17.5H6.5V5H8.5V6.05ZM1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3ZM0.5 5H2.5V17.5H0.5V5Z" fill="black"/>
                        </svg>
                    </a>
                </li>
            </ul>
        )
    }

    return(
        <section className={styles.about}> 
            <h2 hidden>About company</h2>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <h3 className={styles.aboutTitle}>Our Story</h3>
                    <p className={styles.aboutDescription}>
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an 
                        active presense in Bangladesh. Supported by wide range of tailored marketing, data and 
                        service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons 
                        customers across the region. 
                        <br />
                        <br />

                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive 
                        offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <img src="/assets/images/about-girls.png" className={styles.aboutImage} alt="About" />
            </div>
            <div className={styles.aboutFeatures}>
                <ul className={styles.aboutFeaturesList}>
                    <li className={styles.aboutFeaturesItem}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
                            <circle cx="40" cy="40" r="29" fill="black"/>
                            <path d="M54.1416 25H47.4883L48.3216 33.3333C48.3216 33.3333 49.9883 35 52.4883 35C53.8006 35.0017 55.0684 34.524 56.0533 33.6567C56.1574 33.5594 56.235 33.4372 56.2787 33.3016C56.3224 33.166 56.3309 33.0214 56.3033 32.8817L55.1266 25.8333C55.0873 25.6005 54.9668 25.3891 54.7865 25.2366C54.6062 25.084 54.3778 25.0002 54.1416 25V25Z" stroke="white" stroke-width="2"/>
                            <path d="M47.4883 25L48.3216 33.3333C48.3216 33.3333 46.6549 35 44.1549 35C41.6549 35 39.9883 33.3333 39.9883 33.3333V25H47.4883Z" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M39.9886 25V33.3333C39.9886 33.3333 38.3219 35 35.8219 35C33.3219 35 31.6553 33.3333 31.6553 33.3333L32.4886 25H39.9886Z" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M32.4883 25H25.8366C25.5999 24.9999 25.3709 25.0838 25.1902 25.2367C25.0096 25.3896 24.889 25.6016 24.8499 25.835L23.6749 32.8833C23.6475 33.0231 23.656 33.1676 23.6997 33.3032C23.7435 33.4387 23.821 33.5609 23.9249 33.6583C24.4716 34.1417 25.6933 35.0017 27.4883 35.0017C29.9883 35.0017 31.6549 33.335 31.6549 33.335L32.4883 25.0017V25Z" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M25 35V51.6667C25 52.5507 25.3512 53.3986 25.9763 54.0237C26.6014 54.6488 27.4493 55 28.3333 55H51.6667C52.5507 55 53.3986 54.6488 54.0237 54.0237C54.6488 53.3986 55 52.5507 55 51.6667V35" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M44.7217 55V45C44.7217 44.1159 44.3705 43.2681 43.7454 42.6429C43.1202 42.0178 42.2724 41.6666 41.3883 41.6666H38.055C37.171 41.6666 36.3231 42.0178 35.698 42.6429C35.0729 43.2681 34.7217 44.1159 34.7217 45V55" stroke="#FAFAFA" stroke-width="2" stroke-miterlimit="16"/>
                        </svg>
                        <span className={styles.aboutFeaturesItemNumbers}>10,5k</span>
                        <p className={styles.aboutFeaturesItemText}>Sallers active our site</p>
                    </li>
                    <li className={styles.aboutFeaturesItem}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="white"/>
                            <circle cx="40" cy="40" r="29" fill="white"/>
                            <path d="M40.0003 57.2728C49.5397 57.2728 57.273 49.5395 57.273 40C57.273 30.4606 49.5397 22.7273 40.0003 22.7273C30.4608 22.7273 22.7275 30.4606 22.7275 40C22.7275 49.5395 30.4608 57.2728 40.0003 57.2728Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M45.0914 34.547C44.762 33.9758 44.2834 33.505 43.707 33.1848C43.1305 32.8646 42.4777 32.7072 41.8186 32.7294H38.1823C37.2178 32.7294 36.2929 33.1124 35.611 33.7941C34.929 34.4759 34.5459 35.4005 34.5459 36.3647C34.5459 37.3288 34.929 38.2535 35.611 38.9353C36.2929 39.617 37.2178 40 38.1823 40H41.8186C42.783 40 43.708 40.383 44.3899 41.0648C45.0719 41.7465 45.455 42.6712 45.455 43.6354C45.455 44.5995 45.0719 45.5242 44.3899 46.2059C43.708 46.8877 42.783 47.2707 41.8186 47.2707H38.1823C37.5232 47.2929 36.8704 47.1354 36.2939 46.8153C35.7174 46.4951 35.2389 46.0242 34.9095 45.453" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M40 28.1818V32.1212M40 47.8787V51.8181" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className={styles.aboutFeaturesItemNumbers}>33k</span>
                        <p className={styles.aboutFeaturesItemText}>Monthly Produduct Sale</p>
                    </li>
                    <li className={styles.aboutFeaturesItem}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
                            <circle cx="40" cy="40" r="29" fill="black"/>
                            <path d="M54.1416 25H47.4883L48.3216 33.3333C48.3216 33.3333 49.9883 35 52.4883 35C53.8006 35.0017 55.0684 34.524 56.0533 33.6567C56.1574 33.5594 56.235 33.4372 56.2787 33.3016C56.3224 33.166 56.3309 33.0214 56.3033 32.8817L55.1266 25.8333C55.0873 25.6005 54.9668 25.3891 54.7865 25.2366C54.6062 25.084 54.3778 25.0002 54.1416 25V25Z" stroke="white" stroke-width="2"/>
                            <path d="M47.4883 25L48.3216 33.3333C48.3216 33.3333 46.6549 35 44.1549 35C41.6549 35 39.9883 33.3333 39.9883 33.3333V25H47.4883Z" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M39.9886 25V33.3333C39.9886 33.3333 38.3219 35 35.8219 35C33.3219 35 31.6553 33.3333 31.6553 33.3333L32.4886 25H39.9886Z" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M32.4883 25H25.8366C25.5999 24.9999 25.3709 25.0838 25.1902 25.2367C25.0096 25.3896 24.889 25.6016 24.8499 25.835L23.6749 32.8833C23.6475 33.0231 23.656 33.1676 23.6997 33.3032C23.7435 33.4387 23.821 33.5609 23.9249 33.6583C24.4716 34.1417 25.6933 35.0017 27.4883 35.0017C29.9883 35.0017 31.6549 33.335 31.6549 33.335L32.4883 25.0017V25Z" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M25 35V51.6667C25 52.5507 25.3512 53.3986 25.9763 54.0237C26.6014 54.6488 27.4493 55 28.3333 55H51.6667C52.5507 55 53.3986 54.6488 54.0237 54.0237C54.6488 53.3986 55 52.5507 55 51.6667V35" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M44.7217 55V45C44.7217 44.1159 44.3705 43.2681 43.7454 42.6429C43.1202 42.0178 42.2724 41.6666 41.3883 41.6666H38.055C37.171 41.6666 36.3231 42.0178 35.698 42.6429C35.0729 43.2681 34.7217 44.1159 34.7217 45V55" stroke="#FAFAFA" stroke-width="2" stroke-miterlimit="16"/>
                        </svg>
                        <span className={styles.aboutFeaturesItemNumbers}>10,5k</span>
                        <p className={styles.aboutFeaturesItemText}>Sallers active our site</p>
                    </li>
                    <li className={styles.aboutFeaturesItem}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30"/>
                            <circle cx="40" cy="40" r="29" fill="black"/>
                            <path d="M54.1416 25H47.4883L48.3216 33.3333C48.3216 33.3333 49.9883 35 52.4883 35C53.8006 35.0017 55.0684 34.524 56.0533 33.6567C56.1574 33.5594 56.235 33.4372 56.2787 33.3016C56.3224 33.166 56.3309 33.0214 56.3033 32.8817L55.1266 25.8333C55.0873 25.6005 54.9668 25.3891 54.7865 25.2366C54.6062 25.084 54.3778 25.0002 54.1416 25V25Z" stroke="white" stroke-width="2"/>
                            <path d="M47.4883 25L48.3216 33.3333C48.3216 33.3333 46.6549 35 44.1549 35C41.6549 35 39.9883 33.3333 39.9883 33.3333V25H47.4883Z" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M39.9886 25V33.3333C39.9886 33.3333 38.3219 35 35.8219 35C33.3219 35 31.6553 33.3333 31.6553 33.3333L32.4886 25H39.9886Z" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M32.4883 25H25.8366C25.5999 24.9999 25.3709 25.0838 25.1902 25.2367C25.0096 25.3896 24.889 25.6016 24.8499 25.835L23.6749 32.8833C23.6475 33.0231 23.656 33.1676 23.6997 33.3032C23.7435 33.4387 23.821 33.5609 23.9249 33.6583C24.4716 34.1417 25.6933 35.0017 27.4883 35.0017C29.9883 35.0017 31.6549 33.335 31.6549 33.335L32.4883 25.0017V25Z" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M25 35V51.6667C25 52.5507 25.3512 53.3986 25.9763 54.0237C26.6014 54.6488 27.4493 55 28.3333 55H51.6667C52.5507 55 53.3986 54.6488 54.0237 54.0237C54.6488 53.3986 55 52.5507 55 51.6667V35" stroke="#FAFAFA" stroke-width="2"/>
                            <path d="M44.7217 55V45C44.7217 44.1159 44.3705 43.2681 43.7454 42.6429C43.1202 42.0178 42.2724 41.6666 41.3883 41.6666H38.055C37.171 41.6666 36.3231 42.0178 35.698 42.6429C35.0729 43.2681 34.7217 44.1159 34.7217 45V55" stroke="#FAFAFA" stroke-width="2" stroke-miterlimit="16"/>
                        </svg>
                        <span className={styles.aboutFeaturesItemNumbers}>10,5k</span>
                        <p className={styles.aboutFeaturesItemText}>Sallers active our site</p>
                    </li>
                </ul>
            </div>
            <div className={styles.aboutPersonsContainer} ref={emblaRef}>
                <ul className={styles.aboutPersonsList}>
                    <li className={styles.aboutPersonsItem}>
                        <span className={styles.aboutPersonsImgWrapper}>
                            <img src="/assets/images/about-person1.png" className={styles.aboutPersonsImg} alt="About" />
                        </span>
                        <p className={styles.aboutPersonsItemName}>John Doe</p>
                        <span className={styles.aboutPersonsDescription}>Founder & Chairman</span>
                        <SocialList />
                    </li>
                    <li className={styles.aboutPersonsItem}>
                        <span className={styles.aboutPersonsImgWrapper}>
                            <img src="/assets/images/about-person2.png" className={styles.aboutPersonsImg} alt="About" />
                        </span>
                        <p className={styles.aboutPersonsItemName}>Maria Doe</p>
                        <span className={styles.aboutPersonsDescription}>Managing Director</span>
                        <SocialList />
                    </li>
                    <li className={styles.aboutPersonsItem}>
                        <span className={styles.aboutPersonsImgWrapper}>
                            <img src="/assets/images/about-person3.png" className={styles.aboutPersonsImg} alt="About" />
                        </span>
                        <p className={styles.aboutPersonsItemName}>John Smith</p>
                        <span className={styles.aboutPersonsDescription}>Product Designer</span>
                        <SocialList />
                    </li>
                    <li className={styles.aboutPersonsItem}>
                        <span className={styles.aboutPersonsImgWrapper}>
                            <img src="/assets/images/about-person1.png" className={styles.aboutPersonsImg} alt="About" />
                        </span>
                        <p className={styles.aboutPersonsItemName}>Tom Cruise</p>
                        <span className={styles.aboutPersonsDescription}>Founder & Chairman</span>
                        <SocialList />
                    </li>
                    <li className={styles.aboutPersonsItem}>
                        <span className={styles.aboutPersonsImgWrapper}>
                            <img src="/assets/images/about-person2.png" className={styles.aboutPersonsImg} alt="About" />
                        </span>
                        <p className={styles.aboutPersonsItemName}>Emma Watson</p>
                        <span className={styles.aboutPersonsDescription}>Managing Director</span>
                        <SocialList />
                        {/* <SocialList /> */}
                    </li>
                    <li className={styles.aboutPersonsItem}>
                        <span className={styles.aboutPersonsImgWrapper}>
                            <img src="/assets/images/about-person3.png" className={styles.aboutPersonsImg} alt="About" />
                        </span>
                        <p className={styles.aboutPersonsItemName}>Will Smith</p>
                        <span className={styles.aboutPersonsSocial}>Product Designer</span>
                        <SocialList />
                    </li>
                </ul>
                <div className={styles.aboutPersonsPagination}>
                        {snaps.map((_, index) => (
                            <span key={index}
                                onClick={() => handleClick(index)}
                                className={`${styles.aboutPersonsPaginationItem} ${
                                activeIndex === index ? styles.active : ""
                                }`}>
                            </span>
                        ))}
                </div>
            </div>
            <FeaturesList />           
        </section>
    )
}