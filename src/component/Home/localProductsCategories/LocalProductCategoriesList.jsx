import React from "react";
import "./LocalProductCategoriesList.css";
import rice from "../../../assets/local-product-categories-icon/rice.png";
import been from "../../../assets/local-product-categories-icon/been.png";
import carpet from "../../../assets/local-product-categories-icon/carpet.png";
import honey from "../../../assets/local-product-categories-icon/honey.png";
import cloths from "../../../assets/local-product-categories-icon/cloth.png";
import dairy from "../../../assets/local-product-categories-icon/dairy.png";

const categories = [
  { title: "برنج وطنی", icon: rice },
  { title: "شیر و لبنیات", icon: dairy },
  { title: "قالی دست باف", icon: carpet },
  { title: "عسل طبیعی", icon: honey },
  { title: "لباس های سنتی", icon: cloths },
  //   { title: "حبوبات", icon: been },
  {
    title: "اجیل",
    icon: "data:image/png;base64,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",
  },
];

export default function LocalProductsCategoriesList() {
  return (
    <div className="featured-container">
      <h2 className="featured-title"> دسته بندی محصولات وطنی</h2>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <div className="icon-box">
              <img src={cat.icon} alt={cat.title} />
            </div>
            <p className="category-title">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
