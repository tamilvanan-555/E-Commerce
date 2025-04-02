import React from 'react';
import { useState } from "react";

const lehengaTypes = [
  { name: "Bridal Lehenga", images: ["/collections/bridal-1.jfif", "/collections/bridal-2.jfif", "/collections/bridal-3.jfif", "/collections/bridal-4.jfif", "/collections/bridal-5.jfif"] },
  { name: "Haldi Lehenga", images: ["/collections/haldi-1.jfif", "/collections/haldi-2.jfif", "/collections/haldi-3.jfif", "/collections/haldi-4.jfif", "/collections/haldi-5.jfif"] },
  { name: "Half Saree Lehenga", images: ["/collections/half-1.jfif", "/collections/half-2.jfif", "/collections/half-3.jfif", "/collections/half-4.jfif", "/collections/half-5.jfif"] },
  { name: "Jacket Lehenga", images: ["/collections/jacket-1.jfif", "/collections/jacket-2.jfif", "/collections/jacket-3.jfif", "/collections/jacket-4.jfif", "/collections/jacket-1.jfif"] },
  { name: "Kurti Style Lehenga", images: ["/collections/kurti-1.jfif", "/collections/kurti-2.jfif", "/collections/kurti-3.jfif", "/collections/kurti-4.jfif", "/collections/kurti-5.jfif"] },
  { name: "Net Lehenga", images: ["/collections/net-1.jfif", "/collections/net-2.jfif", "/collections/net-3.jfif", "/collections/net-4.jfif", "/collections/net-5.jfif"] },
  { name: "Velvet Lehenga", images: ["/collections/velvet-1.jfif", "/collections/velvet-2.jfif", "/collections/velvet-3.jfif", "/collections/velvet-4.jfif", "/collections/velvet-5.jfif"] },
];

export default function LehengaCollection() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Lehenga Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lehengaTypes.map((lehenga, index) => (
          <div key={index} className="p-4 shadow-lg rounded-2xl bg-white">
            <h2 className="text-xl font-semibold mb-4">{lehenga.name}</h2>
            <div className="grid grid-cols-2 gap-2">
              {lehenga.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={lehenga.name}
                  className="rounded-lg shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300"
                  onMouseEnter={() => setHoveredImage(img)}
                  onMouseLeave={() => setHoveredImage(null)}
                />
              ))}
            </div>
            {hoveredImage && (
              <div
                className="fixed top-10 right-10 bg-white p-4 shadow-lg rounded-xl z-50"
              >
                <img src={hoveredImage} alt="Hovered Lehenga" className="w-64 h-64 object-cover rounded-lg" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
