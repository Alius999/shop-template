import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import Footer from '../components/footer/Footer';
import { useFavoritesItemsStore } from '../store/shoppingStore';
import { useCartItemsStore } from '../store/shoppingStore';

export default function MainLayout() {

  const { favoritesItems } = useFavoritesItemsStore();
  const { cartItems } = useCartItemsStore();

  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <div className={styles.topOffer}>
          <div className={styles.topOfferContainer}>
            <p className={styles.topOfferText}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <NavLink className={styles.topOfferLink} to="/">ShopNow</NavLink>
            </p>
            <form className={styles.topOfferForm}>
              <label htmlFor="language" className={styles.topOfferSelectLabel}>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.36452 4.95L11.3145 0L12.7285 1.414L6.36452 7.778L0.000514984 1.414L1.41451 0L6.36452 4.95Z" fill="white"/>
                </svg>
              </label>
              <select className={styles.topOfferSelect} name="language" id="language">
                <option value="en">English</option>
                <option value="ru">Russian</option>
              </select>
            </form>
          </div>
        </div>
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <NavLink className={styles.logoText} to="/">Exclusive</NavLink>
            </div>
            <nav className={styles.nav}>
              <NavLink className={styles.navLink} to="/" end>Home</NavLink>
              <NavLink className={styles.navLink} to="/contacts">Contact</NavLink>
              <NavLink className={styles.navLink} to="/about">About</NavLink>
              <NavLink className={styles.navLink} to="/signup">Sign Up</NavLink>
            </nav>
            <div className={styles.cart}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="What are you looking for?" />
                    <button className={styles.searchBtn}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.75 16.75L12.9723 12.9656M15.0658 7.90789C15.0658 9.80629 14.3117 11.6269 12.9693 
                            12.9693C11.6269 14.3117 9.80629 15.0658 7.90789 15.0658C6.0095 15.0658 4.18886 14.3117 2.8465 
                            12.9693C1.50413 11.6269 0.75 9.80629 0.75 7.90789C0.75 6.0095 1.50413 4.18886 2.8465 2.8465C4.18886 
                            1.50413 6.0095 0.75 7.90789 0.75C9.80629 0.75 11.6269 1.50413 12.9693 2.8465C14.3117 4.18886 15.0658 
                            6.0095 15.0658 7.90789V7.90789Z" 
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
                <NavLink to="/favorites" className={styles.favoriteBtn}>
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M5.75 0.75C2.989 0.75 0.75 2.966 0.75 5.7C0.75 7.907 1.625 13.145 10.238 18.44C10.3923 
                            18.5339 10.5694 18.5835 10.75 18.5835C10.9306 18.5835 11.1077 18.5339 11.262 18.44C19.875 
                            13.145 20.75 7.907 20.75 5.7C20.75 2.966 18.511 0.75 15.75 0.75C12.989 0.75 10.75 3.75 10.75 
                            3.75C10.75 3.75 8.511 0.75 5.75 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" 
                            strokeLinejoin="round"/>
                    </svg>
                    <span className={styles.favoriteBtnCount}>
                      {favoritesItems.length}
                    </span>
                </NavLink>
                <NavLink to="/cart" className={styles.cartBtn}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" 
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" 
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 5H7L10 22H26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 
                        7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 
                        6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" 
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className={styles.cartBtnCount}>
                      {cartItems.length}
                    </span>
                </NavLink>
            </div>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}


