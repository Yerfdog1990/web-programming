"use client";

export default function ProductFilters({ selectedColor, setSelectedColor, selectedStyle, setSelectedStyle, colors, styles }) {
    return (
        <div className="bg-white rounded-2xl shadow p-4 flex flex-wrap gap-4">
            <div>
                <label className="block text-sm font-medium mb-1">Color</label>
                <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="border rounded-xl px-3 py-2"
                >
                    <option value="">All</option>
                    {colors.map((color) => (
                        <option key={color}>{color}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Style</label>
                <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="border rounded-xl px-3 py-2"
                >
                    <option value="">All</option>
                    {styles.map((style) => (
                        <option key={style}>{style}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}