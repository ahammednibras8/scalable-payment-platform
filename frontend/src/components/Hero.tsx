import AuthSection from "./AuthSection";
import CodeSnippet from "./Code";

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-blue-700 to-blue-900">
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                        <div className="text-xs text-blue-200 mb-4 font-mono">Scalable Payment Infrastructure</div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                            PayFlow
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 font-mono">
                            Built with TypeScript • React • Node.js • PostgreSQL
                        </p>

                        <AuthSection />
                    </div>

                    <CodeSnippet />
                </div>
            </div>
        </div>
    );
};

export default Hero;