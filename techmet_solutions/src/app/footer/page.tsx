import Link from 'next/link'
// import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#1C1F2E] text-white">
      {/* Top CTA Section */}
      <div className="bg-[#4F6AFF] py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Join with 5000+ Startups<br />
            Growing with Base.
          </h2>
          <p className="mb-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.<br />
            Duis sed odio lorem, in a efficitur leo. Ut venenatis rhoncus.
          </p>
          <button className="bg-white text-[#4F6AFF] px-6 py-2 rounded-md font-medium">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Links */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#4F6AFF] flex items-center justify-center rounded">
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                  <path d="M0 16L12 8L0 0V16Z" fill="white"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Base</span>
            </div>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-behance"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Product</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Hiring <span className="bg-green-500 text-xs px-2 py-1 rounded-full ml-2">Live</span></Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">Web Development</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Graphics Design</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Digital Marketing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">Company</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Press media</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Our Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive future updates</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[#272B3B] rounded-md py-2 px-4 text-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6668 10H3.3335" stroke="white" strokeWidth="2"/>
                  <path d="M11.6668 5L16.6668 10L11.6668 15" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-white">English</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Support</Link>
          </div>
          <p className="text-gray-400">© 2025 Base. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
