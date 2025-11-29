import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity, moveToWishlist } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleMoveToWishlist = () => {
    moveToWishlist(item.id);
  };

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'currency',
      currency: 'IRR'
    }).format(price);
  };

  // Calculate discount percentage
  const discountPercentage = Math.round(((item.priceOriginal - item.priceDiscounted) / item.priceOriginal) * 100);

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <img src={item.thumbnail} alt={item.title} />
        {discountPercentage > 0 && (
          <div className={styles.discountBadge}>
            {discountPercentage}% تخفیف
          </div>
        )}
      </div>
      
      <div className={styles.itemDetails}>
        <div className={styles.itemHeader}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <button 
            onClick={handleRemove}
            className={styles.removeItemBtn}
            aria-label="حذف آیتم"
          >
            ×
          </button>
        </div>
        
        <p className={styles.instructor}>برند: {item.brand}</p>
        
        <div className={styles.rating}>
          <span className={styles.ratingValue}>{item.rating}</span>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.reviews}>({item.reviewsCount} نظر)</span>
        </div>
        
        <div className={styles.badges}>
          {item.isBestseller && <span className={styles.badgeBestseller}>پرفروش</span>}
          {item.isFeatured && <span className={styles.badgeHighestRated}>ویژه</span>}
        </div>
      </div>
      
      <div className={styles.itemPriceSection}>
        <div className={styles.priceContainer}>
          <div className={styles.originalPrice}>
            {formatPrice(item.priceOriginal)}
          </div>
          <div className={styles.discountedPrice}>
            {formatPrice(item.priceDiscounted)}
          </div>
        </div>
        
        <div className={styles.quantityControls}>
          <button 
            onClick={decrementQuantity}
            disabled={item.quantity <= 1}
            className={styles.quantityBtn}
          >
            -
          </button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button 
            onClick={incrementQuantity}
            className={styles.quantityBtn}
          >
            +
          </button>
        </div>
      </div>
      
      <div className={styles.itemActions}>
        <button 
          onClick={handleMoveToWishlist}
          className={styles.moveToWishlistBtn}
        >
          انتقال به لیست علاقه‌مندی‌ها
        </button>
      </div>
    </div>
  );
};

export default CartItem;