"use client";

export default function ProductCard({ item, selected, onSelect }) {
    return (
        <button
            onClick={() => onSelect(item)}
            className={`bg-white rounded-2xl shadow p-4 text-left border transition hover:shadow-md ${
                selected ? "border-black ring-2 ring-black" : "border-gray-200"
            }`}
        >
            <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                />
            </div>

            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.color} • {item.style}</p>
            <p className="mt-2 font-medium">${item.price}</p>
            <p className="text-xs text-gray-400 mt-1">Stock: {item.stock}</p>
        </button>
    );
}