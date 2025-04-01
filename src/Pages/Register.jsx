import React from "react";
import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email.includes("@")) errors.email = "Valid email is required";
        if (!/^[0-9]{10}$/.test(formData.mobile)) errors.mobile = "Valid 10-digit mobile number required";
        if (formData.password.length < 6) errors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted", formData);
            alert("Signup Successful");
        }
    };

    return (
        <div className="font-[Poppins] relative min-h-screen flex items-center justify-center bg-cover bg-center bg-gradient-to-r from-blue-100 to-purple-200">
            <div className=" rounded-lg shadow-md w-full max-w-lg p-8 backdrop-blur-lg bg-opacity-90 border">
                <h2 className="text-2xl font-bold text-center mb-6">Create a Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium">Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounde focus:outline-none" />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block font-medium">Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded focus:outline-none " />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block font-medium">Mobile:</label>
                        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 border rounded focus:outline-none " />
                        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                    </div>
                    <div>
                        <label className="block font-medium">Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded focus:outline-none " />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <div>
                        <label className="block font-medium">Confirm Password:</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded focus:outline-none  " />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default Register