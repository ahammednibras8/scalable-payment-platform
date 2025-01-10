import React from "react";

const UserDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
                <p className="mt-4 text-gray-600">
                    Welcome, User! View your transactions, update your profile, and explore features.
                </p>
            </div>
        </div>
    );
};

export default UserDashboard;