import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    { src: "./image1.jpeg" },
    { src: "./image2.jpeg" },
    { src: "./image3.jpeg" },
    { src: "./image4.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleWishlist = () => {
    alert("Please login to add items to your wishlist");
    navigate("/login");
  };

  const newArrivals = [
    { id: 1, img: "./si-1.jpeg", name: "Bridal Lehenga", price: 2999, discount: 20, rating: 4 },
    { id: 2, img: "./si-2.jpeg", name: "Embroidered Lehenga", price: 1799, discount: 15, rating: 5 },
    { id: 3, img: "./si-3.jpeg", name: "Designer Lehenga", price: 2499, discount: 10, rating: 4 },
    { id: 4, img: "./si-4.jpeg", name: "Traditional Lehenga", price: 999, discount: 5, rating: 4 },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 mt-20">
      <div className="relative w-full object-cover overflow-hidden mx-auto">
        <img src={images[currentIndex].src} className="w-full h-auto sm:h-[500px] rounded-2xl object-cover" alt="carousel" />
      </div>

      <h2 className="font-bold text-3xl mx-20 mt-14">New Arrivals</h2>
      <div className="max-w-6xl mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {newArrivals.map((item) => {
          const discountedPrice = (item.price * (1 - item.discount / 100)).toFixed(0);
          return (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 relative hover:scale-105 transition-transform">
              <div className="relative group">
                <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md group-hover:scale-110 transition" />
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">{item.discount}% OFF</span>
                <button onClick={toggleWishlist} className="absolute top-2 right-2 text-red-500 text-xl">
                  <FaRegHeart />
                </button>
              </div>
              <h3 className="text-lg font-bold text-center mt-2">{item.name}</h3>
              <p className="text-lg font-semibold text-center mt-2">
                <span className="line-through text-gray-500">₹{item.price}</span>
                <span className="ml-2 text-red-600">₹{discountedPrice}</span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center">
        <button className="px-6 py-3 text-lg bg-blue-500 text-white hover:bg-blue-700 rounded-xl mb-2" onClick={() => navigate("/collection")}>
          {`Shop Now >`}
        </button>
      </div>

      
      <footer className="bg-gray-900 text-white text-center p-6 mt-10 font-[Poppins]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between
         items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-300">About Us</h3>
            <p className="text-sm max-w-sm mx-auto md:mx-0 mt-2">
              We offer the best ethnic wear collections at affordable prices. Discover exclusive designs and shop now!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-sky-300">Contact Us</h3>
            <p className="text-sm">Email: support@boutique.com</p>
            <p className="text-sm">Phone: +91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-sky-300">Follow Us</h3>
            <div className="flex justify-center gap-4 mt-2">
              <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" />
            </div>
          </div>
        </div>
        <hr />
        <p className="text-sm mt-4">&copy; 2025 Boutique. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

