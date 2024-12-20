import Image from 'next/image'

const ClientsInfo = () => {
  const stats = [
    { number: "785", label: "Global Brands" },
    { number: "533", label: "Happy Clients" },
    { number: "865", label: "Winning Award" },
    { number: "346", label: "Happy Clients" },
  ]

  const brands = [
    { name: "Logitech", logo: "/logos/logitech.png" },
    { name: "Dropcam", logo: "/logos/dropcam.png" },
    { name: "AMD", logo: "/logos/amd.png" },
    { name: "Nike", logo: "/logos/nike.png" },
    { name: "Mandiri", logo: "/logos/mandiri.png" },
    { name: "Amazon", logo: "/logos/amazon.png" },
  ]

  return (
    <section className="bg-[#1A1E2E] text-white py-20">
      {/* Stats Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-4xl font-bold mb-2">{stat.number}</h2>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trusted Brands Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by Global Brands</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            It is a long established fact that a reader will be distracted by the readable content of
            a page when looking at its layout. The point of using.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsInfo
