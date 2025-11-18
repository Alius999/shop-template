import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(null);

    return (
        <div className={styles.sidebar}>
            <nav>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarElement}>
                        <button 
                            className={styles.sidebarButton} 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Woman’s Fashion
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z" fill="black"/>
                            </svg> 
                        </button>  
                        <ul className={`${styles.submenu} ${isOpen ? styles.submenuVisible : ''}`}>
                            <li className={styles.submenuElement}>
                                <NavLink className={styles.submenuLink} to="/category/women/dresses">Dresses</NavLink>
                            </li>
                            <li className={styles.submenuElement}>
                                <NavLink className={styles.submenuLink} to="/category/women/shoes">Shoes</NavLink>
                            </li>
                            <li className={styles.submenuElement}>
                                <NavLink className={styles.submenuLink} to="/category/women/bags">Bags</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.sidebarElement}>
                        <button className={styles.sidebarButton}>
                            Men’s Fashion
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z" fill="black"/>
                            </svg>
                        </button>
                    </li>
                    <li className={styles.sidebarElement}>
                        <NavLink to="/catalog" className={styles.SidebarLink}>Electronics</NavLink>
                    </li>
                    <li className={styles.sidebarElement}>
                        <NavLink to="/catalog" className={styles.SidebarLink}>Home & Lifestyle</NavLink>
                    </li>
                    <li className={styles.sidebarElement}>
                        <NavLink to="/catalog" className={styles.SidebarLink}>Medicine</NavLink>
                    </li>
                    <li className={styles.sidebarElement}>
                        <NavLink to="/catalog" className={styles.SidebarLink}>Sports & Outdoor</NavLink>
                    </li>
                    <li className={styles.sidebarElement}>
                        <NavLink to="/catalog" className={styles.SidebarLink}>Baby’s & Toys</NavLink>
                    </li>
                    <li className={styles.sidebarElement}>
                        <NavLink to="/catalog" className={styles.SidebarLink}>Groceries & Pets</NavLink>
                    </li>
                    <li className={styles.sidebarElement}>
                        <NavLink to="/catalog" className={styles.SidebarLink}>Health & Beauty</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
