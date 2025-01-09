import React from 'react';
import Link from 'next/link';

const Home = () => {
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:3001/auth/google";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96 text-center">
                <h1 className="text-3xl font-bold mb-6">Welcome to My Payment Platform</h1>
                <p className="mb-6">Secure, scalable, and accessible payment solutions.</p>
                <div className="flex flex-col space-y-4">
                    <Link href="/login">
                        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
                    </Link>
                    <Link href="/register">
                        <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">Register</button>
                    </Link>
                    <button
                        onClick={handleGoogleLogin}
                        className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
