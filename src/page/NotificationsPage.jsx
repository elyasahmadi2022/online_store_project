import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotificationsPage.module.css';

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
  {
    id: 4,
    title: "امتیازدهی به دوره",
    message: "دوره 'مبانی طراحی وب' را تکمیل کرده‌اید. لطفاً به آن امتیاز دهید.",
    time: "۳ روز پیش",
    unread: false,
  },
  {
    id: 5,
    title: "کوپن هدیه",
    message: "یک کوپن هدیه ۱۰۰ هزار تومانی برای دوره‌های جدید دریافت کرده‌اید.",
    time: "۴ روز پیش",
    unread: true,
  },
  {
    id: 6,
    title: "آخرین شانس",
    message: "تخفیف ویژه روی دوره 'پایتون پیشرفته' تنها تا فردا شب.",
    time: "۵ روز پیش",
    unread: false,
  },
];

function NotificationsPage() {
  const navigate = useNavigate();

  const markAllAsRead = () => {
    // In a real app, this would update the notification status
    alert('همه اعلان‌ها به عنوان خوانده شده علامت زده شدند');
  };

  return (
    <div className={styles.notificationsPage}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
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
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <h1>اعلان‌ها</h1>
        <button className={styles.markAllButton} onClick={markAllAsRead}>
          علامت زدن همه به عنوان خوانده شده
        </button>
      </div>
      
      <div className={styles.notificationsList}>
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`${styles.notificationItem} ${
              notification.unread ? styles.unread : ""
            }`}
          >
            <div className={styles.notificationContent}>
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <div className={styles.footer}>
                <span className={styles.time}>{notification.time}</span>
                {notification.unread && (
                  <span className={styles.unreadTag}>جدید</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsPage;