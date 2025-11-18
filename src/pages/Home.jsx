import React from 'react';
import FirstScreen from '../components/firstscreen/FirstScreen';
import FlashSales from '../components/flashsales/FlashSales';
import Categories from '../components/categories/Categories';
import SaleBanner from '../components/salebanner/SaleBanner';
import BestSellings from '../components/bestsellings/BestSellings';
import Featured from '../components/featured/Featured';
import Footer from '../components/footer/Footer';

export default function Home() {
    return (
        <div>
            <FirstScreen />
            <FlashSales />
            <Categories />
            <SaleBanner />
            <BestSellings />
            <Featured />
        </div>
    )
}


