import React from "react";

const lehengaTypes = [
  { name: "Bridal Lehenga", products: [
      { img: "/collections/bridal-1.jfif", price: 2999, discount: 20, rating: 4 },
      { img: "/collections/bridal-2.jfif", price: 3499, discount: 15, rating: 5 },
      { img: "/collections/bridal-3.jfif", price: 2599, discount: 10, rating: 4 },
      { img: "/collections/bridal-4.jfif", price: 1999, discount: 25, rating: 5 }
  ]},
  { name: "Haldi Lehenga", products: [
      { img: "/collections/haldi-1.jfif", price: 1999, discount: 18, rating: 4 },
      { img: "/collections/haldi-2.jfif", price: 2799, discount: 12, rating: 5 },
      { img: "/collections/haldi-3.jfif", price: 1499, discount: 20, rating: 4 },
      { img: "/collections/haldi-4.jfif", price: 2199, discount: 10, rating: 5 }
  ]},
 {
  name: "Half Saree Lehenga", products: [
      { img: "/collections/half-1.jfif", price: 2499, discount: 15, rating: 4 },
      { img: "/collections/half-2.jfif", price: 2999, discount: 10, rating: 5 },
      { img: "/collections/half-3.jfif", price: 1999, discount: 20, rating: 4 },
      { img: "/collections/half-4.jfif", price: 1799, discount: 25, rating: 5 }
    ]},
  { name: "Jacket Lehenga", products: [
      { img: "/collections/jacket-1.jfif", price: 3499, discount: 10, rating: 4 },
      { img: "/collections/jacket-2.jfif", price: 3999, discount: 15, rating: 5 },
      { img: "/collections/jacket-3.jfif", price: 2999, discount: 20, rating: 4 },
      { img: "/collections/jacket-4.jfif", price: 2499, discount: 12, rating: 5 }
    ]},
  { name: "Kurti Style Lehenga", products: [
      { img: "/collections/kurti-1.jfif", price: 1999, discount: 18, rating: 4 },
      { img: "/collections/kurti-2.jfif", price: 2499, discount: 12, rating: 5 },
      { img: "/collections/kurti-3.jfif", price: 1499, discount: 20, rating: 4 },
      { img: "/collections/kurti-4.jfif", price: 2199, discount: 10, rating: 5 }
    ]},
  { name: "Net Lehenga", products: [
      { img: "/collections/net-1.jfif", price: 2799, discount: 15, rating: 4 },
      { img: "/collections/net-2.jfif", price: 3299, discount: 10, rating: 5 },
      { img: "/collections/net-3.jfif", price: 2299, discount: 20, rating: 4 },
      { img: "/collections/net-4.jfif", price: 1999, discount: 25, rating: 5 }
    ]},
    {
  name: "Velvet Lehenga", products: [
      { img: "/collections/velvet-1.jfif", price: 2999, discount: 10, rating: 4 },
      { img: "/collections/velvet-2.jfif", price: 3499, discount: 15, rating: 5 },
      { img: "/collections/velvet-3.jfif", price: 2499, discount: 20, rating: 4 },
      { img: "/collections/velvet-4.jfif", price: 1999, discount: 12, rating: 5 }
    ]}
    
];

export default function LehengaCollection() {
  return (
    <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-200 mt-18">
      <h1 className="text-3xl font-bold text-center mb-6 ">Lehenga Collection</h1>
      {lehengaTypes.map((lehenga, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-center mb-4 animate-bounce">{lehenga.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lehenga.products.map((item, imgIndex) => {
              const discountedPrice = (item.price * (1 - item.discount / 100)).toFixed(0);
              return (
                <div key={imgIndex} className="bg-white shadow-lg rounded-lg p-4 transition-transform hover:scale-105 relative">
                  <div className="relative group">
                    <img src={item.img} alt={lehenga.name} className="w-full h-40 object-cover object-top rounded-md group-hover:scale-110 transition" />
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">{item.discount}% OFF</span>
                  </div>
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-bold">{lehenga.name}</h3>
                    <div className="flex justify-center mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`text-yellow-400 text-lg ${i < item.rating ? "fas fa-star" : "far fa-star"}`} />
                      ))}
                    </div>
                    <p className="text-lg font-semibold mt-2">
                      <span className="line-through text-gray-500">₹{item.price}</span>
                      <span className="ml-2 text-red-600">₹{discountedPrice}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

