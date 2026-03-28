"use client";

import PairingManager from "@/components/PairingManager";
import { shirts, trousers } from "@/data/sampleProducts";
import { pairings } from "@/data/samplePairings";

export default function AdminPairingsPage() {
    return (
        <main className="min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Manage Outfit Pairings</h1>

            <PairingManager
                shirts={shirts}
                trousers={trousers}
                initialPairings={pairings}
            />
        </main>
    );
}