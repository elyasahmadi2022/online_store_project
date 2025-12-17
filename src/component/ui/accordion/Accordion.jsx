import styles from "./Accordion.module.css";
import { useState, useRef, useEffect } from "react";

export default function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className={styles.accordion_container}>
            {items?.map((item, index) => (
                <div key={index} className={styles.accordion}>
                    <div
                        className={styles.accordion_wrapper}
                        onClick={() => toggle(index)}
                    >
                        <span className={styles.accordion_title}>
                            {item.title}
                        </span>

                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${styles.accordion_icon} ${
                                activeIndex === index ? styles.rotate : ""
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 9l6 6l6 -6" />
                        </svg>
                    </div>

                    {/* animated content */}
                    <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        className={`${styles.accordion_content} ${
                            activeIndex === index ? styles.open : ""
                        }`}
                        style={{
                            height:
                                activeIndex === index
                                    ? contentRefs.current[index]?.scrollHeight + "px"
                                    : "0px",
                        }}
                    >
                        <div className={styles.inner}>{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
