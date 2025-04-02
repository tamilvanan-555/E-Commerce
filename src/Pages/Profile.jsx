// import React, { useState } from "react";
// import { FaPencilAlt, FaSave } from "react-icons/fa";

// const Profile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "john@example.com",
//     phone: "123-456-7890",
//     address: "123 Main St, Cityville",
//   });

//   const [orders, setOrders] = useState([
//     { id: "1001", date: "2025-03-28", total: "$120.00", status: "Shipped" },
//     { id: "1002", date: "2025-03-29", total: "$80.50", status: "Processing" },
//   ]);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 w-full space-y-6 mt-14">
//       {/* Profile Card */}
//       <div className="bg-white shadow-md rounded-lg p-6 w-full">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-semibold">User Profile</h2>
//           <button 
//             className="bg-blue-600 text-white p-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
//             onClick={() => setIsEditing(!isEditing)}
//           >
//             {isEditing ? <FaSave /> : <FaPencilAlt />} 
//             {isEditing ? "Save" : "Edit"}
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {Object.keys(user).map((key) => (
//             <div key={key}>
//               <label className="block font-medium text-gray-700 capitalize">{key}</label>
//               <input
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
//                 name={key}
//                 value={user[key]}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Order History */}
//       <div className="bg-white shadow-md rounded-lg p-6 w-full overflow-x-auto">
//         <h2 className="text-2xl font-semibold mb-4">Order History</h2>
//         <table className="w-full border-collapse border border-gray-200 text-left">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700 text-sm">
//               <th className="p-3 border">Order ID</th>
//               <th className="p-3 border">Date</th>
//               <th className="p-3 border">Total</th>
//               <th className="p-3 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id} className="border-b text-sm hover:bg-gray-50">
//                 <td className="p-3 border">{order.id}</td>
//                 <td className="p-3 border">{order.date}</td>
//                 <td className="p-3 border">{order.total}</td>
//                 <td className="p-3 border text-green-600 font-semibold">{order.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState } from "react";
import { FaPencilAlt, FaSave } from "react-icons/fa";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Cityville",
  });

  const [orders, setOrders] = useState([
    { id: "1001", date: "2025-03-28", total: "₹ 120.00", status: "Shipped" },
    { id: "1002", date: "2025-03-29", total: "₹ 80.50", status: "Processing" },
  ]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Simulate saving data (You can replace this with an API call)
    console.log("User data saved:", user);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 w-full space-y-6 mt-14">
      {/* Profile Card */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">User Profile</h2>
          <button 
            className="bg-blue-600 text-white p-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? <FaSave /> : <FaPencilAlt />} 
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(user).map((key) => (
            <div key={key}>
              <label className="block font-medium text-gray-700 capitalize">{key}</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                name={key}
                value={user[key]}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Order History */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Order History</h2>
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-3 border">Order ID</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Total</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b text-sm hover:bg-gray-50">
                <td className="p-3 border">{order.id}</td>
                <td className="p-3 border">{order.date}</td>
                <td className="p-3 border">{order.total}</td>
                <td className="p-3 border text-green-600 font-semibold">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
