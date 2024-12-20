import Head from 'next/head'
import Link from 'next/link'
import WhyUs from './whyus/page';
import Features from './features/page';
import PricingPlan from './pricingplan/page';
import ProjectsPage from './ourprojects/page';
import TestimonialsPage from './testimonials/page';
import OurTeam from './ourteam/page';
import ClientsInfo from './clientsinfo/page';
import ConnectUs from './connectus/page';
import Footer from './footer/page';

export default function Home() {
  return (
    <>
      <Head>
        <title>Base - Next.js SaaS Template</title>
        <meta name="description" content="Next.js SaaS Boilerplate Template with Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-[#1a1f2e]">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold flex items-center">
              <div className="bg-blue-600 p-2 rounded-lg mr-2">⚡</div>
              Base
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-gray-400">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/pages">Pages</Link>
            <Link href="/support">Support</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-blue-500 transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-8 py-16 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Next.js SaaS Boilerplate Template with Landing Page
            </h1>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla
              magna mauris. Nulla fermentum viverra sem eu rhoncus consequat
              varius nisi quis, posuere magna.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Now
              </button>
              <div>
                <p className="text-white font-semibold">Call us (0123) 456 - 789</p>
                <p className="text-gray-400 text-sm">For any question or concern</p>
              </div>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Cutting-edge Features"
              description="Lorem ipsum dolor sit amet conse adipiscing elit."
              bgColor="bg-pink-500"
            />
            <FeatureCard 
              title="10+ Useful Integrations"
              description="Lorem ipsum dolor sit amet conse adipiscing elit."
              bgColor="bg-green-500"
            />
            <FeatureCard 
              title="High-quality Modern Design"
              description="Lorem ipsum dolor sit amet conse adipiscing elit."
              bgColor="bg-orange-500"
            />
          </div>
        </section>
      </div>
      <div>
        <WhyUs/>

      </div>
      <div>
        <Features/>

      </div>
      <div>
        <PricingPlan/>
      </div>
      <div>
        <ProjectsPage/>
      </div>
      <div>
        <TestimonialsPage/>
      </div>  
      <div>
        <OurTeam/>
      </div>
      <div>
        <ClientsInfo/>
      </div>
      <div>
        <ConnectUs/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
}

const FeatureCard = ({ title, description, bgColor }: FeatureCardProps) => (
  <div className="text-white">
    <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
      <svg className="w-6 h-6" /* Add your icon SVG here */ />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
) 