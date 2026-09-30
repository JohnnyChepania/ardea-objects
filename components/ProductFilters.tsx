export type FilterCategory = 'Все' | 'Мебель' | 'Освещение' | 'Аксессуары';

type ProductFiltersProps = { active: FilterCategory; setActive: (category: FilterCategory) => void; sort: string; setSort: (sort: string) => void };

export function ProductFilters({ active, setActive, sort, setSort }: ProductFiltersProps) {
  const categories: FilterCategory[] = ['Все', 'Мебель', 'Освещение', 'Аксессуары'];
  return (
    <div className="filters-row">
      <div className="filter-tabs" role="tablist" aria-label="Фильтр каталога">
        {categories.map((category) => <button key={category} className={active === category ? 'active' : ''} onClick={() => setActive(category)}>{category}</button>)}
      </div>
      <label className="sort-select">Сортировка
        <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Сортировка товаров">
          <option value="popular">По популярности</option>
          <option value="price-up">По цене: сначала дешевле</option>
          <option value="price-down">По цене: сначала дороже</option>
          <option value="new">По новизне</option>
        </select>
      </label>
    </div>
  );
}
