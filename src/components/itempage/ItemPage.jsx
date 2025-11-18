import React, { useState, useEffect, useRef } from 'react';
import styles from './ItemPage.module.css';
import { useParams } from 'react-router-dom';
import { productsList } from '../../data/data';
import ItemRatings from '../itemratings/ItemRatings';
import SectionMarker from '../sectionmarker/SectionMarker';
import ProductItem from '../productitem/ProductItem';
import { useFavoritesItemsStore } from '../../store/shoppingStore';
import { useCartItemsStore } from '../../store/shoppingStore';

export default function ItemPage() {

    const { toggleFavoriteItem, favoritesItems } = useFavoritesItemsStore();
    const { toggleCartItem, cartItems } = useCartItemsStore();

    const toggleCartHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target); // создаём объект с данными формы
        const data = Object.fromEntries(formData.entries()); // превращаем в обычный объект
        const fullProductData  = {
            ...product,
            ...data,    
            id: Number(product.id),
            quantity: Number(data.quantity),
            gallery: product.gallery.find(item => item.id === selectedColour).images
        }
        console.log(fullProductData);
        toggleCartItem(fullProductData);
    }
    
    const toggleFavoriteHandler = () => {
        toggleFavoriteItem(product);
        // console.log(favoritesItems);
    }

    console.log(useCartItemsStore.getState().cartItems);


    const { id } = useParams();
    const product = productsList.find(product => product.id === Number(id));

    const [currentImage, setCurrentImage] = useState(0);
    const [gapValue, setGapValue] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [coloursAvailable] = useState(product.gallery.some(item => typeof item === 'object') && product.gallery.length > 1);
    const [selectedColour, setSelectedColour] = useState(1);

    const selectedColourData = product.gallery.find(item => item.id === selectedColour);
    console.log(selectedColourData);
    const productGallery = selectedColourData?.images ?? product.gallery;

    const changeColourHandler = (e) => {
        setSelectedColour(Number(e.target.value));
        setCurrentImage(0);
    }

    const changeImage = (index) => {
        setCurrentImage(index);
    }

    const itemGalleryPreview = useRef(null);
    const previewItemWrapper = useRef(null);

    useEffect(() => {
        if (itemGalleryPreview.current && previewItemWrapper.current) {
            const gapValue = getComputedStyle(itemGalleryPreview.current).gap;
            const imageHeight = getComputedStyle(previewItemWrapper.current).height;
            // console.log(gapValue, imageHeight);
            setGapValue(gapValue);
            setImageHeight(imageHeight);
        }

        const scrollArea = itemGalleryPreview.current;
        if (!scrollArea) return;

        const handleScroll = () => {
            const current = scrollArea.scrollTop;
            const maxScroll = scrollArea.scrollHeight - scrollArea.clientHeight;
            const canScroll = maxScroll > 1;
            const showTop = canScroll && current > 0;
            const showBottom = canScroll && current < maxScroll - 1;
            setShowPrev(showTop);
            setShowNext(showBottom);
        }

        scrollArea.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => scrollArea.removeEventListener('scroll', handleScroll);
    },[productGallery.length, selectedColour])

    const gapV = parseFloat(gapValue);
    const imageV = parseFloat(imageHeight);
    const scrollStep = gapV + imageV;

    const moveNext = () => {
        itemGalleryPreview.current.scrollTop += scrollStep;
    }
    const movePrev = () => {
        itemGalleryPreview.current.scrollTop -= scrollStep;
    }

    const maxQuantity = 100;
    const minQuantity = 1;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(num => Math.min(maxQuantity, num + 1));
    }
    const decreaseQuantity = () => {
        setQuantity(num => Math.max(minQuantity, num - 1));
    }

    const onChangeQuantity = (e) => {
        const numberValue = e.target.valueAsNumber;
        if (Number.isNaN(numberValue)) return;
        setQuantity(Math.max(minQuantity, Math.min(maxQuantity, numberValue)));
    }

    return (
        <div className={styles.itemPage}>
            <h1 hidden>{product.name}</h1>
            <div className={styles.itemPageContainer}>
                <div className={styles.itemPageGallery}>
                    <div className={styles.itemGalleryButtonsWrapper}>
                        {showPrev &&<button type="button" onClick={movePrev} className={styles.galleryPrevButton}>
                            <img src="assets/images/arrow.png" alt="prev arrow" />
                        </button>}
                        <div className={styles.itemGalleryPreview} ref={itemGalleryPreview}>
                            {productGallery.map((image, index) => (
                                <div className={styles.previewItemWrapper} onClick={() => changeImage(index)} ref={previewItemWrapper}>
                                    <img key={index} className={styles.itemGalleryPreviewItem} src={image} alt={image} />
                                </div>
                            ))}
                        </div>
                        {showNext && <button type="button" onClick={moveNext} className={styles.galleryNextButton}>
                            <img src="assets/images/arrow.png" alt="next arrow" />
                        </button>}
                    </div>
                    <div className={styles.itemGalleryImages}>
                        <img src={productGallery[currentImage]} alt={product.name} />
                    </div>
                </div>    
                <div className={styles.itemProductInfo}>
                    <h2 className={styles.itemProductName}>{product.name}</h2>
                    <div className={styles.itemRatingsWrapper}>
                        <ItemRatings reviewsCount={`${product.reviewsCount} Rewievs`}
                        rating={product.rating} />
                        <span className={styles.itemStatus}>{product.status ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                    <p className={styles.itemPrice}>${product.price}</p>
                    <p className={styles.itemDescription}>{product.description}</p>

{/* Начало формы, выбор цвета, размера и количества */}

                    <form className={styles.itemForm} onSubmit={toggleCartHandler}>
                        { coloursAvailable &&<div className={styles.itemColours}>
                            <p className={styles.itemColoursTitle}>Colours:</p>
                            <input id="colour1" type="radio" name="colour" value="1" 
                                onChange={changeColourHandler} 
                                // onChecked={console.log(selectedColour)}
                                checked={selectedColour === 1}/>
                            <label htmlFor="colour1"></label>
                            <input id="colour2" type="radio" name="colour" value="2" 
                                onChange={changeColourHandler} 
                                // onChecked={console.log(selectedColour)} 
                                checked={selectedColour === 2}
                                />
                            <label htmlFor="colour2"></label>
                        </div>}
                        <div className={styles.itemSizeWrapper}>
                            <p className={styles.itemSizeTitle}>Size:</p>
                            <input type="radio" value="XS" id="xs" name="size"/>
                            <label for="xs">XS</label>
                            <input type="radio" value="S" id="s" name="size"/>
                            <label for="s">S</label>
                            <input type="radio" value="M" id="m" name="size"/>
                            <label for="m">M</label>
                            <input type="radio" value="L" id="l" name="size"/>
                            <label for="l">L</label>
                            <input type="radio" value="XL" id="xl" name="size"/>
                            <label for="xl">XL</label>
                        </div>
                        <div className={styles.itemOrderWrapper}>
                            <div className={styles.itemQuantityWrapper}>
                                <button className={styles.itemQuantityIncrease} type="button" onClick={decreaseQuantity}></button>
                                <input onChange={onChangeQuantity} type="number" min={minQuantity} max={maxQuantity} value={quantity} name="quantity"/>
                                <button className={styles.itemQuantityDecrease} type="button" onClick={increaseQuantity}></button>
                            </div>
                            <button type="submit" className={styles.itemBuyNowBtn}>
                                Buy Now
                            </button>

{/* Добавить в избранное */}

                            <button className={styles.itemFavoriteBtn} type="button" 
                            onClick={toggleFavoriteHandler}
                            style={favoritesItems.some(item => item.id === product.id) ? { backgroundColor: '#db4444', color: '#ffffff', border: 'none' } : { backgroundColor: '#ffffff', color: '#000000' }}>
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5.75 0.75C2.989 0.75 0.75 2.966 0.75 5.7C0.75 7.907 1.625 13.145 10.238 18.44C10.3923 18.5339 10.5694 18.5835 10.75 18.5835C10.9306 
                                    18.5835 11.1077 18.5339 11.262 18.44C19.875 13.145 20.75 7.907 20.75 5.7C20.75 2.966 18.511 0.75 15.75 0.75C12.989 0.75 10.75 3.75 10.75 
                                    3.75C10.75 3.75 8.511 0.75 5.75 0.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                    <div className={styles.itemShippingDetails}>
                        <span className={styles.itemDeliveryDetails}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_261_4843)">
                                <path d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 11.8182H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.81836 15.4545H8.48503" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 19.0909H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_261_4843">
                                <rect width="40" height="40" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p className={styles.itemDeliveryDetailsTitle}>Free Delivery</p>
                            <a className={styles.itemDeliveryDetailsLink} href="#">Enter your postal code for Delivery Availability</a>
                        </span>
                        <span className={styles.itemReturnDelivery}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_261_4865)">
                                <path d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_261_4865">
                                <rect width="40" height="40" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                                <p className={styles.itemReturnDeliveryTitle}>Free Returns</p>
                                <p className={styles.itemReturnDeliveryDescription}>Free 30 Days Delivery Returns.
                                    <a className={styles.itemReturnDeliveryLink} href="#">Details</a>
                                </p>
                        </span>
                    </div>
                </div>
            </div>
            <SectionMarker style={{'margin': '140px 0 60px'}} title="Related Item"/>
            <div className={styles.relatedItemsContainer}>
                {productsList.map(item => 
                    item.category === product.category ? 
                    <ProductItem key={item.id} 
                        name={item.name} 
                        id={item.id} 
                        image={item.image} 
                        price={item.price} 
                        oldPrice={item.oldPrice} 
                        reviewsCount={item.reviewsCount} 
                        rating={item.rating} 
                    /> : null
                )}
            </div>
        </div>
    );
}