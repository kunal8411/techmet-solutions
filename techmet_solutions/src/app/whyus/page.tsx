import Link from 'next/link';

export default function WhyUs() {
    return (
        <section className="bg-[#0A0A29] min-h-screen flex items-center p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image Grid */}
                    <div className="grid grid-cols-2 gap-4 relative">
                        <div className="relative">
                            <div className="absolute -top-2 -right-2">
                                <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                            </div>
                            <img 
                                src="/team-1.jpg" 
                                alt="Team collaboration" 
                                className="rounded-lg w-full object-cover"
                            />
                        </div>
                        <img 
                            src="/team-2.jpg" 
                            alt="Team meeting" 
                            className="rounded-lg w-full object-cover mt-12"
                        />
                        <img 
                            src="/team-3.jpg" 
                            alt="Working together" 
                            className="rounded-lg w-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4B5AFF] rounded-full -z-10" />
                    </div>

                    {/* Right side - Content */}
                    <div className="text-white">
                        <h3 className="text-[#4B5AFF] text-lg font-medium mb-4">
                            Why Choose Us
                        </h3>
                        <h2 className="text-4xl font-bold mb-6">
                            Next.js Template with Powerful Integrations
                        </h2>
                        <p className="text-gray-400 mb-8">
                            It is a long established fact that a reader will be distracted by the readable 
                            content of a page when looking at its layout. The point of using Lorem Ipsum.
                        </p>
                        <Link 
                            href="#work" 
                            className="inline-flex items-center gap-2 bg-[#4B5AFF] text-white px-6 py-3 rounded-lg hover:bg-[#3A48E3] transition-colors"
                        >
                            <span>SEE HOW WE WORK</span>
                            <svg 
                                className="w-5 h-5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}