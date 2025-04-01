// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     { src: "./image1.jpeg", title: "", description: "" },
//     { src: "./image2.jpeg", title: "", description: "" },
//     { src: "./image3.jpeg", title: "", description: "" },
//     { src: "./image4.jpg", title: "", description: "" }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000); // Change slide every 4 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []); // Empty dependency array ensures it runs once when the component mounts

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 mt-20">
//       {/* Hero Section with Carousel */}
//       <div className="relative w-full object-cover overflow-hidden mx-auto">
//         <div className="relative w-full">
//           <img
//             src={images[currentIndex].src}
//             className="w-full h-auto sm:h-[500px] rounded-2xl transition-all duration-1000 ease-in-out object-cover"
//             alt={`Slide ${currentIndex + 1}`}
//           />

//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 p-6 text-center">
//             <h2 className="text-3xl font-bold">{images[currentIndex].title}</h2>
//             <p className="mt-2">{images[currentIndex].description}</p>
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-opacity-50 p-4 sm:p-3 rounded-full text-white hover:bg-gray-700 transition"
//         >
//           ❮
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-opacity-50 p-4 sm:p-3 rounded-full text-white hover:bg-gray-700 transition"
//         >
//           ❯
//         </button>

//       </div>

//       {/* Content Section */}
//       <h2 className="font-bold text-3xl mx-20 mt-14 ">New Arrivals</h2>
//       <div className="max-w-4x py-4 flex flex-col justify-center items-center">
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
//           {/* img-1 */}
//           <div className="w-40 h-45 border-2 mt-4">

//           </div>
//           {/* img-2 */}
//           <div className="w-40 h-45 border-2 mt-4">

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  // Carousel images
  const images = [
    { src: "./image1.jpeg", title: "", description: "" },
    { src: "./image2.jpeg", title: "", description: "" },
    { src: "./image3.jpeg", title: "", description: "" },
    { src: "./image4.jpg", title: "", description: "" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // New Arrivals Data (8 Products)
  const newArrivals = [
    { id: 1, img: "./si-1.jpeg", name: "Bridal Lehenga", price: "₹2,999", rating: 4 },
    { id: 2, img: "./si-2.jpeg", name: "Embroidered Lehenga", price: "₹1,799", rating: 5 },
    { id: 3, img: "./si-3.jpeg", name: "Designer Lehenga", price: "₹2,499", rating: 4 },
    { id: 4, img: "./si-4.jpeg", name: "Traditional Lehenga", price: "₹999", rating: 4 },
    { id: 5, img: "./si-5.jpeg", name: "Party Wear Lehenga", price: "₹1,299", rating: 5 },
    { id: 6, img: "./si-6.jpeg", name: "Blue Anarkali Lehenga", price: "₹3,999", rating: 4 },
    { id: 7, img: "./si-7.jpeg", name: "Red Bridal Lehenga", price: "₹4,599", rating: 5 },
    { id: 8, img: "./si-8.jpeg", name: "Ethnic Lehenga", price: "₹1,499", rating: 4 },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 mt-20">
      {/* Hero Section with Carousel */}
      <div className="relative w-full object-cover overflow-hidden mx-auto">
        <div className="relative w-full">
          <img
            src={images[currentIndex].src}
            className="w-full h-auto sm:h-[500px] rounded-2xl transition-all duration-1000 ease-in-out object-cover"
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-opacity-50 p-4 sm:p-3 rounded-full text-white hover:bg-gray-700 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-opacity-50 p-4 sm:p-3 rounded-full text-white hover:bg-gray-700 transition"
        >
          ❯
        </button>
      </div>

      {/* New Arrivals Section */}
      <h2 className="font-bold text-3xl mx-20 mt-14">New Arrivals</h2>
      <div className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {newArrivals.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover object-top rounded-md"
              />
              <h3 className="text-lg font-bold text-center mt-2">{item.name}</h3>

              {/* Star Rating */}
              <div className="flex justify-center mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`text-yellow-400 text-lg ${i < item.rating ? "fas fa-star" : "far fa-star"}`} />
                ))}
              </div>

              <p className="text-lg font-semibold text-center mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="px-6 py-3 text-lg bg-blue-500 text-white hover:bg-blue-700 cursor-pointer rounded-xl mb-2" onClick={()=>{navigate("/collection")}}>
          {`Shop Now >`}
        </button>
      </div>
    </div>
  );
};

export default Home;