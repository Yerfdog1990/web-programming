import Link from "next/link";

export default function HomePage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl bg-white rounded-3xl shadow-xl p-10 text-center">
                <h1 className="text-5xl font-bold mb-4">Boutique Mix & Match</h1>
                <p className="text-gray-600 text-lg mb-8">
                    Let your customers visually combine shirts and trousers before ordering.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/builder"
                        className="px-6 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                    >
                        Start Matching
                    </Link>

                    <Link
                        href="/admin"
                        className="px-6 py-3 rounded-2xl border border-black hover:bg-black hover:text-white transition"
                    >
                        Admin Dashboard
                    </Link>
                </div>
            </div>
        </main>
    );
}