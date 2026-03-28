"use client";

import { useState } from "react";
import AdminProductForm from "@/components/AdminProductForm";
import AdminProductTable from "@/components/AdminProductTable";
import { shirts, trousers } from "@/data/sampleProducts";

export default function AdminProductsPage() {
    const [products, setProducts] = useState([...shirts, ...trousers]);

    const handleAddProduct = (product) => {
        setProducts((prev) => [product, ...prev]);
    };

    const handleDeleteProduct = (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <main className="min-h-screen p-6 space-y-6">
            <h1 className="text-3xl font-bold">Manage Products</h1>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-1">
                    <AdminProductForm onAddProduct={handleAddProduct} />
                </div>

                <div className="xl:col-span-2">
                    <AdminProductTable products={products} onDelete={handleDeleteProduct} />
                </div>
            </div>
        </main>
    );
}