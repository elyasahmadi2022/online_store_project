// Sample product data for demonstration purposes
const sampleProducts = [
  {
    id: '1',
    title: 'لپ‌تاپ پریمیوم',
    category: 'لپ‌تاپ با عملکرد بالا',
    description: 'عملکرد پیشرفته با پردازنده اینتل Core i9، 32GB رم و یک SSD 1TB در طراحی ظریف و سبک.',
    features: ['صفحه نمایش 4K', 'باتری 16 ساعته', 'تاندربولت 4'],
    rating: 4.8,
    reviewsCount: 245,
    thumbnail: 'https://images.unsplash.com/photo-1544237526-cae15a57ed1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkwNDY5NjB8&ixlib=rb-4.1.0&q=85',
    priceOriginal: 2499.99,
    priceDiscounted: 1999.99,
    isInStock: true,
    isHotSale: true
  },
  {
    id: '2',
    title: 'هدفون بی‌سیم بلوتوثی',
    category: 'تجهیزات صوتی',
    description: 'تجربه صوتی بی‌نظیر با صدای فراصوت و قابلیت حذف نویز پیشرفته برای کیفیت صدای بی‌نظیر.',
    features: ['حذف نویز فعال', 'باتری 30 ساعته', 'اتصال چندگانه'],
    rating: 4.7,
    reviewsCount: 12845,
    thumbnail: 'https://placehold.co/300x180/4CAF50/white?text=Headphones',
    priceOriginal: 199.99,
    priceDiscounted: 129.99,
    isInStock: true,
    isHotSale: false
  },
  {
    id: '3',
    title: 'ساعت هوشمند سری ۵',
    category: 'ساعت هوشمند',
    description: 'ساعت هوشمند پیشرفته با قابلیت‌های ردیابی سلامت، GPS داخلی و مقاومت در برابر آب.',
    features: ['مقاوم در برابر آب', 'ردیابی سلامت', 'GPS داخلی'],
    rating: 4.9,
    reviewsCount: 8765,
    thumbnail: 'https://placehold.co/300x180/2196F3/white?text=Smart+Watch',
    priceOriginal: 299.99,
    priceDiscounted: 199.99,
    isInStock: true,
    isHotSale: true
  },
  {
    id: '4',
    title: 'پاوربانک قابل حمل ۲۰۰۰۰ میلی‌آمپر',
    category: 'تجهیزات جانبی',
    description: 'پاوربانک ظرفیت بالا با شارژ سریع و قابلیت شارژ چندگانه برای تمام دستگاه‌های شما.',
    features: ['شارژ سریع', 'خروجی USB-C', 'شارژ چندگانه'],
    rating: 4.6,
    reviewsCount: 22453,
    thumbnail: 'https://placehold.co/300x180/FF9800/white?text=Power+Bank',
    priceOriginal: 89.99,
    priceDiscounted: 59.99,
    isInStock: true,
    isHotSale: false
  },
  {
    id: '5',
    title: 'تلویزیون هوشمند اولترا اچ‌دی ۵۵ اینچ',
    category: 'تلویزیون',
    description: 'تجربه تماشای فیلم بی‌نظیر با تصویر 4K، HDR و سیستم صوتی پیشرفته Dolby Atmos.',
    features: ['تصویر 4K', 'HDR', 'Dolby Atmos'],
    rating: 4.8,
    reviewsCount: 5421,
    thumbnail: 'https://placehold.co/300x180/9C27B0/white?text=Smart+TV',
    priceOriginal: 899.99,
    priceDiscounted: 699.99,
    isInStock: true,
    isHotSale: true
  },
  {
    id: '6',
    title: 'لپ‌تاپ گیمینگ حرفه‌ای',
    category: 'لپ‌تاپ گیمینگ',
    description: 'لپ‌تاپ گیمینگ با پردازنده آخرین نسل، کارت گرافیک RTX و سیستم خنک‌کننده پیشرفته.',
    features: ['کارت گرافیک RTX', 'پردازنده آخرین نسل', 'سیستم خنک‌کننده'],
    rating: 4.9,
    reviewsCount: 3765,
    thumbnail: 'https://placehold.co/300x180/E91E63/white?text=Gaming+Laptop',
    priceOriginal: 1499.99,
    priceDiscounted: 1299.99,
    isInStock: true,
    isHotSale: false
  }
];

export default sampleProducts;