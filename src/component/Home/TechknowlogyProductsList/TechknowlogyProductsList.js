import tech1 from "../../../assets/techimage/tech-1.jpg";
import tech2 from "../../../assets/techimage/tech-2.jpg";
import tech3 from "../../../assets/techimage/tech-3.jpg";
import tech4 from "../../../assets/techimage/tech-4.jpg";
import tech5 from "../../../assets/techimage/tech-5.jpg";
import tech6 from "../../../assets/techimage/tech-6.jpg";
const TechData = [
  {
    id: 1,
    name: "لپ‌تاپ گیمینگ X-Pro",
    category: "لپ‌تاپ",
    price: 48500000,
    img: tech1,
    description:
      "لپ‌تاپی قدرتمند مخصوص بازی با پردازنده نسل جدید، گرافیک حرفه‌ای و سیستم خنک‌کننده پیشرفته؛ مناسب اجرای بازی‌های سنگین و کارهای گرافیکی.",
    specs: {
      cpu: "Intel Core i7-12700H",
      gpu: "NVIDIA GeForce RTX 3060 6GB",
      ram: "16 گیگابایت DDR5",
      ssd: "512 گیگابایت NVMe SSD",
      screen: "15.6 اینچ IPS فول‌اچ‌دی 144Hz",
      weight: "1.62 کیلوگرم",
    },
  },
  {
    id: 2,
    name: "کامپیوتر خانگی SmartPC",
    category: "کامپیوتر رومیزی",
    price: 26500000,
    img: tech2,
    description:
      "سیستمی مناسب کارهای اداری و خانگی با مصرف کم و عملکرد پایدار، مناسب وب‌گردی، آموزش و نرم‌افزارهای سبک.",
    specs: {
      cpu: "Intel Core i5-11400",
      gpu: "Intel UHD 730",
      ram: "8 گیگابایت DDR4",
      ssd: "256 گیگابایت SSD",
      screen: "ندارد (نیاز به مانیتور جدا)",
      weight: "6.4 کیلوگرم کیس",
    },
  },
  {
    id: 3,
    name: "تبلت UltraTab 10",
    category: "تبلت",
    price: 15800000,
    img: tech3,
    description:
      "تبلتی سبک و بادوام با صفحه باکیفیت، مناسب مطالعه، فیلم، کلاس آنلاین و کارهای روزمره.",
    specs: {
      cpu: "MediaTek Helio G80",
      gpu: "Mali-G52",
      ram: "4 گیگابایت",
      ssd: "64 گیگابایت حافظه داخلی",
      screen: "10.1 اینچ IPS",
      weight: "0.48 کیلوگرم",
    },
  },
  {
    id: 4,
    name: "مینی‌پی‌سی CompactBox",
    category: "مینی‌پی‌سی",
    price: 19500000,
    img: tech4,
    description:
      "کامپیوتری کم‌مصرف و کوچک، مناسب اداره‌ها و خانه با امکان نصب پشت مانیتور و حفظ فضای میز.",
    specs: {
      cpu: "Intel Core i5-1240P",
      gpu: "Intel Iris Xe",
      ram: "16 گیگابایت DDR4",
      ssd: "512 گیگابایت NVMe",
      screen: "ندارد",
      weight: "0.95 کیلوگرم",
    },
  },
  {
    id: 5,
    name: "All-in-One مدل Vision24",
    category: "آل‌این‌وان",
    price: 29800000,
    img: tech5,
    description:
      "سیستم آل‌این‌وان با صفحه‌نمایش بزرگ، مناسب طراحی، اداری و چندرسانه‌ای با ظاهری مدرن.",
    specs: {
      cpu: "Intel Core i7-1165G7",
      gpu: "Intel Iris Xe",
      ram: "16 گیگابایت DDR4",
      ssd: "512 گیگابایت SSD",
      screen: "24 اینچ IPS فول‌اچ‌دی",
      weight: "4.9 کیلوگرم",
    },
  },
  {
    id: 6,
    name: "لپ‌تاپ اقتصادی EduBook",
    category: "لپ‌تاپ",
    price: 16200000,
    img: tech6,
    description:
      "لپ‌تاپی مناسب دانشجویان و کارهای روزمره با باتری خوب و عملکرد روان.",
    specs: {
      cpu: "Intel Core i3-1115G4",
      gpu: "Intel UHD",
      ram: "8 گیگابایت DDR4",
      ssd: "256 گیگابایت SSD",
      screen: "15.6 اینچ FHD",
      weight: "1.75 کیلوگرم",
    },
  },
  {
    id: 7,
    name: "تبلت کودکان FunTab",
    category: "تبلت",
    price: 7800000,
    img: tech2,
    description:
      "تبلتی ایمن و مقاوم ویژه کودکان با قابلیت کنترل والدین، مناسب بازی و آموزش.",
    specs: {
      cpu: "Quad-Core 2.0GHz",
      gpu: "PowerVR GE8300",
      ram: "3 گیگابایت",
      ssd: "32 گیگابایت حافظه داخلی",
      screen: "8 اینچ HD",
      weight: "0.42 کیلوگرم",
    },
  },
];
export default TechData;
