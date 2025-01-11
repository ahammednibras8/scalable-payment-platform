import { features } from "process";
import { technicalFeatures } from "../utils/constants";
import { useState } from "react";

const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Enterprise-Grade Architecture
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technicalFeatures.map((features, index) => {
                        const IconComponent = features.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${activeFeature === index ? 'ring-2 ring-blue-500' : ''
                                    }`}
                            >
                                <div className="mb-4">
                                    <IconComponent style={{ width: 24, height: 24, color: '#3b82f6' }} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{features.title}</h3>
                                <p className="text-gray-600 mb-4">{features.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {features.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-mono"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;