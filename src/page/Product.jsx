import styles from "./Product.module.css"
import React from "react";
import images from "/public/laptop.jpg"
import Accordion from "../component/ui/accordion/Accordion.jsx";

export default function Product() {
    return <div className={styles.product_wrapper}>
        <div className={styles.product_main_content}>
            <div className={styles.product_first_main_content_child}>
                <div className={`${styles.main_content_1} ${styles.content_image}`}>
                    <img src={images} alt={'image'}/>
                </div>
                <div className={`${styles.main_content_2} ${styles.content_image}`}>
                    <img src={images}/>
                </div>
                <div className={`${styles.content_image} ${styles.main_content_3}`}>
                    <img src={images}/>
                </div>
                <div className={` ${styles.content_image} ${styles.main_content_4}`}>
                    <img src={images}/>
                </div>
                <div className={`${styles.main_content_5} ${styles.content_image}`}>
                    <img src={images}/>
                </div>
            </div>
            <div className={styles.product_second_main_content_child}>
                <div className={`${styles.product_details}`}>
                    <h2>New Season</h2>
                    <h3>new texting application which can help you a lot</h3>
                    <span>23.4$</span>
                    <p>magic text and videos</p>
                </div>
                <div className={`${styles.product_size}`}>
                    <span>XS</span>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                    <span>XXL</span>
                </div>
                <div className={`${styles.button_parent}`}>
                    <button
                        className={styles.btn}
                    >
                        <span>Add to Cart</span>
                        <svg
                            className={styles.icon}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 01-8 0"/>
                        </svg>
                    </button>
                </div>
                <div className={''}>
                    <div className={styles.move_setting}>
                        <span>Move now.</span>
                        <svg aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg"

                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             strokeWidth="1.5"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                        >
                            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                            <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"/>
                            <path d="M6 10h4m-2 -2v4"/>
                        </svg>
                    </div>
                    <div className={styles.move_setting}>
                        <span>Order now</span>
                        <svg aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg"

                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             strokeWidth="1.5"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                        >
                            <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"/>
                            <path d="M12 8l0 13"/>
                            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"/>
                            <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5"/>
                        </svg>
                    </div>
                </div>
                <div>

                    <Accordion items={[
                        {
                            title: 'New Technologies',
                            description: "Such powerfull technologies that I haven't ever met in my life"
                        },
                        {
                            title: 'New Technologies',
                            description: "Such powerfull technologies that I haven't ever met in my life"
                        },
                        {
                            title: 'New Technologies',
                            description: "Such powerfull technologies that I haven't ever met in my life"
                        }
                        , {
                            title: 'New Technologies',
                            description: "Such powerfull technologies that I haven't ever met in my life"
                        }
                    ]}/>
                </div>


            </div>

        </div>
        <div className={styles.related_products}>
            <div className={styles.related_product}>
                <SallerComponent/>
            </div>
        </div>

    </div>
}

function SallerComponent({
                             price = "۱۳۴۵۰۰ افغانی",
                             city = "بامیان",
                             sellerName = "فروشگاه پینــدو",
                             productTitle = "لپ تاپ مک بوک پرو ۱۶ اینچی مدل ۲۰۲۳",
                             guaranteeDays = "۷ روز ضمانت بازگشت کالا"
                         }) {
    return (
        <div className={styles.card}>

            {/* Left Price Section */}
            <div className={styles.logoBox}>
                <span className={styles.logo_container}>
                    <svg aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         width="32"
                         height="32"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="#ff2d55"
                         strokeWidth="1.5"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                    >
                      <path
                          d="M12 11l8 2c1.361 -.545 2 -1.248 2 -2v-3.8c0 -1.765 -4.479 -3.2 -10.002 -3.2c-5.522 0 -9.998 1.435 -9.998 3.2v2.8c0 1.766 4.478 4 10 4v-3z"/>
                      <path d="M12 14v3l8 2c1.362 -.547 2 -1.246 2 -2v-3c0 .754 -.638 1.453 -2 2l-8 -2z"/>
                      <path d="M2 17c0 1.766 4.476 3 9.998 3l.002 -3c-5.522 0 -10 -1.734 -10 -3.5v3.5z"/>
                      <path d="M2 10v4"/>
                      <path d="M22 10v4"/>
                    </svg>
                </span>
            </div>

            {/* Seller Information */}
            <div className={styles.details}>

                <div className={styles.row}>

                    {/* City */}
                    <span className={styles.iconText}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {city}
                    </span>

                    {/* Guarantee */}
                    <span className={styles.iconText}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1L3 5v6c0 5.52 3.84 10.74 9 12c5.16-1.26 9-6.48 9-12V5l-9-4z"/>
                            <path d="M9 12l2 2l4-4"/>
                        </svg>
                        ضمانت فروشگاهی
                    </span>

                </div>

                {/* Store Name + Badge */}
                <div className={styles.sellerRow}>
                    <span className={styles.sellerName}>{sellerName}</span>

                    {/* Badge icon */}
                    <span className={styles.badge}>
                        😊 پینــدو
                    </span>
                </div>

                {/* Product name */}
                <p className={styles.productTitle}>{productTitle}</p>

                {/* Guarantee button */}

            </div>
            <div>
                <div>{price}</div>
                <button className={styles.returnPolicyBtn}>
                    {guaranteeDays}
                </button>
            </div>
        </div>
    );
}