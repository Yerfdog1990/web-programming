"use client";

import { useMemo, useState } from "react";
import OutfitCanvas from "@/components/OutfitCanvas";
import ProductGrid from "@/components/ProductGrid";
import ProductFilters from "@/components/ProductFilters";
import OutfitSummary from "@/components/OutfitSummary";
import { shirts, trousers } from "@/data/sampleProducts";
import { pairings } from "@/data/samplePairings";

export default function BuilderPage() {
    const [selectedShirt, setSelectedShirt] = useState(shirts[0]);
    const [selectedTrouser, setSelectedTrouser] = useState(trousers[0]);

    const [shirtColor, setShirtColor] = useState("");
    const [shirtStyle, setShirtStyle] = useState("");

    const shirtColors = [...new Set(shirts.map((s) => s.color))];
    const shirtStyles = [...new Set(shirts.map((s) => s.style))];

    const filteredShirts = useMemo(() => {
        return shirts.filter((shirt) => {
            const colorMatch = shirtColor ? shirt.color === shirtColor : true;
            const styleMatch = shirtStyle ? shirt.style === shirtStyle : true;
            return colorMatch && styleMatch;
        });
    }, [shirtColor, shirtStyle]);

    const recommendedTrouserIds = pairings
        .filter((p) => p.topProductId === selectedShirt?.id)
        .sort((a, b) => b.score - a.score)
        .map((p) => p.bottomProductId);

    const recommendedTrousers = trousers.filter((t) =>
        recommendedTrouserIds.includes(t.id)
    );

    return (
        <main className="min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Mix & Match Builder</h1>
            <h2 className="text-3xl font-bold mb-6">Choose different products in our store and match then to own your look</h2>
            <div className="mb-6">
                <ProductFilters
                    selectedColor={shirtColor}
                    setSelectedColor={setShirtColor}
                    selectedStyle={shirtStyle}
                    setSelectedStyle={setShirtStyle}
                    colors={shirtColors}
                    styles={shirtStyles}
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                <div className="xl:col-span-1">
                    <ProductGrid
                        title="Choose a Shirt"
                        items={filteredShirts}
                        selectedItem={selectedShirt}
                        onSelect={setSelectedShirt}
                    />
                </div>

                <div className="xl:col-span-2 space-y-6">
                    <OutfitCanvas shirt={selectedShirt} trouser={selectedTrouser} />

                    <ProductGrid
                        title="Recommended Trousers"
                        items={recommendedTrousers.length ? recommendedTrousers : trousers}
                        selectedItem={selectedTrouser}
                        onSelect={setSelectedTrouser}
                    />
                </div>

                <div className="xl:col-span-1">
                    <OutfitSummary shirt={selectedShirt} trouser={selectedTrouser} />
                </div>
            </div>
        </main>
    );
}