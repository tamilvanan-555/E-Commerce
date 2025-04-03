import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import img from "../assets/Logo1.png"; 
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center min-h-screen border-gray-100 border rounded-2xl shadow-md bg-gradient-to-r from-blue-100 to-purple-200">
     
      <div className="md:flex md:w-1/2 h-full items-center justify-center mt-3.5">
        <div className="text-center max-w-md">
          <img src={img} alt="Illustration" className="w-80 mx-auto mb-6 rounded-2xl sm:mt-4" />
          <h2 className="text-2xl font-bold text-gray-800">Bride &<span className="text-green-600"> Groom Destination</span></h2>
          <p className="text-gray-600 mt-2 pb-2.5">
            It is certainly important because it is only through hard work that we can achieve the goals of our life. Thus, we all must work hard.
          </p>
        </div>
      </div>
      
     
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-8 md:p-20bg-gradient-to-r from-blue-100 to-purple-200 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Login</h2>
        <form className="w-full max-w-sm">
          <div className="relative mb-4">
            <FiMail className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="Enter User Email"
              className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring focus:outline-1 focus:outline-orange-400"
            />
          </div>
          <div className="relative mb-4">
            <FiLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring focus:outline-1 focus:outline-orange-400"
            />
          </div>
          <div className="flex justify-center text-sm text-gray-600 mb-4">
            <span></span>
            <a href="#" className="pr-2">Don't have an account?</a>
            <Link to="/register" className="hover:text-blue-600">Create a Acoount </Link>
          </div>
          <button className="bg-green-500 text-white p-2 rounded-md w-full hover:bg-green-600">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
