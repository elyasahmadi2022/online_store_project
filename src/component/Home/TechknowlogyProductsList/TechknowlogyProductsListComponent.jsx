import React from "react";
import "./TechknowlogyProductsList.css";
import TechData from "./TechknowlogyProductsList";
export default function TechknowlogyProductsList() {
  return (
    <div className="tech-cardcontainer">
      {TechData.map((product) => {
        return (
          <div className="cards-container">
            {/* Card 2 */}
            <div className="tech-card">
              <div className="tech-card-content overlay">
                <h3 className="name">{product.name}</h3>
                <p className="product-desc-1">{product.description}...</p>
                <div className="product-details-container">
                  <div className="product-details">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_61_1835)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 0V2.5H5V0H6Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0V2.5H10V0H11Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.5 0V2.5H7.5V0H8.5Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 10H2.5V11H0V10Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 5H2.5V6H0V5Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 7.5H2.5V8.5H0V7.5Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.5 10H16V11H13.5V10Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.5 5H16V6H13.5V5Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.5 7.5H16V8.5H13.5V7.5Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 13.5V16H5V13.5H6Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 13.5V16H10V13.5H11Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.5 13.5V16H7.5V13.5H8.5Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3 2.5C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5H3ZM1.5 3C1.5 2.17157 2.17157 1.5 3 1.5H13C13.8284 1.5 14.5 2.17157 14.5 3V13C14.5 13.8284 13.8284 14.5 13 14.5H3C2.17157 14.5 1.5 13.8284 1.5 13V3Z"
                          fill="#383E43"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 4H12V12H4V4ZM5 5V11H11V5H5Z"
                          fill="#383E43"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_61_1835">
                          <rect width="16" height="16" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="product-details-info">
                      <div>
                        <span>{product.specs.gpu}</span>
                      </div>
                      <div>
                        <span>{product.specs.cpu}</span>
                      </div>
                    </div>
                  </div>

                  <div className="product-details">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_61_1867)">
                        <path
                          d="M8.00038 2.44922C5.72093 2.44922 3.86655 4.30366 3.86655 6.58312C3.86655 7.60989 4.25445 8.60272 4.93937 9.35933L2.66587 11.1114C2.45878 11.2709 2.33997 11.5025 2.33984 11.7466C2.33978 11.9907 2.45846 12.2224 2.66536 12.382L4.20835 13.573C4.35977 13.6898 4.53431 13.7515 4.71334 13.7515C5.02924 13.7515 5.30669 13.5595 5.43753 13.2505L6.6118 10.4765C7.05619 10.6354 7.5218 10.7169 8.00051 10.7169C10.28 10.7169 12.1344 8.86251 12.1344 6.58312C12.1343 4.30366 10.2798 2.44922 8.00038 2.44922ZM4.68985 12.9046L3.18987 11.7469L6.14341 9.47086L4.68985 12.9046ZM8.00038 9.89365C7.63288 9.89365 7.27525 9.83368 6.9332 9.71702L7.31496 8.8152C7.35391 8.72318 7.47246 8.44319 7.31198 8.20096C7.22573 8.07081 7.07924 7.9931 6.92003 7.9931C6.77817 7.9931 6.63859 8.04979 6.48083 8.17138L5.59376 8.85503C5.01727 8.24339 4.68985 7.4275 4.68985 6.58312C4.68985 4.75761 6.17495 3.27251 8.00038 3.27251C9.82589 3.27251 11.311 4.75761 11.311 6.58312C11.311 8.40855 9.82582 9.89365 8.00038 9.89365Z"
                          fill="#383E43"
                        ></path>
                        <path
                          d="M8.00093 5.08203C7.17333 5.08203 6.5 5.75536 6.5 6.58296C6.5 7.41063 7.17333 8.08396 8.00093 8.08396C8.8286 8.08396 9.50193 7.41063 9.50193 6.58296C9.50193 5.75536 8.8286 5.08203 8.00093 5.08203ZM8.00093 7.26066C7.62728 7.26066 7.3233 6.95661 7.3233 6.58296C7.3233 6.20931 7.62728 5.90533 8.00093 5.90533C8.37464 5.90533 8.67863 6.20931 8.67863 6.58296C8.67863 6.95661 8.37464 7.26066 8.00093 7.26066Z"
                          fill="#383E43"
                        ></path>
                        <path
                          d="M14.2588 0H1.74207C1.131 0 0.633789 0.497208 0.633789 1.10828V14.8917C0.633789 15.5029 1.131 16 1.74207 16H14.2588C14.8699 16 15.3671 15.5029 15.3671 14.8917V1.10828C15.3671 0.497208 14.8699 0 14.2588 0ZM14.4172 14.8917C14.4172 14.9775 14.3446 15.05 14.2588 15.05H1.74207C1.65626 15.05 1.58375 14.9775 1.58375 14.8917V1.10828C1.58375 1.02247 1.65626 0.949957 1.74207 0.949957H14.2588C14.3446 0.949957 14.4172 1.02247 14.4172 1.10828V14.8917Z"
                          fill="#383E43"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_61_1867">
                          <rect width="16" height="16" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <span>۱۳.۶ اینچ</span>
                    </div>
                    <div>
                      <span>{product.resolution}</span>
                    </div>
                  </div>
                </div>
                <div className="tec-product-price">
                  <span>{product.price / 100} افغانی</span>
                  <button className="follow-btn">خرید </button>
                </div>
              </div>
              <img src={product.img} alt="Profile" className="tech-card-img" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
