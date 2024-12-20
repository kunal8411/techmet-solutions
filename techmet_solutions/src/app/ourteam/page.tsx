import Image from 'next/image'

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Matheus Ferrero",
      role: "Product Manager",
      image: "/team/matheus.jpg"
    },
    {
      name: "Eva Hudson",
      role: "Product Designer",
      image: "/team/eva.jpg"
    },
    {
      name: "Jackie Sanders",
      role: "Web Designer",
      image: "/team/jackie.jpg"
    }
  ]

  return (
    <section className="bg-[#1A1F2E] min-h-screen py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-40">
        <Image src="/icons/blue-circle.svg" alt="" width={40} height={40} />
      </div>
      <div className="absolute bottom-40 left-20">
        <Image src="/icons/orange-triangle.svg" alt="" width={30} height={30} />
      </div>
      <div className="absolute top-20 right-20">
        <Image src="/icons/pink-triangle.svg" alt="" width={30} height={30} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-white text-4xl font-bold mb-4">
            Meet With Our Creative<br />Dedicated Team
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
            Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 relative w-full aspect-square max-w-[300px] mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-white text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
