// import React, { useState } from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const lehengaTypes = [
//   { name: "Bridal Lehenga", products: [
//       { id:1, img: "/collections/bridal-1.jfif", name:"Red Bridal",price: 2999, discount: 20, rating: 4 },
//       { id:2 ,img: "/collections/bridal-2.jfif", name:"maroon Bridal",price: 3499, discount: 15, rating: 5 },
//       { id:3,img: "/collections/bridal-3.jfif", name:"Pink Bridal",price: 2599, discount: 10, rating: 4 },
//       { id:4,img: "/collections/bridal-4.jfif", name:"Rose Bridal",price: 1999, discount: 25, rating: 5 }
//   ]},
//   { name: "Haldi Lehenga", products: [
//       {id:5, img: "/collections/haldi-1.jfif",name:"Yellow design Haldi", price: 1999, discount: 18, rating: 4 },
//       {id:6, img: "/collections/haldi-2.jfif",name:"Yellow Haldi", price: 2799, discount: 12, rating: 5 },
//       {id:7, img: "/collections/haldi5.jpeg",name:"Pink Haldi", price: 1499, discount: 20, rating: 4 },
//       {id:8, img: "/collections/haldi-4.jfif",name:"Normal YellowHaldi", price: 2199, discount: 10, rating: 5 }
//   ]},
//  {     
//   name: "Half Saree Lehenga", products: [
//       {id:9, img: "/collections/half-1.jfif", name:"Pink Half Saree",price: 2499, discount: 15, rating: 4 },
//       {id:10, img: "/collections/half-2.jfif", name:"Red Half Saree",price: 2999, discount: 10, rating: 5 },
//       {id:11,img: "/collections/halfsaree5.jpeg", name:"Purple Half Saree",price: 1999, discount: 20, rating: 4 },
//       {id:12, img: "/collections/half-4.jfif", name:"DarkRed Half Saree",price: 1799, discount: 25, rating: 5 }
//     ]},
//   { name: "Jacket Lehenga", products: [
//       {id:13 , img: "/collections/jacket-1.jfif", name:"Pink Jacket", price: 3499, discount: 10, rating: 4 },
//       {id:14 , img: "/collections/jacket-2.jfif", name:"Purple Jacket", price: 3999, discount: 15, rating: 5 },
//       {id:15 , img: "/collections/jacket-3.jfif", name:"Black Jacket", price: 2999, discount: 20, rating: 4 },
//       {id:16 , img: "/collections/jacket5.jpeg", name:"Red Jacket", price: 2499, discount: 12, rating: 5 }
//     ]},
//   { name: "Kurti Style Lehenga", products: [
//       {id:17, img: "/collections/kurti-1.jfif", name:"Red Kurti", price: 1999, discount: 18, rating: 4 },
//       {id:18, img: "/collections/kurti-2.jfif", name:"Black Kurti", price: 2499, discount: 12, rating: 5 },
//       {id:19, img: "/collections/kurti-3.jfif", name:"White Kurti", price: 1499, discount: 20, rating: 4 },
//       {id:20, img: "/collections/kurti-4.jfif", name:"Lightgreen Kurti", price: 2199, discount: 10, rating: 5 }
//     ]},
//   { name: "Net Lehenga", products: [
//       {id:21, img: "/collections/net-1.jfif", name:"Maroon Net", price: 2799, discount: 15, rating: 4 },
//       {id:22, img: "/collections/net-2.jfif", name:"Red Net", price: 3299, discount: 10, rating: 5 },
//       {id:23, img: "/collections/net-3.jfif", name:"Lightpurple Net", price: 2299, discount: 20, rating: 4 },
//       {id:24, img: "/collections/net-4.jfif", name:"Lightgreen Net", price: 1999, discount: 25, rating: 5 }
//     ]},
//     {
//   name: "Velvet Lehenga", products: [
//       {id:25, img: "/collections/velvet-1.jfif", name:"Red Velvet", price: 2999, discount: 10, rating: 4 },
//       {id:26, img: "/collections/velvet-2.jfif", name:" Brown Velvet", price: 3499, discount: 15, rating: 5 },
//       {id:27, img: "/collections/velvet-3.jfif", name:" Purple Velvet", price: 2499, discount: 20, rating: 4 },
//       {id:28, img: "/collections/velvet-4.jfif", name:" Purple Design Velvet", price: 1999, discount: 12, rating: 5 }
//     ]}
    
// ];


// export default function LehengaCollection() {
//   const [favorites, setFavorites] = useState([]);
//   const navigate = useNavigate();

//   const toggleFavorite = (id) => {
   
//     alert("Please login to add items to your wishlist");
//     navigate("/login");
//   };

//   return (
//     <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-200 mt-18">
//       <h1 className="text-3xl font-bold text-center mb-6">Lehenga Collection</h1>

//       {lehengaTypes.map((lehenga, index) => (
//         <div key={index} className="mb-10">
//           <h2 className="text-2xl font-semibold text-center mb-4">{lehenga.name}</h2>
//           <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
//             {lehenga.products.map((item) => {
//               const discountedPrice = (item.price * (1 - item.discount / 100)).toFixed(0);
//               const isFavorited = favorites.includes(item.id);
//               return (
//                 <div key={item.name} className="bg-white shadow-lg rounded-lg p-4 transition-transform hover:scale-105 relative">
//                   <div className="relative group cursor-pointer">
//                     <img src={item.img} alt={item.name} className="w-full h-40 object-cover object-top rounded-md" />
//                     <span className="absolute top-1 left-0 bg-red-500 text-white px-1 py-1 text-xs rounded">{item.discount}% OFF</span>
//                     <button onClick={() => toggleFavorite(item.id)} className="absolute top-2 right-2 text-red-500 text-xl">
//                       {isFavorited ? <FaHeart /> : <FaRegHeart />}
//                     </button>
//                   </div>
//                   <h3 className="text-lg font-bold text-center mt-2">{item.name}</h3>
//                   <div className="flex justify-center mt-1">
//                     {Array.from({ length: 5 }, (_,i) => (
//                       <span key={i} className={`text-yellow-400 text-lg ${i < item.rating ? "fas fa-star" : "far fa-star"}`} />
//                     ))}
//                   </div>
//                   <p className="text-lg font-semibold text-center mt-2">
//                     <span className="line-through text-gray-500">₹{item.price}</span>
//                     <span className="ml-2 text-red-600">₹{discountedPrice}</span>
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }







import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Lehenga data (separate for cleaner code)
const lehengaTypes = [
  { name: "Bridal Lehenga", products: [
      { id:1, img: "/collections/bridal-1.jfif", name:"Red Bridal",price: 2999, discount: 20, rating: 4 },
      { id:2 ,img: "/collections/bridal-2.jfif", name:"maroon Bridal",price: 3499, discount: 15, rating: 5 },
      { id:3,img: "/collections/bridal-3.jfif", name:"Pink Bridal",price: 2599, discount: 10, rating: 4 },
      { id:4,img: "/collections/bridal-4.jfif", name:"Rose Bridal",price: 1999, discount: 25, rating: 5 }
  ]},
  { name: "Haldi Lehenga", products: [
      {id:5, img: "/collections/haldi-1.jfif",name:"Yellow design Haldi", price: 1999, discount: 18, rating: 4 },
      {id:6, img: "/collections/haldi-2.jfif",name:"Yellow Haldi", price: 2799, discount: 12, rating: 5 },
      {id:7, img: "/collections/haldi5.jpeg",name:"Pink Haldi", price: 1499, discount: 20, rating: 4 },
      {id:8, img: "/collections/haldi-4.jfif",name:"Normal YellowHaldi", price: 2199, discount: 10, rating: 5 }
  ]},
 {     
  name: "Half Saree Lehenga", products: [
      {id:9, img: "/collections/half-1.jfif", name:"Pink Half Saree",price: 2499, discount: 15, rating: 4 },
      {id:10, img: "/collections/half-2.jfif", name:"Red Half Saree",price: 2999, discount: 10, rating: 5 },
      {id:11,img: "/collections/halfsaree5.jpeg", name:"Purple Half Saree",price: 1999, discount: 20, rating: 4 },
      {id:12, img: "/collections/half-4.jfif", name:"DarkRed Half Saree",price: 1799, discount: 25, rating: 5 }
    ]},
  { name: "Jacket Lehenga", products: [
      {id:13 , img: "/collections/jacket-1.jfif", name:"Pink Jacket", price: 3499, discount: 10, rating: 4 },
      {id:14 , img: "/collections/jacket-2.jfif", name:"Purple Jacket", price: 3999, discount: 15, rating: 5 },
      {id:15 , img: "/collections/jacket-3.jfif", name:"Black Jacket", price: 2999, discount: 20, rating: 4 },
      {id:16 , img: "/collections/jacket5.jpeg", name:"Red Jacket", price: 2499, discount: 12, rating: 5 }
    ]},
  { name: "Kurti Style Lehenga", products: [
      {id:17, img: "/collections/kurti-1.jfif", name:"Red Kurti", price: 1999, discount: 18, rating: 4 },
      {id:18, img: "/collections/kurti-2.jfif", name:"Black Kurti", price: 2499, discount: 12, rating: 5 },
      {id:19, img: "/collections/kurti-3.jfif", name:"White Kurti", price: 1499, discount: 20, rating: 4 },
      {id:20, img: "/collections/kurti-4.jfif", name:"Lightgreen Kurti", price: 2199, discount: 10, rating: 5 }
    ]},
  { name: "Net Lehenga", products: [
      {id:21, img: "/collections/net-1.jfif", name:"Maroon Net", price: 2799, discount: 15, rating: 4 },
      {id:22, img: "/collections/net-2.jfif", name:"Red Net", price: 3299, discount: 10, rating: 5 },
      {id:23, img: "/collections/net-3.jfif", name:"Lightpurple Net", price: 2299, discount: 20, rating: 4 },
      {id:24, img: "/collections/net-4.jfif", name:"Lightgreen Net", price: 1999, discount: 25, rating: 5 }
    ]},
    {
  name: "Velvet Lehenga", products: [
      {id:25, img: "/collections/velvet-1.jfif", name:"Red Velvet", price: 2999, discount: 10, rating: 4 },
      {id:26, img: "/collections/velvet-2.jfif", name:" Brown Velvet", price: 3499, discount: 15, rating: 5 },
      {id:27, img: "/collections/velvet-3.jfif", name:" Purple Velvet", price: 2499, discount: 20, rating: 4 },
      {id:28, img: "/collections/velvet-4.jfif", name:" Purple Design Velvet", price: 1999, discount: 12, rating: 5 }
    ]}
    
];

export default function LehengaCollection() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const toggleFavorite = (id) => {
    alert("Please login to add items to your wishlist");
    navigate("/login");
  };

  // Star rating component (reusable)
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-sm md:text-base" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-sm md:text-base" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 text-sm md:text-base" />);
      }
    }
    return stars;
  };

  return (
    <div className="p-4 md:p-6 bg-gradient-to-r from-pink-50 to-purple-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-purple-800 font-serif">
        👑 Lehenga Collection 👑
      </h1>

      {lehengaTypes.map((lehenga, index) => (
        <div key={index} className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 md:mb-6 decoration-wavy">
            {lehenga.name}
          </h2>
          
          {/* Responsive Grid (1 col on mobile, 2 on tablet, 4 on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {lehenga.products.map((item) => {
              const discountedPrice = (item.price * (1 - item.discount / 100)).toFixed(0);
              const isFavorited = favorites.includes(item.id);

              return (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-top"
                    />
                    <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-full">
                      {item.discount}% OFF
                    </span>
                    <button 
                      onClick={() => toggleFavorite(item.id)} 
                      className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition-colors"
                    >
                      {isFavorited ? (
                        <FaHeart className="text-red-500 text-sm md:text-base" />
                      ) : (
                        <FaRegHeart className="text-gray-600 hover:text-red-500 text-sm md:text-base" />
                      )}
                    </button>
                  </div>

                  <div className="p-3 md:p-4">
                    <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 truncate">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center mb-1 md:mb-2">
                      {renderStars(item.rating)}
                      <span className="text-gray-600 text-xs md:text-sm ml-1">
                        ({item.rating})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs md:text-sm text-gray-500 line-through">
                          ₹{item.price}
                        </span>
                        <span className="ml-2 text-base md:text-lg font-bold text-red-600">
                          ₹{discountedPrice}
                        </span>
                      </div>
                      <button className="bg-purple-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm hover:bg-purple-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
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





// text-purple-700 underline