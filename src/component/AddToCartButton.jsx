import React from 'react';
import { useCart } from '../context/CartContext';
import sampleProducts from '../data/sampleProducts';
import styles from './AddToCartButton.module.css';

const AddToCartButton = ({ courseId }) => {
  const { addToCart } = useCart();
  
  const product = sampleProducts.find(p => p.id === courseId);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'currency',
      currency: 'IRR'
    }).format(price);
  };

  return (
    <button onClick={handleAddToCart} className={styles.addToCartBtn}>
      افزودن به سبد خرید - {formatPrice(product.priceDiscounted)}
    </button>
  );
};

export default AddToCartButton;