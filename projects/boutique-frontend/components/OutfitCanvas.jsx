"use client";

import { Stage, Layer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";

function OutfitLayer({ src, x, y, width, height }) {
    const [image] = useImage(src);
    return image ? (
        <KonvaImage image={image} x={x} y={y} width={width} height={height} />
    ) : null;
}

export default function OutfitCanvas({ shirt, trouser }) {
    const [mannequin] = useImage("/mannequin.png");

    return (
        <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Outfit Preview</h2>

            <div className="flex justify-center">
                <Stage width={380} height={580}>
                    <Layer>
                        {mannequin && (
                            <KonvaImage image={mannequin} x={45} y={15} width={290} height={550} />
                        )}

                        {shirt && (
                            <OutfitLayer
                                src={shirt.image}
                                x={85}
                                y={85}
                                width={210}
                                height={210}
                            />
                        )}

                        {trouser && (
                            <OutfitLayer
                                src={trouser.image}
                                x={100}
                                y={275}
                                width={180}
                                height={235}
                            />
                        )}
                    </Layer>
                </Stage>
            </div>
        </div>
    );
}