import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import styles from "./ShoppingCart.module.css";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { items, isEmpty, coupon, applyCoupon, removeCoupon } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const Navgiate = useNavigate();
  // اعتبارسنجی کوپن - در یک برنامه واقعی این یک فراخوانی API خواهد بود
  const validateCoupon = (code) => {
    const coupons = {
      SAVE10: { type: "percentage", value: 10, code: "SAVE10" },
      SAVE20: { type: "percentage", value: 20, code: "SAVE20" },
      FLAT5: { type: "fixed", value: 5, code: "FLAT5" },
      FLAT10: { type: "fixed", value: 10, code: "FLAT10" },
    };

    return coupons[code.toUpperCase()] || null;
  };

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponMessage("لطفاً یک کد تخفیف وارد کنید");
      return;
    }

    const couponData = validateCoupon(couponCode);
    if (couponData) {
      applyCoupon(couponData);
      setCouponMessage(`کد تخفیف ${couponCode} با موفقیت اعمال شد!`);
    } else {
      setCouponMessage("کد تخفیف نامعتبر است");
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponCode("");
    setCouponMessage("");
  };

  if (isEmpty()) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyCartIcon}>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff2d55"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
          </svg>
        </div>
        <h2>سبد خرید شما خالی است</h2>
        <p>
          دوره‌های آموزشی ما را مرور کنید و چیزی که دوست دارید را پیدا کنید!
        </p>
        <button onClick={() => Navgiate("/")} className={styles.browseButton}>
          مرور دوره‌ها
        </button>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          <h1>
            سبد خرید ({items.length} {items.length === 1 ? "دوره" : "دوره"})
          </h1>

          <div className={styles.itemsList}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className={styles.cartSummary}>
          <CartSummary />

          <div className={styles.couponSection}>
            <h3>کد تخفیف</h3>
            {coupon ? (
              <div className={styles.appliedCoupon}>
                <div>
                  <span>کد تخفیف اعمال شده: </span>
                  <strong>{coupon.code}</strong>
                </div>
                <button
                  onClick={handleRemoveCoupon}
                  className={styles.removeCouponBtn}
                >
                  حذف
                </button>
              </div>
            ) : (
              <div className={styles.couponForm}>
                <input
                  type="text"
                  placeholder="کد تخفیف را وارد کنید"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className={styles.couponInput}
                />
                <button
                  onClick={handleApplyCoupon}
                  className={styles.applyCouponBtn}
                >
                  اعمال
                </button>
                {couponMessage && (
                  <div
                    className={`${styles.couponMessage} ${
                      couponMessage.includes("موفقیت")
                        ? styles.successMessage
                        : styles.errorMessage
                    }`}
                  >
                    {couponMessage}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
