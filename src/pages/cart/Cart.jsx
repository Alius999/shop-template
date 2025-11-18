import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Cart.module.css';
import { useCartItemsStore } from '../../store/shoppingStore';

export default function Cart() {

    const { cartItems, changeQuantity, applayCupon, coupon, removeFromCart } = useCartItemsStore();
    console.log(cartItems); 
    const removeItem = (id) => {
        removeFromCart(id);
    }

    const [couponValue, setCouponValue] = useState('');
    const [couponResult, setCouponResult] = useState('');

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = coupon ? subtotal * coupon.discount / 100 : 0;
    const total = subtotal - discount;

    const handleCoupon = () => {
        const result = couponValue.trim();
        
        if (!result) {
            setCouponResult('Invalid coupon code');
            return;
        }
        if (coupon && result === coupon.value) {
            setCouponResult('Coupon already applied');
            return;
        }
        if (result === 'SaleMe10') {
            applayCupon(result);
            setCouponResult('Coupon applied');
        } else {
            applayCupon(result);
            setCouponResult('Invalid coupon code');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target); // создаём объект с данными формы
        const data = Object.fromEntries(formData.entries()); // превращаем в обычный объект
        const fullProductData = {
            ...cartItems,
            // id: Number(data.id),
            // quantity: Number(data.quantity),
            // gallery: data.gallery.find(item => item.id === selectedColour).images,
            subtotal: subtotal,
            total: total
        }
        console.log(fullProductData);
    }

    return (
      <div className={styles.cartPage}>
          <h2 hidden>Корзина</h2>
          <div className={styles.cartContainer}>
              <div className={styles.cartTitles}>
                  <p className={styles.cartTitle}>Product</p>
                  <p className={styles.cartTitle}>Price</p>
                  <p className={styles.cartTitle}>Quantity</p>
                  <p className={styles.cartTitle}>Subtotal</p>
              </div>
              {cartItems.map((item) => (
                <div className={styles.cartItem} key={item.id}>
                    <div className={styles.cartItemImageContainer}>
                        <svg className={styles.cartItemRemoveIcon} onClick={() => removeItem(item.id)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="9" fill="#DB4444"/>
                            <path d="M6 12L9 9M12 6L8.99943 9M8.99943 9L6 6M9 9L12 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                       <img src={item.gallery[0]} alt="" className={styles.cartItemImage} />
                    </div>
                    <p className={styles.cartItemTitle} name="name">{item.name}</p>
                    <p className={styles.cartItemPrice} name="price">{`$${item.price}`}</p>
                    <span className={styles.cartItemQuantity}>
                       <input type="number" 
                       className={styles.cartItemQuantityInput}
                       value={item.quantity} 
                       onChange={(e) => changeQuantity(item.id, e.target.value)}/>
                    </span>
                    <p className={styles.cartItemSubtotal}>{`$${item.price * item.quantity}`}</p>
                </div>
              ))}
          </div>
          <div className={styles.cartButtonWrapper}>
            <NavLink to="/" className={styles.cartLinkToShop}>
                Return To Shop
            </NavLink>
            <button>
                Update Cart
            </button>
          </div>
          <div className={styles.cartOrderDetails}>
            <div className={styles.cartCouponWrapper}>
                <input type="text" className={styles.cartCouponInput} 
                    placeholder="Enter coupon code" 
                    name="coupon" 
                    value={couponValue} 
                    onChange={(e) => {setCouponValue(e.target.value)}} />
                <button type="submit" className={styles.cartCouponButton} onClick={handleCoupon}>Apply Coupon</button>
                <span className={styles.cartCouponText}>Enter "SaleMe10" for 10% discount</span>
                <p className={styles.cartCouponResult} style={{color: coupon ? 'green' : 'red'}}>
                    {couponResult}
                </p>
            </div>
            <div className={styles.cartOrderDetailsItem}>
                <p className={styles.cartTotalDetailsTitle}>Cart Total</p>
                <span>
                    <p className={styles.cartTotalDetailsItemTitle}>Subtotal:</p>
                    <p className={styles.cartTotalDetailsItemValue}>
                        {`$${subtotal}`}
                    </p>
                </span>
                <span>
                    <p className={styles.cartTotalDetailsItemTitle}>Shipping:</p>
                    <p className={styles.cartTotalDetailsItemValue} name="shipping">Free</p>
                </span>
                <span>
                    <p className={styles.cartTotalDetailsItemTitle}>Total:</p>
                    <p className={styles.cartTotalDetailsItemValue} name="total">
                        {coupon === null ? `$${subtotal}` : `$${total}`}
                    </p>
                </span>
                <form onSubmit={handleSubmit}>
                    <button className={styles.cartTotalDetailsButton}>Proceed to Checkout</button>
                </form>
            </div>
          </div>
      </div>
    )
}


