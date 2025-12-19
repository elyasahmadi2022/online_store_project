import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartSummary.module.css';

const CartSummary = () => {
  const { items, calculateSubtotal, calculateDiscount, calculateTotal, coupon } = useCart();

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount();
  const total = calculateTotal();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'currency',
      currency: 'IRR'
    }).format(price);
  };

  return (
    <div className={styles.cartSummary}>
      <h2>خلاصه سفارش</h2>
      
      <div className={styles.summaryRow}>
        <span>جمع جز ({items.length} {items.length === 1 ? 'آیتم' : 'آیتم'})</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      
      {discount > 0 && (
        <div className={styles.summaryRow}>
          <span>تخفیف کوپن</span>
          <span>-{formatPrice(discount)}</span>
        </div>
      )}
      
      <div className={`${styles.summaryRow} ${styles.total}`}>
        <span>جمع کل</span>
        <span>{formatPrice(total)}</span>
      </div>
      
      <button 
        className={styles.checkoutBtn}
        disabled={items.length === 0}
      >
        تسویه حساب ({items.length} {items.length === 1 ? 'آیتم' : 'آیتم'})
      </button>
      
      <p className={styles.secureText}>
        🔒 پرداخت ایمن تضمین شده
      </p>
    </div>
  );
};

export default CartSummary;