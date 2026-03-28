"use client";

export default function AdminProductTable({ products, onDelete }) {
    return (
        <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-4">Current Products</h2>

            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="border-b">
                    <th className="py-3">Image</th>
                    <th className="py-3">Name</th>
                    <th className="py-3">Category</th>
                    <th className="py-3">Color</th>
                    <th className="py-3">Style</th>
                    <th className="py-3">Price</th>
                    <th className="py-3">Stock</th>
                    <th className="py-3">Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id} className="border-b">
                        <td className="py-3">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-14 h-14 object-contain rounded-lg bg-gray-100"
                            />
                        </td>
                        <td className="py-3">{product.name}</td>
                        <td className="py-3">{product.category}</td>
                        <td className="py-3">{product.color}</td>
                        <td className="py-3">{product.style}</td>
                        <td className="py-3">${product.price}</td>
                        <td className="py-3">{product.stock}</td>
                        <td className="py-3">
                            <button
                                onClick={() => onDelete(product.id)}
                                className="px-3 py-2 rounded-lg bg-red-100 hover:bg-red-200"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}