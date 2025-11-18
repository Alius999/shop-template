import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import useEmblaCarousel from 'embla-carousel-react';

export default function Slider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const [snaps, setSnaps] = useState([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        setSnaps(emblaApi.scrollSnapList());
        const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
        onSelect();
        emblaApi.on('select', onSelect);
    }, [emblaApi]);

    return (
        <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.carouselContainer}>
                <div className={styles.carouselItem}>
                    <img src='assets/images/slider-frame-1.png'/>
                </div>
                <div className={styles.carouselItem}>
                    <img src='assets/images/slider-frame-2.png'/>
                </div>
                <div className={styles.carouselItem}>
                    <img src='assets/images/slider-frame-3.png'/>
                </div>
                <div className={styles.carouselItem}>
                    <img src='assets/images/slider-frame-4.png'/>
                </div>
            </div>
            <div className={styles.dots}>
                {snaps.map((_, i) => (
                    <button
                    key={i}
                    className={styles.dot}
                    aria-current={i === selected ? 'true' : 'false'}
                    onClick={() => emblaApi?.scrollTo(i)}
                    />
                ))}
            </div>
        </div>
    );
}
