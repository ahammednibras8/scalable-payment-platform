import { useState } from "react";
import { Google } from "@mui/icons-material";

const AuthSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="space-y-4 max-w-md">
            <button
                onClick={() => setIsLoading(true)}
                className="w-full bg-white text-blue-700 px-6 py-3 rounded-lg font-mono font-semibold flex items-center justify-center hover:bg-blue-50 transition-all"
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-blue-700 border-t-transparent rounded-full animate-spin mr-2" />
                ) : null}
                Register Account
            </button>

            <button className="w-full bg-transparent text-white px-6 py-3 rounded-lg font-mono font-semibold border border-white flex items-center justify-center hover:bg-white/10 transition-all">
                Login
            </button>

            <button
                className="w-full bg-white text-black px-6 py-3 rounded-lg font-mono font-semibold flex items-center justify-center hover:bg-white/80 transition-all"
                onClick={() => {
                    console.log("Redirecting to Google login...");
                    window.location.href = "http://localhost:3001/auth/google";
                }}
            >
                <Google className="w-5 h-5 mr-2" />
                Login with Google
            </button>
        </div>
    )
}

export default AuthSection;