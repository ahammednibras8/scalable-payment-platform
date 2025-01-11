import { heroCodeSnippet } from "@/utils/constants";

const CodeSnippet = () => {
    return (
        <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 shadow-2xl">
                <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="language-typescript">
                    <code>
                        {heroCodeSnippet}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CodeSnippet;