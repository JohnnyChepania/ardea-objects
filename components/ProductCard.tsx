import { Product, formatPrice } from '@/data/products';

type ProductCardProps = { product: Product; onOpen: (product: Product) => void; onAdd: (product: Product) => void };

export function ProductCard({ product, onOpen, onAdd }: ProductCardProps) {
  return (
    <article className="product-card">
      <button className="product-image-wrap" onClick={() => onOpen(product)} aria-label={`Открыть ${product.name}`}>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} />
        <span className="product-view">Смотреть объект <span>↗</span></span>
      </button>
      <div className="product-meta">
        <div>
          <span className="product-category">{product.category}</span>
          <h3>{product.name}</h3>
        </div>
        <strong>{formatPrice(product.price)}</strong>
      </div>
      <button className="add-product" onClick={() => onAdd(product)}>Добавить в корзину <span>+</span></button>
    </article>
  );
}
