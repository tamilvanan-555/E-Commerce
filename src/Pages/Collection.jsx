





import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const lehengaTypes = [
    { name: "Bridal Lehenga", products: [
        { img: "/collections/bridal-1.jfif", name:"Red Bridal",price: 2999, discount: 20, rating: 4 },
        { img: "/collections/bridal-2.jfif", name:"maroon Bridal",price: 3499, discount: 15, rating: 5 },
        { img: "/collections/bridal-3.jfif", name:"Pink Bridal",price: 2599, discount: 10, rating: 4 },
        { img: "/collections/bridal-4.jfif", name:"Rose Bridal",price: 1999, discount: 25, rating: 5 }
    ]},
    { name: "Haldi Lehenga", products: [
        { img: "/collections/haldi-1.jfif",name:"Yellow design Haldi", price: 1999, discount: 18, rating: 4 },
        { img: "/collections/haldi-2.jfif",name:"Yellow Haldi", price: 2799, discount: 12, rating: 5 },
        { img: "/collections/haldi5.jpeg",name:"Pink Haldi", price: 1499, discount: 20, rating: 4 },
        { img: "/collections/haldi-4.jfif",name:"d Yellow Haldi", price: 2199, discount: 10, rating: 5 }
    ]},
   {     
    name: "Half Saree Lehenga", products: [
        { img: "/collections/half-1.jfif", name:"Pink Half Saree",price: 2499, discount: 15, rating: 4 },
        { img: "/collections/half-2.jfif", name:"Red Half Saree",price: 2999, discount: 10, rating: 5 },
        { img: "/collections/halfsaree5.jpeg", name:"Purple Half Saree",price: 1999, discount: 20, rating: 4 },
        { img: "/collections/half-4.jfif", name:"DarkRed Half Saree",price: 1799, discount: 25, rating: 5 }
      ]},
    { name: "Jacket Lehenga", products: [
        { img: "/collections/jacket-1.jfif", name:"Pink Jacket", price: 3499, discount: 10, rating: 4 },
        { img: "/collections/jacket-2.jfif", name:"Purple Jacket", price: 3999, discount: 15, rating: 5 },
        { img: "/collections/jacket-3.jfif", name:"Black Jacket", price: 2999, discount: 20, rating: 4 },
        { img: "/collections/jacket5.jpeg", name:"Red Jacket", price: 2499, discount: 12, rating: 5 }
      ]},
    { name: "Kurti Style Lehenga", products: [
        { img: "/collections/kurti-1.jfif", name:"Red Kurti", price: 1999, discount: 18, rating: 4 },
        { img: "/collections/kurti-2.jfif", name:"Black Kurti", price: 2499, discount: 12, rating: 5 },
        { img: "/collections/kurti-3.jfif", name:"White Kurti", price: 1499, discount: 20, rating: 4 },
        { img: "/collections/kurti-4.jfif", name:"Lightgreen Kurti", price: 2199, discount: 10, rating: 5 }
      ]},
    { name: "Net Lehenga", products: [
        { img: "/collections/net-1.jfif", name:"Maroon Net", price: 2799, discount: 15, rating: 4 },
        { img: "/collections/net-2.jfif", name:"Red Net", price: 3299, discount: 10, rating: 5 },
        { img: "/collections/net-3.jfif", name:"Lightpurple Net", price: 2299, discount: 20, rating: 4 },
        { img: "/collections/net-4.jfif", name:"Lightgreen Net", price: 1999, discount: 25, rating: 5 }
      ]},
      {
    name: "Velvet Lehenga", products: [
        { img: "/collections/velvet-1.jfif", name:"Red Velvet", price: 2999, discount: 10, rating: 4 },
        { img: "/collections/velvet-2.jfif", name:" Brown Velvet", price: 3499, discount: 15, rating: 5 },
        { img: "/collections/velvet-3.jfif", name:" Purple Velvet", price: 2499, discount: 20, rating: 4 },
        { img: "/collections/velvet-4.jfif", name:" Purple Design Velvet", price: 1999, discount: 12, rating: 5 }
      ]}
      
  ];

export default function LehengaCollection() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const toggleFavorite = (id) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check if user is logged in

    if (!isLoggedIn) {
      alert("Please login first to add favorites.");
      navigate("/login"); // Redirect to login page
      return;
    }

    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Lehenga Collection</h1>

      {lehengaTypes.map((lehenga, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-center mb-4">{lehenga.name}</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {lehenga.products.map((item) => {
              const discountedPrice = (item.price * (1 - item.discount / 100)).toFixed(0);
              const isFavorited = favorites.includes(item.id);

              return (
                <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform hover:scale-105 relative">
                  <div className="relative group cursor-pointer">
                    <img src={item.img} alt={item.name} className="w-full h-40 object-cover object-top rounded-md" />
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">{item.discount}% OFF</span>
                    <button onClick={() => toggleFavorite(item.id)} className="absolute top-2 right-2 text-red-500 text-xl">
                      {isFavorited ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-center mt-2">{item.name}</h3>
                  <div className="flex justify-center mt-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={`text-yellow-400 text-lg ${i < item.rating ? "fas fa-star" : "far fa-star"}`} />
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-center mt-2">
                    <span className="line-through text-gray-500">₹{item.price}</span>
                    <span className="ml-2 text-red-600">₹{discountedPrice}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
