import book_banner from "../../../assets/TechknowlogyBanner/TechknowlogyBanner.jpg";

import "./TechknowlogyBanner.css";

export default function TechknowlogyBanner() {
  const bg_style = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${book_banner})` /* your image here */,
    backgroundSize: "cover" /* fill the area */,
    backgroundPosition: "center" /* centered image */,
    backgroundRepeat: "no-repeat" /* prevent tiling */,
    display: "flex",
    borderRadius: "16px",
    justifyContent: "right",
    alignItems: "center",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <section
      className="tech-banner"
      aria-label="کتاب ها و خرید کتاب"
      itemScope
      itemType="https://schema.org/BookStore"
    >
      <div className="tech-banner-container" style={bg_style}>
        <article className="tech-banner-desc">
          <h1 itemProp="name">پرطرفدار ترین لپ تاب ها</h1>

          <p itemProp="description">
            محصولات کامپیوتری با تنوع بالا شامل لپ‌تاپ، قطعات سخت‌افزار، لوازم
            جانبی، مانیتور، موس و کیبورد با قیمت مناسب و ارسال سریع در فروشگاه
            آنلاین ما عرضه می‌شود.
          </p>

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
    </section>
  );
}
