export type Category = 'Мебель' | 'Освещение' | 'Аксессуары';

export type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  materials: string[];
  dimensions: string;
  badge?: string;
};

export const products: Product[] = [
  { id: 1, name: 'Кресло Forma', category: 'Мебель', price: 89000, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=85', description: 'Мягкие линии, натуральная шерсть и дубовый каркас. Forma создано для долгих разговоров и тихих вечеров.', materials: ['Дуб', 'Шерсть', 'Сталь'], dimensions: '78 × 82 × 76 см', badge: 'Бестселлер' },
  { id: 2, name: 'Стол Arco', category: 'Мебель', price: 124000, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=85', description: 'Скульптурный стол с выразительной геометрией и спокойной фактурой натурального дуба.', materials: ['Дуб', 'Масло'], dimensions: '180 × 90 × 74 см' },
  { id: 3, name: 'Светильник Lumo', category: 'Освещение', price: 38000, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85', description: 'Мягкий рассеянный свет и графичная форма для камерных жилых пространств.', materials: ['Алюминий', 'Стекло'], dimensions: '28 × 28 × 42 см', badge: 'Новинка' },
  { id: 4, name: 'Диван Nera', category: 'Мебель', price: 189000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85', description: 'Глубокая посадка, архитектурный силуэт и обивка из плотного тактильного текстиля.', materials: ['Берёзовая фанера', 'Лён', 'Пенополиуретан'], dimensions: '240 × 98 × 72 см' },
  { id: 5, name: 'Тумба Axis', category: 'Мебель', price: 76000, image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=85', description: 'Лаконичная тумба на тонком основании с продуманным хранением.', materials: ['Орех', 'Сталь'], dimensions: '90 × 42 × 58 см' },
  { id: 6, name: 'Ваза Alto', category: 'Аксессуары', price: 18000, image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=85', description: 'Объект ручной работы с выразительным объёмом и матовой поверхностью.', materials: ['Керамика'], dimensions: '18 × 18 × 32 см' },
  { id: 7, name: 'Кресло Linea', category: 'Мебель', price: 94000, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=85', description: 'Тонкая линия спинки, мягкое сиденье и спокойная палитра для современного интерьера.', materials: ['Бук', 'Шерсть'], dimensions: '72 × 78 × 80 см' },
  { id: 8, name: 'Лампа Forma', category: 'Освещение', price: 42000, image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=85', description: 'Настольная лампа с балансом света и материальности.', materials: ['Камень', 'Латунь', 'Стекло'], dimensions: '24 × 24 × 38 см' },
  { id: 9, name: 'Зеркало Riva', category: 'Аксессуары', price: 32000, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85', description: 'Мягкая овальная форма в тонкой раме из окрашенного металла.', materials: ['Стекло', 'Металл'], dimensions: '60 × 4 × 90 см' },
  { id: 10, name: 'Стул Noto', category: 'Мебель', price: 36000, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85', description: 'Универсальный стул с чистой конструкцией и тёплой деревянной фактурой.', materials: ['Ясень', 'Текстиль'], dimensions: '48 × 52 × 78 см' },
  { id: 11, name: 'Подсвечник Sol', category: 'Аксессуары', price: 9500, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85', description: 'Небольшой объект из литого металла, который меняется в разном свете.', materials: ['Латунь'], dimensions: '10 × 10 × 16 см' },
  { id: 12, name: 'Торшер Onda', category: 'Освещение', price: 68000, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85', description: 'Высокий торшер с направленным светом и выразительным профилем.', materials: ['Сталь', 'Лён'], dimensions: '42 × 42 × 155 см', badge: 'Новинка' },
  { id: 13, name: 'Полка Vela', category: 'Мебель', price: 28000, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1200&q=85', description: 'Воздушная настенная полка для книг, керамики и любимых находок.', materials: ['Дуб', 'Сталь'], dimensions: '100 × 24 × 20 см' },
  { id: 14, name: 'Чаша Terra', category: 'Аксессуары', price: 12000, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=85', description: 'Тактильная чаша из природной глины с мягким неровным краем.', materials: ['Керамика'], dimensions: '26 × 26 × 8 см' },
];

export const formatPrice = (price: number) => `${price.toLocaleString('ru-RU')} ₽`;
