import book_banner from "../../../../assets/banners/book-banner-bg.jpg";
import "./BookBanner.css";

export default function BookBanner() {
  const bg_style = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${book_banner})` /* your image here */,
    backgroundSize: "cover" /* fill the area */,
    backgroundPosition: "center" /* centered image */,
    backgroundRepeat: "no-repeat" /* prevent tiling */,
    display: "flex",
    // justifyContent: "center",
    // direction: "ltr",
    borderRadius: "16px",

    justifyContent: "left",
    alignItems: "center",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <section
      className="banner"
      aria-label="کتاب ها و خرید کتاب"
      itemScope
      itemType="https://schema.org/BookStore"
    >
      <div className="banner-container" style={bg_style}>
        <article className="banner-desc">
          <h1 itemProp="name">هر کتابی اینجا پیدا می‌شه!</h1>

          <p itemProp="description">تو چه سبکی رو انتخاب می‌کنی؟</p>

          <a
            href="/shop"
            className="buy-btn"
            itemProp="url"
            aria-label="خرید کتاب"
          >
            <span className="sign">←</span>
            <span className="btn-text">خرید</span>
          </a>
        </article>
      </div>

      {/* Structured Data JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BookStore",
          name: "Online Book Store",
          url: "https://yourwebsite.com/shop",
          description: "Buy different types of books online",
        })}
      </script>
    </section>
  );
}
