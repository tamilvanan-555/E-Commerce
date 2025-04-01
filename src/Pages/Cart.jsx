import React, { useState } from "react";
import img from "../assets/Logo1.png"

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const pricePerItem = "product price"; // Assuming officer price
  const discount = 40;
  const platformFee =20;

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const subtotal = quantity * pricePerItem;
  const total = subtotal - discount + platformFee;

  return (
    <div className="min-h-screen bg-[#f8fbea] flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">My Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
        {/* Product Section */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center gap-6 border border-green-200 w-full min-h-[200px]">
          <img
            src={img} // Replace with your product image path
            alt="Product img"
            className="w-40 h-50 sm:w-40 sm:h-40 object-contain border-2 border-green-300 rounded-xl"
          />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-lg font-semibold">Product name</h2>
            <div className="mt-2">
              <span className="text-gray-600 text-sm font-medium">Select Size:</span>
              <div className="flex gap-2 mt-1 justify-center sm:justify-start">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 border rounded-md ${selectedSize === size ? "bg-green-600 text-white" : "bg-gray-200 cursor-pointer"}`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-yellow-500 font-bold mt-2">★★★★☆ <span className="text-gray-600 text-sm">4.9/5</span></p>
            <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
              <span className="text-gray-400 line-through">₹200.00</span>
              <span className="text-green-600 font-bold">₹{pricePerItem}</span>
            </div>
            <div className="flex justify-center sm:justify-start items-center gap-3 mt-3">
              <button onClick={decreaseQuantity} className="px-3 py-1 border rounded-md cursor-pointer">-</button>
              <span className="font-semibold">{quantity}</span>
              <button onClick={increaseQuantity} className="px-3 py-1 border rounded-md cursor-pointer">+</button>
              <button className="text-red-500 ml-4 cursor-pointer">🗑 Delete</button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-96 bg-white p-4 rounded-2xl shadow-md border border-green-200">
          <h2 className="text-lg font-semibold mb-4 text-center md:text-left">Order Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹{platformFee.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Order Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
