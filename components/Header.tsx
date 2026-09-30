type HeaderProps = { cartCount: number; onCart: () => void; onMenu: () => void };

export function Header({ cartCount, onCart, onMenu }: HeaderProps) {
  return <header className="site-header"><a href="#top" className="brand">ARDEA <span>OBJECTS</span></a><nav className="desktop-nav"><a href="#collection">Коллекция</a><a href="#catalog">Мебель</a><a href="#catalog">Освещение</a><a href="#catalog">Аксессуары</a><a href="#about">О бренде</a></nav><div className="header-actions"><button aria-label="Поиск" className="action-search"><span className="icon-search" /> <span className="action-label">Поиск</span></button><button aria-label="Избранное" className="favorite-icon">♡</button><button aria-label="Открыть корзину" className="cart-button" onClick={onCart}><span>Корзина</span><b>{cartCount}</b></button><button aria-label="Открыть меню" className="mobile-menu-button" onClick={onMenu}><span /><span /></button></div></header>;
}
