import React from 'react';
import styles from './ExploreProducts.module.css';
import ProductItem from '../productitem/ProductItem';
import SectionMarker from '../sectionmarker/SectionMarker';
import MoreButton from '../morebutton/MoreButton';
import SectionTitle from '../sectiontitle/SectionTitle';

export default function ExploreProducts({items = []}) {
    return(
        <section className={styles.exploreProducts}>
            <SectionMarker title="Explore Our Products" style={{'margin': '0 0 20px'}}/>
            <SectionTitle title="Explore Our Products" style={{'margin': '0 0 35px'}}/>
            <div className={styles.exploreProductsGoods}>
                {items.map(item => (
                    <ProductItem name={item.name} 
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            reviewsCount={item.reviewsCount}
                            rating={item.rating}
                        />
                ))}
            </div>
            <MoreButton style={{'margin': '60px 0 0'}} label="View All Products" />
        </section>
    )
}