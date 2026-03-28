"use client";

import { useState } from "react";

export default function PairingManager({ shirts, trousers, initialPairings }) {
    const [selectedShirtId, setSelectedShirtId] = useState(shirts[0]?.id || "");
    const [selectedTrouserId, setSelectedTrouserId] = useState(trousers[0]?.id || "");
    const [score, setScore] = useState(90);
    const [pairings, setPairings] = useState(initialPairings);

    const handleAddPairing = () => {
        const exists = pairings.some(
            (p) =>
                p.topProductId === Number(selectedShirtId) &&
                p.bottomProductId === Number(selectedTrouserId)
        );

        if (exists) {
            alert("This pairing already exists.");
            return;
        }

        const newPairing = {
            topProductId: Number(selectedShirtId),
            bottomProductId: Number(selectedTrouserId),
            score: Number(score),
        };

        setPairings((prev) => [...prev, newPairing]);
    };

    const handleDelete = (indexToDelete) => {
        setPairings((prev) => prev.filter((_, index) => index !== indexToDelete));
    };

    const getShirtName = (id) => shirts.find((s) => s.id === id)?.name || "Unknown Shirt";
    const getTrouserName = (id) => trousers.find((t) => t.id === id)?.name || "Unknown Trouser";

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Create Pairing</h2>

                <div>
                    <label className="block text-sm font-medium mb-1">Select Shirt</label>
                    <select
                        value={selectedShirtId}
                        onChange={(e) => setSelectedShirtId(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3"
                    >
                        {shirts.map((shirt) => (
                            <option key={shirt.id} value={shirt.id}>
                                {shirt.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Select Trouser</label>
                    <select
                        value={selectedTrouserId}
                        onChange={(e) => setSelectedTrouserId(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3"
                    >
                        {trousers.map((trouser) => (
                            <option key={trouser.id} value={trouser.id}>
                                {trouser.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Match Score</label>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3"
                    />
                </div>

                <button
                    onClick={handleAddPairing}
                    className="w-full px-5 py-3 rounded-xl bg-black text-white hover:opacity-90"
                >
                    Add Pairing
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4">Current Pairings</h2>

                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="border-b">
                        <th className="py-3">Shirt</th>
                        <th className="py-3">Trouser</th>
                        <th className="py-3">Score</th>
                        <th className="py-3">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pairings.map((pairing, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-3">{getShirtName(pairing.topProductId)}</td>
                            <td className="py-3">{getTrouserName(pairing.bottomProductId)}</td>
                            <td className="py-3">{pairing.score}</td>
                            <td className="py-3">
                                <button
                                    onClick={() => handleDelete(index)}
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
        </div>
    );
}