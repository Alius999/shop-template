import React from 'react';
import styles from './BestSellings.module.css';
import SectionMarker from '../sectionmarker/SectionMarker';
import ProductItem from '../productitem/ProductItem';
import { productsList } from '../../data/data';
import MoreButton from '../morebutton/MoreButton';
import SectionTitle from '../sectiontitle/SectionTitle';

export default function DestSellings() {
    return(
        <section className={styles.bestSellings}>
            <h2 hidden>Best Sellings</h2>
            <SectionMarker style={{'margin': '0 0 20px'}} title="Best Sellings" />
            <div className={styles.bestSellingsTitleContainer}>
                <SectionTitle title="Best Selling Products" style={{'margin': '20px 0 0'}}/>
                <MoreButton style={{'margin': '0'}} label="View All" />
            </div>
            <div className={styles.bestSellingsContainer}>
                {productsList.map(item => (
                    item.reviewsCount >= 100 ?
                    <ProductItem key={item.id} 
                        name={item.name} 
                        id={item.id}
                        image={item.image} 
                        price={item.price} 
                        oldPrice={item.oldPrice} 
                        reviewsCount={item.reviewsCount} 
                        rating={item.rating} />
                        : null
                ))}
            </div>
        </section>
    )
}