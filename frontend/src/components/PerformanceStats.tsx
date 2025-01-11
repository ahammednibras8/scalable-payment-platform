const PerformanceStats = () => {
    const stats = [
        { label: "API Response Time", value: "<100ms" },
        { label: "System Uptime", value: "99.99%" },
        { label: "Load Testing", value: "10k req/s" }
    ];

    return (
        <div className="bg-blue-900 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-blue-200 font-mono">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PerformanceStats;