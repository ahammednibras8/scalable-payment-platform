import React from "react";

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="mt-4 text-gray-600">
                    Welcome, Admin! Manage users, monitor transactions, and oversee the platform.
                </p>
            </div>
        </div>
    );
};

export default AdminDashboard;