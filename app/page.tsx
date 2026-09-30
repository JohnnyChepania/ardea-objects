'use client';

import { useMemo, useState } from 'react';
import { CartDrawer } from '@/components/CartDrawer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { ProductFilters, FilterCategory } from '@/components/ProductFilters';
import { SectionHeading } from '@/components/SectionHeading';
import { Product, products } from '@/data/products';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Все');
  const [sort, setSort] = useState('popular');
  const [selected, setSelected] = useState<Product | null>(null);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);

  const filteredProducts = useMemo(() => { const filtered = activeFilter === 'Все' ? [...products] : products.filter((product) => product.category === activeFilter); if (sort === 'price-up') return filtered.sort((a, b) => a.price - b.price); if (sort === 'price-down') return filtered.sort((a, b) => b.price - a.price); if (sort === 'new') return filtered.sort((a, b) => b.id - a.id); return filtered; }, [activeFilter, sort]);
  const addToCart = (product: Product) => setCart((current) => { const existing = current.find((item) => item.product.id === product.id); if (existing) return current.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item); return [...current, { product, quantity: 1 }]; });
  const changeQuantity = (id: number, delta: number) => setCart((current) => current.map((item) => item.product.id === id ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0));
  const removeFromCart = (id: number) => setCart((current) => current.filter((item) => item.product.id !== id));
  const showDemoCheckout = () => window.alert('Демонстрационная версия. Оформление заказа временно недоступно.');
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const featured = products.slice(0, 8);

  return <main id="top"><Header cartCount={cartCount} onCart={() => setCartOpen(true)} onMenu={() => setMenuOpen((open) => !open)} />
    <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}><a href="#collection" onClick={() => setMenuOpen(false)}>Коллекция</a><a href="#catalog" onClick={() => setMenuOpen(false)}>Мебель</a><a href="#catalog" onClick={() => setMenuOpen(false)}>Освещение</a><a href="#catalog" onClick={() => setMenuOpen(false)}>Аксессуары</a><a href="#about" onClick={() => setMenuOpen(false)}>О бренде</a></div>
    <section className="hero"><div className="hero-image"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90" alt="Светлый интерьер с мебелью ARDEA OBJECTS" /></div><div className="hero-overlay" /><div className="hero-content"><span className="eyebrow">Новая коллекция · 2026</span><h1>Предметы,<br />которые задают<br /><em>характер пространству.</em></h1><p>Мебель и объекты с чистой формой, натуральными материалами и вниманием к каждой детали.</p><a href="#catalog" className="primary-button">Смотреть коллекцию <span>↘</span></a></div><div className="hero-scroll">Листайте, чтобы исследовать <span>↓</span></div></section>
    <section className="intro section-container" id="collection"><div className="intro-label">01 / 04</div><SectionHeading eyebrow="ARDEA OBJECTS" title="Исследуйте коллекцию" description="Предметы с характером для пространств, в которых хочется оставаться." /><div className="categories-grid"><a href="#catalog" className="category-card category-main"><img src="https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=85" alt="Мебель ARDEA OBJECTS" /><div><span>01</span><h3>Мебель</h3><p>Кресла, столы и диваны</p></div></a><a href="#catalog" className="category-card"><img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=85" alt="Освещение ARDEA OBJECTS" /><div><span>02</span><h3>Освещение</h3><p>Светильники для жилых пространств</p></div></a><a href="#catalog" className="category-card"><img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=85" alt="Аксессуары ARDEA OBJECTS" /><div><span>03</span><h3>Аксессуары</h3><p>Объекты и детали интерьера</p></div></a><a href="#catalog" className="category-card material-card"><div><span>04</span><h3>Материалы</h3><p>Дерево, камень, металл</p></div><span className="category-arrow">↗</span></a></div></section>
    <section className="featured section-container"><div className="featured-header"><SectionHeading eyebrow="Избранное" title="Избранные объекты" /><a href="#catalog" className="text-link">Смотреть все <span>↗</span></a></div><div className="product-grid featured-grid">{featured.map((product) => <ProductCard key={product.id} product={product} onOpen={setSelected} onAdd={addToCart} />)}</div></section>
    <section className="editorial"><div className="editorial-image"><img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=90" alt="Тёплый интерьер с предметами ARDEA OBJECTS" /></div><div className="editorial-copy"><span className="eyebrow">Тихая выразительность</span><h2>Меньше предметов.<br /><em>Больше характера.</em></h2><p>Мы верим в силу выверенных деталей. Вещи не должны заполнять пространство — они должны вступать с ним в диалог.</p><a href="#about" className="line-link">История бренда <span>↗</span></a></div></section>
    <section className="catalog section-container" id="catalog"><div className="catalog-heading"><SectionHeading eyebrow="Все предметы · 14 объектов" title="Вся коллекция" /></div><ProductFilters active={activeFilter} setActive={setActiveFilter} sort={sort} setSort={setSort} /><div className="product-grid catalog-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onOpen={setSelected} onAdd={addToCart} />)}</div></section>
    <section className="about section-container" id="about"><div className="about-number">03<br /><span>О бренде</span></div><div className="about-copy"><h2>Мы выбираем вещи,<br /><em>которые остаются надолго.</em></h2><p>ARDEA OBJECTS создаёт коллекции для пространств, где форма, материал и функция находятся в равновесии.</p><div className="principles"><div><span>01</span><h3>Материал</h3><p>Честные фактуры,<br />которые хочется трогать.</p></div><div><span>02</span><h3>Форма</h3><p>Точные линии<br />и спокойные объёмы.</p></div><div><span>03</span><h3>Тактильность</h3><p>Вещи, которые<br />создают ощущение дома.</p></div></div></div></section>
    <section className="newsletter section-container" id="newsletter"><div><span className="eyebrow">Будьте в курсе</span><h2>Получайте новые<br /><em>коллекции первыми</em></h2></div><div className="newsletter-form-wrap">{newsletterSent ? <p className="success-message">Спасибо — мы будем держать вас в курсе.</p> : <><p>Новости бренда, новые предметы и истории о материалах — без лишних писем.</p><form onSubmit={(event) => { event.preventDefault(); setNewsletterSent(true); }}><input type="email" placeholder="Ваш email" required /><button className="primary-button" type="submit">Подписаться <span>↗</span></button></form></>}</div></section>
    <Footer />
    {selected && <ProductDetail product={selected} onClose={() => setSelected(null)} onAdd={(product) => { addToCart(product); setSelected(null); setCartOpen(true); }} />}
    {cartOpen && <CartDrawer items={cart} onClose={() => setCartOpen(false)} onChange={changeQuantity} onRemove={removeFromCart} onCheckout={showDemoCheckout} />}
  </main>;
}
