import ProductCard from "./ProductCard";

export default function ProductGrid({ title, items, selectedItem, onSelect }) {
    return (
        <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item) => (
                    <ProductCard
                        key={item.id}
                        item={item}
                        selected={selectedItem?.id === item.id}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        </div>
    );
}