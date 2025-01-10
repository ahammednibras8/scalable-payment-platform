import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        const userRole = "admin";

        if (userRole === "admin") {
            router.push("/dashboard/admin");
        } else if (userRole === "merchant") {
            router.push("/dashboard/merchant");
        } else {
            router.push("/dashboard/user");
        }
    }, [router]);

    return <div>Redirecting to your dashboard...</div>;
};

export default Dashboard;