import React from "react";
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";
import {useNavigate} from "react-router-dom";

function ProductCard({ products }) {
  console.log(products)
  const navigate = useNavigate()
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className={styles.card} onClick={() => navigate(`product/${product.id}`)}>
          {product.isHotSale && <div className={styles.badge}>HOT SALE</div>}
          <div className={styles.tilt}>
            <div className={styles.img}>
              <img src={product.thumbnail} alt={product.title} />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.cat}>{product.category}</div>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.desc}>{product.description}</p>
            <div className={styles.feats}>
              {product.features.map((feat, index) => (
                <span key={index} className={styles.feat}>
                  {feat}
                </span>
              ))}
            </div>
            <div className={styles.bottom}>
              <div className={styles.price}>
                <span className={styles.old}>${product.priceOriginal}</span>
                <span className={styles.new}>${product.priceDiscounted}</span>
              </div>
              <button
                className={styles.btn}
                onClick={() => handleAddToCart(product)}
              >
                <span>Add to Cart</span>
                <svg
                  className={styles.icon}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </button>
            </div>
            <div className={styles.meta}>
              <div className={styles.rating}>
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    stroke="#FFD700"
                    stroke-width="0.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className={styles.rcount}>
                  {product.reviewsCount} Reviews
                </span>
              </div>
              <div className={styles.stock}>
                {product.isInStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
