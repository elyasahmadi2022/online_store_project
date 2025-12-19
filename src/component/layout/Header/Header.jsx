import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import CategoriesDropdown from "../../CategoriesDropdown/CategoriesDropdown";
import LocationSelector from "../../LocationSelector/LocationSelector";
import Modal from "../../modal/Modal";
import NotificationButton from "../../ui/notification/NotificationButton";
import SearchBar from "../../ui/SearchBar/SearchBar";
import NavItemLarge from "../NavigationComponent/NavItemLarge";
import NavItemSmaller from "../NavigationComponent/NavItemSmaller";
import styles from "./Header.module.css";

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
    name: "شگفتانگیز ها",
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
    name: "شگفتانگیز ها",
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
        <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072-1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
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
  const search_ref = useRef(null);
  const Navigate = useNavigate();
  const [showLocation, setShowLocation] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showSearchBox, setSearchBox] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  const cardSvgClass = (hidden) =>
    `${styles.card_item_svg_container} ${hidden ? styles.hidden : ""}`;

  useEffect(
    function () {
      function handleResize(e) {
        const width = e.target.innerWidth;
        if (width >= 1024) {
          setSearchBox(false); // Close search modal when screen becomes >= 1024px
        }
      }
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    },
    [search_ref]
  );
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
              <path d="M12 10c-2 0 -3 1 -3 3c0 1.5 1.494 3.535 3 5.5c1 1 1.5 1.5 2.5 2s2.5 1 4.5 -.5s1.5 -3.5 .5 -6s-2.333 -5.5 -5 -9.5c-.834 -1 -1.5 -1.5 -2.503 -1.5c-1 0 -1.623 .45 -2.497 1.5c-2.667 4 -4 7 -5 9.5s-1.5 4.5 .5 6s3.5 1 4.5 .5s1.5 -1 2.5 -2c1.506 -1.965 3-4 3 -5.5c0 -2 -1 -3 -3 -3z" />
            </svg>
            <span>فرشگاهآنلاین</span>
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
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.25 2.75C6.14154 2.75 2 6.89029 2 11.998C2 17.1056 6.14154 21.2459 11.25 21.2459C13.5335 21.2459 15.6238 20.4187 17.2373 19.0475L20.7182 22.5287C21.011 22.8216 21.4859 22.8217 21.7788 22.5288C22.0717 22.2359 22.0718 21.761 21.7789 21.4681L18.2983 17.9872C19.6714 16.3736 20.5 14.2826 20.5 11.998C20.5 6.89029 16.3585 2.75 11.25 2.75ZM3.5 11.998C3.5 7.71905 6.96962 4.25 11.25 4.25C15.5304 4.25 19 7.71905 19 11.998C19 16.2769 15.5304 19.7459 11.25 19.7459C6.96962 19.7459 3.5 16.2769 3.5 11.998Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.header_right}>
          <div className={styles.access_bars}>
            <NotificationButton />
            <div className={styles.access_bars_second_element}>
              <button className={styles.button}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M16.4107 6.35C16.4107 8.74 14.4707 10.69 12.0707 10.69L12.0607 10.68C9.6707 10.68 7.7207 8.73 7.7207 6.34C7.7207 3.95 9.6807 2 12.0707 2C14.4607 2 16.4107 3.96 16.4107 6.35ZM14.9107 6.34C14.9107 4.78 13.6407 3.5 12.0707 3.5C10.5107 3.5 9.2307 4.78 9.2307 6.34C9.2307 7.9 10.5107 9.18 12.0707 9.18C13.6307 9.18 14.9107 7.9 14.9107 6.34Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.4"
                    d="M12 12.1895C14.67 12.1895 16.76 12.9395 18.21 14.4195V14.4095C20.2567 16.4956 20.2504 19.2563 20.25 19.4344L20.25 19.4395C20.24 19.8495 19.91 20.1795 19.5 20.1795H19.49C19.07 20.1695 18.75 19.8295 18.75 19.4195C18.75 19.3695 18.75 17.0895 17.13 15.4495C15.97 14.2795 14.24 13.6795 12 13.6795C9.76002 13.6795 8.03002 14.2795 6.87002 15.4495C5.25002 17.0995 5.25002 19.3995 5.25002 19.4195C5.25002 19.8295 4.92002 20.1795 4.51002 20.1795C4.15002 20.1995 3.75002 19.8595 3.75002 19.4495L3.75002 19.4448C3.74962 19.2771 3.74302 16.506 5.79002 14.4195C7.24002 12.9395 9.33002 12.1895 12 12.1895Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div
              onClick={() => Navigate("/cart")}
              className={styles.access_bars_second_element}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  d="M2.31641 3.25C1.90219 3.25 1.56641 3.58579 1.56641 4C1.56641 4.41421 1.90219 4.75 2.31641 4.75H3.49696C3.87082 4.75 4.18759 5.02534 4.23965 5.39556L5.49371 14.3133C5.6499 15.424 6.60021 16.25 7.72179 16.25L18.0664 16.25C18.4806 16.25 18.8164 15.9142 18.8164 15.5C18.8164 15.0858 18.4806 14.75 18.0664 14.75L7.72179 14.75C7.34793 14.75 7.03116 14.4747 6.9791 14.1044L6.85901 13.2505H17.7114C18.6969 13.2505 19.5678 12.6091 19.8601 11.668L21.7824 5.48032C21.8531 5.25268 21.8114 5.00499 21.6701 4.81305C21.5287 4.62112 21.3045 4.50781 21.0662 4.50781H5.51677C5.14728 3.75572 4.37455 3.25 3.49696 3.25H2.31641ZM5.84051 6.00781H20.0478L18.4277 11.223C18.3302 11.5367 18.0399 11.7505 17.7114 11.7505H6.64807L5.84051 6.00781Z"
                  fill="currentColor"
                />
                <g opacity="0.4">
                  <path
                    d="M7.78418 17.75C6.81768 17.75 6.03418 18.5335 6.03418 19.5C6.03418 20.4665 6.81768 21.25 7.78418 21.25C8.75068 21.25 9.53428 20.4665 9.53428 19.5C9.53428 18.5335 8.75068 17.75 7.78418 17.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.5703 19.5C14.5703 18.5335 15.3538 17.75 16.3203 17.75C17.2868 17.75 18.0704 18.5335 18.0704 19.5C18.0704 20.4665 17.2869 21.25 16.3204 21.25C15.3539 21.25 14.5703 20.4665 14.5703 19.5Z"
                    fill="currentColor"
                  />
                </g>
              </svg>

              {items.length > 0 && (
                <span className={styles.cart_count}>{items.length}</span>
              )}
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
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0 0 0)"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.00195C9.37665 7.00195 7.25 9.1286 7.25 11.752C7.25 14.3753 9.37665 16.502 12 16.502C14.6234 16.502 16.75 14.3753 16.75 11.752C16.75 9.1286 14.6234 7.00195 12 7.00195ZM8.75 11.752C8.75 9.95703 10.2051 8.50195 12 8.50195C13.7949 8.50195 15.25 9.95703 15.25 11.752C15.25 13.5469 13.7949 15.002 12 15.002C10.2051 15.002 8.75 13.5469 8.75 11.752Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.9939 2.75C9.28408 2.75 8.61587 3.08496 8.19114 3.65369L7.59735 4.4488C7.45577 4.63838 7.23304 4.75003 6.99643 4.75003H4.25C3.00736 4.75003 2 5.75739 2 7.00003V17.25C2 18.4927 3.00736 19.5 4.25 19.5H19.75C20.9926 19.5 22 18.4927 22 17.25V7.00003C22 5.75739 20.9926 4.75003 19.75 4.75003H17.0035C16.7669 4.75003 16.5442 4.63838 16.4026 4.4488L15.8088 3.65369C15.3841 3.08496 14.7159 2.75 14.006 2.75H9.9939ZM9.39298 4.55123C9.53456 4.36165 9.75729 4.25 9.9939 4.25H14.006C14.2426 4.25 14.4654 4.36165 14.607 4.55123L15.2008 5.34635C15.6255 5.91508 16.2937 6.25003 17.0035 6.25003H19.75C20.1642 6.25003 20.5 6.58582 20.5 7.00003V17.25C20.5 17.6642 20.1642 18 19.75 18H4.25C3.83579 18 3.5 17.6642 3.5 17.25V7.00003C3.5 6.58582 3.83579 6.25003 4.25 6.25003H6.99643C7.70625 6.25003 8.37446 5.91508 8.79919 5.34634L9.39298 4.55123Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.bell_icon_name}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0 0 0)"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0016 2.00098C12.4158 2.00098 12.7516 2.33676 12.7516 2.75098V3.53801C16.5416 3.9143 19.5016 7.11197 19.5016 11.001V14.115L20.1938 15.9609C20.7454 17.4319 19.6581 19.001 18.0871 19.001H15.0628C15.0287 20.6631 13.6701 21.9995 11.9998 21.9995C10.3295 21.9995 8.97089 20.6631 8.93682 19.001H5.9161C4.34514 19.001 3.25776 17.4319 3.80936 15.9609L4.5016 14.115V11.001C4.5016 7.11197 7.46161 3.9143 11.2516 3.53801V2.75098C11.2516 2.33676 11.5874 2.00098 12.0016 2.00098ZM10.4375 19.001C10.471 19.8339 11.1573 20.4995 11.9998 20.4995C12.8423 20.4995 13.5286 19.8339 13.5622 19.001H10.4375ZM6.0016 11.001C6.0016 7.68727 8.68789 5.00098 12.0016 5.00098C15.3153 5.00098 18.0016 7.68727 18.0016 11.001V14.1168C18.0016 14.2955 18.0337 14.4727 18.0965 14.64L18.7893 16.4876C18.9732 16.9779 18.6108 17.501 18.0871 17.501H5.9161C5.39244 17.501 5.02998 16.9779 5.21385 16.4876L5.90673 14.64C5.96946 14.4727 6.0016 14.2955 6.0016 14.1168V11.001Z"
                fill="currentColor"
              />
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
          <span>سوالی دارید؟</span>
        </div>
        <div className={`${styles.tabs_item} ${styles.nav__menu}`}>
          <span>در فرشگاهبفروشید </span>
        </div>
        <div
          onClick={() => setShowLocation(true)}
          className={`${styles.location__tracking}`}
        >
          <svg
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0 0 0)"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5035 6.47485C10.3854 6.47485 8.66846 8.19184 8.66846 10.3099C8.66846 12.4279 10.3854 14.1449 12.5035 14.1449C14.6215 14.1449 16.3385 12.4279 16.3385 10.3099C16.3385 8.19184 14.6215 6.47485 12.5035 6.47485ZM10.1685 10.3099C10.1685 9.02027 11.2139 7.97485 12.5035 7.97485C13.793 7.97485 14.8385 9.02027 14.8385 10.3099C14.8385 11.5994 13.793 12.6449 12.5035 12.6449C11.2139 12.6449 10.1685 11.5994 10.1685 10.3099Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5033 2.83984C8.3766 2.83984 5.03125 6.1852 5.03125 10.3119C5.03125 13.1162 6.1028 15.6692 7.37569 17.7181C8.65084 19.7706 10.1581 21.3657 11.1026 22.2692C11.9045 23.0362 13.139 23.0348 13.9389 22.2653C14.8791 21.3609 16.3778 19.7657 17.6454 17.7137C18.9108 15.6653 19.9754 13.1139 19.9754 10.3119C19.9754 6.1852 16.63 2.83984 12.5033 2.83984ZM6.53125 10.3119C6.53125 7.01362 9.20503 4.33984 12.5033 4.33984C15.8016 4.33984 18.4754 7.01362 18.4754 10.3119C18.4754 12.7374 17.5503 15.0136 16.3692 16.9254C15.1904 18.8336 13.7859 20.3311 12.899 21.1843C12.6788 21.3961 12.3604 21.3966 12.1395 21.1852C11.2483 20.3328 9.83565 18.8352 8.64982 16.9265C7.46175 15.0142 6.53125 12.7375 6.53125 10.3119Z"
              fill="currentColor"
            />
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
        <div className={styles.search_bar_container} ref={search_ref}>
          <div className={styles.search_bar_container_flex}>
            <SearchBar placeholder="لطفا جستجو کنید" id={"search-bar"} />

            <svg
              onClick={() => setSearchBox(false)}
              className={styles.go_back_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
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
