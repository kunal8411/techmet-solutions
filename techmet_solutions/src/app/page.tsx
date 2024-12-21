"use client"

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
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const theme = localStorage.getItem('theme')
    setDarkMode(theme === 'dark')
    
    // Apply the theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setDarkMode(!darkMode)
  }

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
            
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode" 
              className="mr-4 p-2 rounded-lg hover:bg-gray-800"
            >
              <span className={darkMode ? 'hidden' : 'block'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </span>
              <span className={darkMode ? 'block' : 'hidden'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </span>
            </button>
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
        <section id="home" className="relative overflow-hidden pb-20 pt-35 md:pt-40 lg:pb-30 xl:pb-59 xl:pt-52">
          <div className="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0">
            <div style={{ opacity: 1, transform: 'none' }}>
              <div className="flex lg:items-center">
                {/* Left Content */}
                <div className="animate_left md:w-1/2">
                  <h1 className="mb-6 text-3xl font-semibold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
                    Next.js SaaS Boilerplate Template with Landing Page
                  </h1>
                  <p className="xl:w-[79%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla
                    magna mauris. Nulla fermentum viverra sem eu rhoncus consequat
                    varius nisi quis, posuere magna.
                  </p>
                  
                  <div className="mt-10 flex flex-col-reverse gap-7.5 lg:flex-row">
                    <a 
                      href="#" 
                      className="inline-flex w-fit rounded-full bg-primary px-7.5 py-3 font-medium leading-7 text-white duration-300 ease-in-out hover:shadow-1"
                    >
                      Get Started Now
                    </a>
                    <span className="flex flex-col">
                      <a href="#" className="inline-block text-lg font-medium text-black dark:text-white">
                        Call us (0123) 456 – 789
                      </a>
                      <span className="inline-block">For any question or concern</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="absolute right-0 top-0 hidden h-auto w-1/2 md:block 2xl:h-171.5 2xl:w-187.5 3xl:w-[910px] 3xl:h-[817px]">
            <Image
              src="/images/shape/shape-01.svg"
              alt="shape"
              width={127}
              height={127}
              className="absolute -left-[10%] top-[40%] z-1 hidden 2xl:block"
            />
            
            <Image
              src="/images/shape/shape-02.svg"
              alt="shape"
              width={76}
              height={76}
              className="absolute bottom-0 right-[20%] z-10 hidden 2xl:block"
            />
            
            <Image
              src="/images/shape/shape-03.svg"
              alt="shape"
              width={84}
              height={46}
              className="absolute bottom-[10%] left-[15%] z-10 hidden 2xl:block"
            />
            
            <Image
              src="/images/shape/shape-04.svg"
              alt="shape"
              width={750}
              height={684}
              className="absolute right-0 top-0 3xl:w-[910px] 3xl:h-[817px]"
            />
            
            <Image
              src="/images/hero/hero.png"
              alt="Woman"
              width={750}
              height={684}
              className="absolute right-0 top-0 z-1 3xl:w-[910px] 3xl:h-[817px]"
            />
          </div>
        </section>

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