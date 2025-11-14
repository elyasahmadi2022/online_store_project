import React, { useState } from "react";
import SearchBar from "../ui/SearchBar/SearchBar";
import styles from "./LocationSelector.module.css";

const LocationSelector = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const frequentCities = [
    "تهران",
    "اصفهان",
    "مشهد",
    "شیراز",
    "تبریز",
    "کرج",
    "اهواز",
    "قم",
    "رشت",
    "کرمانشاه",
  ];

  const allCities = [
    "تهران",
    "اصفهان",
    "مشهد",
    "شیراز",
    "تبریز",
    "کرج",
    "اهواز",
    "قم",
    "رشت",
    "کرمانشاه",
    "زاهدان",
    "همدان",
    "کرمان",
    "یزد",
    "اردبیل",
    "بندرعباس",
    "اراک",
    "بندر انزلی",
    "بوشهر",
    "خرم آباد",
  ];

  const filteredCities = allCities.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <svg
          onClick={onClose}
          width={24}
          height={24}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.closeIcon}
        >
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
        <h3>جستجو شهر</h3>
      </div>
      <div className={styles.seperator}></div>
      <div className={styles.message}>
        برای مشاهده تخفیف‌ها و کالا‌های قابل ارسال به شهرتان، آن را انتخاب کنید
      </div>
      <div className={styles.searchWrapper}>
        <SearchBar onChange={handleSearchChange} />
      </div>
      {searchQuery && (
        <div className={styles.searchResults}>
          <h4>نتایج جستجو</h4>
          <div className={styles.resultsList}>
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => (
                <div key={index} className={styles.resultItem}>
                  {city}
                </div>
              ))
            ) : (
              <div className={styles.noResults}>نتیجه‌ای یافت نشد</div>
            )}
          </div>
        </div>
      )}
      <div className={styles.frequentCities}>
        <h4>شهرهای پرتکرار</h4>
        <div className={styles.carousel}>
          {frequentCities.map((city, index) => (
            <div key={index} className={styles.cityItem}>
              {city}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
