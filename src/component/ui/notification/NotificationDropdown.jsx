import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotificationDropdown.module.css";

const notifications = [
  {
    id: 1,
    title: "پیشنهاد ویژه: ۵۰٪ تخفیف",
    message: "پیشنهاد محدود برای دوره‌های منتخب. همین حالا ثبت نام کنید!",
    time: "۲ ساعت پیش",
    unread: true,
  },
  {
    id: 2,
    title: "دوره جدید منتشر شد",
    message: "دوره یادگیری React با Hooks و Context API اکنون در دسترس است!",
    time: "۱ روز پیش",
    unread: true,
  },
  {
    id: 3,
    title: "بروزرسانی پیشرفت دوره",
    message: "شما ۷۵٪ از دوره مبانی جاوااسکریپت را تکمیل کرده‌اید.",
    time: "۲ روز پیش",
    unread: false,
  },
];

function NotificationDropdown({ onClose }) {
  const navigate = useNavigate();
  
  const handleViewAll = () => {
    onClose();
    navigate('/notifications');
  };

  return (
    <div className={styles.notificationDropdown}>
      <div className={styles.header}>
        <h3>اعلان‌ها</h3>
        <button className={styles.closeButton} onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className={styles.notificationsList}>
        {notifications.slice(0, 3).map((notification) => (
          <div 
            key={notification.id} 
            className={`${styles.notificationItem} ${
              notification.unread ? styles.unread : ""
            }`}
          >
            <div className={styles.notificationContent}>
              <h4>{notification.title}</h4>
              <p>{notification.message}</p>
              <span className={styles.time}>{notification.time}</span>
            </div>
            {notification.unread && <div className={styles.unreadIndicator}></div>}
          </div>
        ))}
      </div>
      
      <div className={styles.footer}>
        <button className={styles.markAsRead}>علامت زدن همه به عنوان خوانده شده</button>
        <button className={styles.viewAll} onClick={handleViewAll}>مشاهده همه اعلان‌ها</button>
      </div>
    </div>
  );
}

export default NotificationDropdown;