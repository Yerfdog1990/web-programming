"use client";

export default function OutfitSummary({ shirt, trouser }) {
    const total = (shirt?.price || 0) + (trouser?.price || 0);

    return (
        <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-xl font-semibold mb-4">Selected Outfit</h2>

            <div className="space-y-3">
                <div>
                    <p className="text-sm text-gray-500">Shirt</p>
                    <p className="font-medium">{shirt?.name || "None selected"}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Trouser</p>
                    <p className="font-medium">{trouser?.name || "None selected"}</p>
                </div>

                <div className="pt-4 border-t">
                    <p className="text-lg font-semibold">Total: ${total}</p>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                    <button className="px-5 py-3 rounded-xl border border-black hover:bg-black hover:text-white transition">
                        Save Outfit
                    </button>

                    <button className="px-5 py-3 rounded-xl bg-black text-white hover:opacity-90">
                        Add Full Look to Cart
                    </button>

                    <button className="px-5 py-3 rounded-xl bg-gray-200 hover:bg-gray-300">
                        Reserve This Look
                    </button>
                </div>
            </div>
        </div>
    );
}