export default function Features() {
  const features = [
    {
      icon: "📊", // Replace with your actual icon component
      title: "Crafted for Startups",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor."
    },
    {
      icon: "📑", // Replace with your actual icon component
      title: "Pre-built Pages",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor."
    },
    {
      icon: "📱", // Replace with your actual icon component
      title: "All Essential Sections",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor."
    },
    {
      icon: "⚡", // Replace with your actual icon component
      title: "Speed Optimized",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor."
    },
    {
      icon: "🎨", // Replace with your actual icon component
      title: "Fully Customizable",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor."
    },
    {
      icon: "🔄", // Replace with your actual icon component
      title: "Regular Updates",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor."
    }
  ];

  return (
    <div className="bg-[#1a1f2e] min-h-screen text-white py-16">
      {/* Header Section */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          An Amazing Next.js Boilerplate
        </h1>
        <p className="text-gray-400">
          With All Essential Integrations - DB, Auth, Payment, Sanity, MDX, and more
        </p>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg text-center"
            >
              <div className="text-blue-500 text-4xl mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 