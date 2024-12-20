import Image from 'next/image'

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Smith",
    role: "Founder",
    company: "democompany",
    image: "/path-to-image.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat."
  },
  // Add more testimonials here
];

export default function TestimonialsPage() {
  return (
    <section className="bg-[#1A1E2E] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Clients Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#242837] p-8 rounded-lg flex gap-8">
              <div className="w-48 h-48 relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="text-6xl text-gray-600 mb-4"></div>
                <p className="text-gray-400 italic mb-6">{testimonial.quote}</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400">
                    {testimonial.role} @{testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex gap-4 justify-center mt-8">
            <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
              <span className="sr-only">Previous</span>
              ←
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
              <span className="sr-only">Next</span>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
