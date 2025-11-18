import React from 'react';
import styles from './Featured.module.css';
import SectionMarker from '../sectionmarker/SectionMarker';
import SectionTitle from '../sectiontitle/SectionTitle';
import FeaturedText from './featuredtext/FeaturedText';
import FeaturesList from './featureslist/FeaturesList';

export default function Featured() {
    return(
        <section className={styles.featured}>
            <h2 hidden>Featured</h2>
            <SectionMarker style={{'margin': '0 0 20px'}} title="Featured" />
            <SectionTitle title="Featured Products" style={{'margin': '0 0 60px'}}/>
            <div className={styles.featuredContainer}>
                <div className={styles.featuredItem}>
                    <FeaturedText title="PlayStation 5" 
                                  description="Black and White version of the PS5 coming out on sale." 
                                  link="https://www.playstation.com/en-us/ps5/" 
                                  linkText="Shop Now" />
                </div>
                <div className={styles.featuredItem}>
                    <FeaturedText title="Women’s Collections" 
                                  description="Featured woman collections that give you another vibe." 
                                  link="#" 
                                  linkText="Shop Now" />
                </div>
                <div className={styles.featuredItem}>
                    <FeaturedText title="Speakers"
                                  description="Amazon wireless speakers" 
                                  link="#" 
                                  linkText="Shop Now"
                                  style={{'margin': '8px 0'}} />
                </div>
                <div className={styles.featuredItem}>
                    <FeaturedText title="Perfume"
                                  description="GUCCI INTENSE OUD EDP" 
                                  link="#" 
                                  linkText="Shop Now"
                                  style={{'margin': '8px 0'}} />
                </div>
            </div>
            <FeaturesList />
        </section>
    )
}