"use client";

import { useState } from "react";

const initialForm = {
    name: "",
    category: "SHIRT",
    color: "",
    style: "",
    price: "",
    stock: "",
    image: "",
};

export default function AdminProductForm({ onAddProduct }) {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            ...form,
            price: Number(form.price),
            stock: Number(form.stock),
        };

        onAddProduct(newProduct);
        setForm(initialForm);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Add Product</h2>

            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Product name"
                className="w-full border rounded-xl px-4 py-3"
                required
            />

            <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
            >
                <option value="SHIRT">Shirt</option>
                <option value="TROUSER">Trouser</option>
            </select>

            <input
                name="color"
                value={form.color}
                onChange={handleChange}
                placeholder="Color"
                className="w-full border rounded-xl px-4 py-3"
                required
            />

            <input
                name="style"
                value={form.style}
                onChange={handleChange}
                placeholder="Style"
                className="w-full border rounded-xl px-4 py-3"
                required
            />

            <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full border rounded-xl px-4 py-3"
                required
            />

            <input
                name="stock"
                type="number"
                value={form.stock}
                onChange={handleChange}
                placeholder="Stock quantity"
                className="w-full border rounded-xl px-4 py-3"
                required
            />

            <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="/shirts/new-shirt.png or /trousers/new-trouser.png"
                className="w-full border rounded-xl px-4 py-3"
                required
            />

            <button
                type="submit"
                className="w-full px-5 py-3 rounded-xl bg-black text-white hover:opacity-90"
            >
                Add Product
            </button>
        </form>
    );
}