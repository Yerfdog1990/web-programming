import Link from "next/link";

export default function AdminPage() {
    return (
        <main className="min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                    href="/admin/products"
                    className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition"
                >
                    <h2 className="text-2xl font-semibold mb-2">Manage Products</h2>
                    <p className="text-gray-600">
                        Add shirts, trousers, prices, stock, styles, and images.
                    </p>
                </Link>

                <Link
                    href="/admin/pairings"
                    className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition"
                >
                    <h2 className="text-2xl font-semibold mb-2">Manage Pairings</h2>
                    <p className="text-gray-600">
                        Control which shirts match which trousers.
                    </p>
                </Link>
            </div>
        </main>
    );
}