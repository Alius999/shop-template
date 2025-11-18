import React from 'react';
import styles from './ProductItem.module.css';
import ItemRatings from '../itemratings/ItemRatings';
import { Link } from 'react-router-dom';
import { useFavoritesItemsStore } from '../../store/shoppingStore';

export default function ProductItem(props) {

    const removeFavorite = useFavoritesItemsStore(s => s.removeFavoriteItem);

    const removeFavoriteHandler = () => {
      console.log('remove id =', props.id, typeof props.id); // должно быть число/строка, не undefined
      removeFavorite(props.id); // можно и removeFavorite({ id: props.id })
    };

    return(
        <div className={styles.productItem}>
            <div className={styles.itemImage}>
                <img src={props.image} alt="joystick" />
                <Link to={`/product/${props.id}`} className={styles.cartPlate}>
                    Add To Cart
                </Link>
            </div>
            <p className={styles.itemName}>
                {props.name}
            </p>
            <div className={styles.itemPriceContainer}>
                <p className={styles.itemPrice}>
                    ${props.price}
                </p>
                <p className={styles.itemOldPrice}>
                    {props.oldPrice}
                </p>
            </div>
                <ItemRatings reviewsCount={props.reviewsCount}
                rating={props.rating} />
            <button className={styles.removeItem} style={props.style} onClick={removeFavoriteHandler}>    
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7798 3.35143H2.11312L3.44645 18.78H14.1131L15.4465 3.35143H0.779785M8.77979 7.20857V14.9229M12.1131 
                        7.20857L11.4465 14.9229M5.44645 7.20857L6.11312 14.9229M6.11312 3.35143L6.77979 0.779999H10.7798L11.4465 3.35143" 
                        stroke="currentColor" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    )
}
