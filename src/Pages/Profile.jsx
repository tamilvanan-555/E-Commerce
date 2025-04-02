import React, { useState } from "react";
import { FaPencilAlt, FaSave } from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Cityville",
  });

  const [orders, setOrders] = useState([
    { id: "1001", date: "2025-03-28", total: "$120.00", status: "Shipped" },
    { id: "1002", date: "2025-03-29", total: "$80.50", status: "Processing" },
  ]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-4 md:p-6 lg:p-8 xl:p-10 w-full mt-14">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">User Profile</h2>
          <button 
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? <FaSave className="w-4 h-4 inline" /> : <FaPencilAlt className="w-4 h-4 inline" />}
          </button>
        </div>
        <div className="space-y-4">
          {Object.keys(user).map((key) => (
            <div key={key}>
              <label className="block font-medium capitalize">{key}</label>
              <input
                className="w-full p-2 border rounded-md"
                name={key}
                value={user[key]}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">Order History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left text-sm">
                <th className="p-2 border">Order ID</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b text-sm">
                  <td className="p-2 border">{order.id}</td>
                  <td className="p-2 border">{order.date}</td>
                  <td className="p-2 border">{order.total}</td>
                  <td className="p-2 border">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>  
    </div>
  );
};

export default Profile;
