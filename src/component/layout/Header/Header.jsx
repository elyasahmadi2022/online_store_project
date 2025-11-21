import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CategoriesDropdown from "../../CategoriesDropdown/CategoriesDropdown";
import LocationSelector from "../../LocationSelector/LocationSelector";
import Modal from "../../modal/Modal";
import styles from "./Header.module.css";
import SearchBar from "../../ui/SearchBar/SearchBar";
import NavItemLarge from "../NavigationComponent/NavItemLarge";
import NavItemSmaller from "../NavigationComponent/NavItemSmaller";
const navItemsSmaller = [
  {
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 15l6 -6" />
        <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
        <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      </svg>
    ),
    name: "شگفت انگیز ها",
  },
  {
    path: "/home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 15l6 -6" />
        <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
        <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      </svg>
    ),
    name: "شگفت انگیز ها",
  },
  {
    path: "/new",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 15l6 -6" />
        <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
        <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      </svg>
    ),
    name: "شگفت انگیز ها",
  },
  {
    path: "/old",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 15l6 -6" />
        <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
        <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      </svg>
    ),
    name: "شگفت انگیز ها",
  },
];

const navItemsLarge = [
  {
    tabName: "سوپر مارکت",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
    ),
    path: "/supermarket",
  },
  {
    tabName: "طلای دیجتال",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
        <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
        <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
        <path d="M3 6v10c0 .888 .772 1.45 2 2" />
        <path d="M3 11c0 .888 .772 1.45 2 2" />
      </svg>
    ),
    path: "/digitalgold",
  },
  {
    tabName: "پر فروش ترینها",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
      </svg>
    ),
    path: "/bestsellers",
  },
];

function Header() {
  const [showLocation, setShowLocation] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showSearchBox, setSearchBox] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cardSvgClass = (hidden) =>
    `${styles.card_item_svg_container} ${hidden ? styles.hidden : ""}`;

  useEffect(function () {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);
    };

    // Throttle the scroll event to improve performance
    const throttle = (func, limit) => {
      let lastFunc;
      let lastRan;
      return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(function () {
            if (Date.now() - lastRan >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    };

    const throttledHandleScroll = throttle(handleScroll, 100); // Adjust the throttle limit here

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <header className={`${styles.layout} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.first_part}>
        <div className={styles.header_left}>
          <NavLink to="/" className={styles.logo}>
            <svg
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
              <path d="M12 10c-2 0 -3 1 -3 3c0 1.5 1.494 3.535 3 5.5c1 1 1.5 1.5 2.5 2s2.5 1 4.5 -.5s1.5 -3.5 .5 -6s-2.333 -5.5 -5 -9.5c-.834 -1 -1.5 -1.5 -2.503 -1.5c-1 0 -1.623 .45 -2.497 1.5c-2.667 4 -4 7 -5 9.5s-1.5 4.5 .5 6s3.5 1 4.5 .5s1.5 -1 2.5 -2c1.506 -1.965 3 -4 3 -5.5c0 -2 -1 -3 -3 -3z" />
            </svg>
            <span>فررشگاه آنلاین</span>
          </NavLink>
        </div>
        <div className={styles.header_center}>
          <div>
            <div className={styles.search_wrappers}>
              <input
                type="text"
                placeholder={"لطفا جستجو کنید"}
                className={styles.search_input_field}
                id="header_search"
              />

              <svg
                className={styles.search_bar_icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.header_right}>
          <div className={styles.access_bars}>
            <div className={styles.access_bars_first_element}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
              <span className={styles.access_bars_bell_marks}>2</span>
            </div>
            <div className={styles.access_bars_second_element}>
              <button className={styles.button}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </button>
            </div>
            <div className={styles.access_bars_third_element}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          {navItemsSmaller.map((item) => (
            <NavItemSmaller
              key={item.path}
              isScrolled={isScrolled}
              cardSvgClass={cardSvgClass}
              path={item.path}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <div className={styles.second_part}>
        <div className={styles.second__search_bar}>
          <div
            onClick={() => {
              setSearchBox((pre) => !pre);
            }}
            className={styles.search_wrappers}
          >
            <div
              className={`${styles.search_input_field} ${styles.search_text_color}`}
            >
              لطفا جستجو کنید
            </div>

            <svg
              className={styles.search_bar_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <svg
              className={styles.search__bar_icon_camera}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5856d6"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
              <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            </svg>
          </div>
          <div className={styles.bell_icon_name}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </div>
        </div>

        <div
          className={styles.dropdown_container}
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          <div className={styles.nav_menu}>
            <div className={styles.tabs_item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
              <span>دسته بندی کالاها</span>
            </div>
          </div>
          <CategoriesDropdown show={showCategories} />
        </div>
        {navItemsLarge.map((item) => (
          <NavItemLarge
            key={item.path}
            tabName={item.tabName}
            icon={item.icon}
            path={item.path}
          />
        ))}
        <div className={styles.sperator_wrapper}>
          <span className={styles.sperator}></span>
        </div>
        <div className={`${styles.tabs_item} ${styles.nav__menu}`}>
          <span>سوالی دارید؟ </span>
        </div>
        <div className={`${styles.tabs_item} ${styles.nav__menu}`}>
          <span>در فررشگاه بفروشید </span>
        </div>
        <div
          onClick={() => setShowLocation(true)}
          className={`${styles.location__tracking}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
            <path d="M16 22l5 -5" />
            <path d="M21 21.5v-4.5h-4.5" />
          </svg>
          <span>ارسال به هرات، افغانستان</span>
        </div>
      </div>
      <Modal
        isOpen={showSearchBox}
        onClose={() => {
          setSearchBox(false);
        }}
      >
        <div className={styles.search_bar_container}>
          <div className={styles.search_bar_container_flex}>
            <SearchBar placeholder="please search" id={"search-bar"} />

            <svg
              onClick={() => setSearchBox(false)}
              className={styles.go_back_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5856d6"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 14l-4 -4l4 -4" />
              <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
          </div>
        </div>
      </Modal>
      <Modal isOpen={showLocation}>
        <LocationSelector onClose={() => setShowLocation(false)} />
      </Modal>
    </header>
  );
}

export default Header;
