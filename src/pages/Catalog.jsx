import React, { useRef, useLayoutEffect, useState, useEffect, useCallback  } from 'react';
import styles from './Catalog.module.css';
import { productsList } from '../data/data';
import useEmblaCarousel from 'embla-carousel-react';

export default function Catalog() {

    const [mainRef, mainApi] = useEmblaCarousel({ 
        align: 'start', 
        containScroll: 'trimSnaps',
        duration: 0
     });

    const [selected, setSelected] = useState(0);

    const onSelect = useCallback(() => {
      if (!mainApi) return;
      setSelected(mainApi.selectedScrollSnap())
    }, [mainApi]);

    useEffect(() => {
      if (!mainApi) return;
      onSelect();
      mainApi.on('select', onSelect);
    }, [mainApi, onSelect]);

    const goTo = (index) => {
        if (mainApi) mainApi.scrollTo(index);
    }

    /* Кнопки */

    const thumbContainerRef = useRef(null);
    const [thumbStep, setThumbStep] = useState(0);
    const [up, setUp] = useState(false);
    const [down, setDown] = useState(false);

    const updateEnds = useCallback(() => {
      const el = thumbContainerRef.current;
      if (!el) return;
      const max = el.scrollHeight - el.clientHeight;
      setUp(el.scrollTop > 0);
      setDown(el.scrollTop < max - 1); // небольшой зазор от округления
    }, []);

    useEffect(() => {
      const el = thumbContainerRef.current;
      if (!el) return;
      updateEnds();
      const onScroll = () => updateEnds();
      el.addEventListener('scroll', onScroll, { passive: true });
      const ro = new ResizeObserver(updateEnds);
      ro.observe(el);
      return () => { el.removeEventListener('scroll', onScroll); ro.disconnect(); };
    }, [updateEnds]);

    useLayoutEffect(() => {
        const thumbnail = thumbContainerRef.current?.querySelector(`.${styles.thumbSlide}`);
        if (thumbnail) {
            const mb = parseFloat(getComputedStyle(thumbnail).marginBottom || '0');
            setThumbStep(thumbnail.offsetHeight + mb);
        }
    }, []);

    const thumbPrev = () => thumbContainerRef.current?.scrollBy({ top: -thumbStep, behavior: 'smooth' });
    const thumbNext = () => thumbContainerRef.current?.scrollBy({ top:  thumbStep, behavior: 'smooth' });

    /* Включаем - отключаем кнопки */

    return (
        <div className={styles.carousel}>
            <h2>Каталог и тест карусели</h2>

            {/* Основной слайдер */}
            <div className={styles.mainViewport} ref={mainRef}>
                <div className={styles.mainContainer}>
                    {productsList[0].gallery.map((image, index) => (
                        <div className={styles.mainSlide} key={index}>
                            <img src={image} alt={image} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Вертикальные миниатюры */}
            <button className={styles.bottomButton} onClick={thumbPrev} style={{ display: !up ? 'none' : 'block'}}>↑</button>

            <div className={styles.thumbViewport} ref={thumbContainerRef}>
                <div className={styles.thumbContainer}>
                    {productsList[0].gallery.map((image, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`${styles.thumbSlide}`}
                            onClick={() => goTo(index)}
                        >
                            <img src={image} alt={image} />
                        </button>
                    ))}
                </div>
            </div>
            <button className={styles.topButton} type="button" onClick={thumbNext} style={{ display: !down ? 'none' : 'block'}}>↓</button>
        </div>
    );
}


