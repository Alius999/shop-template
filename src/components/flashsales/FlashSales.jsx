import React from 'react';
import SectionMarker from '../sectionmarker/SectionMarker';
import styles from './FlashSales.module.css';
import ProductItem from '../productitem/ProductItem';
import { productsList } from '../../data/data';
import MoreButton from '../morebutton/MoreButton';
import SectionTitle from '../sectiontitle/SectionTitle';
import { Link } from 'react-router-dom';

export default function FlashSales() {
    return (
        <section className={styles.flashSales}>
            <h2 hidden>Flash Sales</h2>
            <SectionMarker style={{'margin': '0 0 20px'}} title="Today’s" />
            <SectionTitle title="Flash Sales"/>  
            <div className={styles.flashSalesCounterContainer}>

            </div>
            <div className={styles.productItemContainer}>
                {productsList.map(product => (
                    product.isSales === true ? 
                    <ProductItem name={product.name} 
                                 key={product.id}
                                 id={product.id}
                                 image={product.image}
                                 price={product.price}
                                 oldPrice={product.oldPrice}
                                 reviewsCount={product.reviewsCount}
                                 rating={product.rating}
                    />: null
                ))}
            </div>
            <MoreButton label="View All Products" />
        </section>
    );
}
