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
            
            {/* Dark Mode Toggle Button */}
            <button aria-label="Toggle Dark Mode" className="mr-4">
              <span className="dark:hidden">
                <svg className="fill-body md:fill-white" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7_66)">
                    <path d="M13.0908 19.6363C11.3549 19.6363 9.69 18.9467 8.46249 17.7192C7.23497 16.4916 6.54537 14.8268 6.54537 13.0908C6.54537 11.3549 7.23497 9.69 8.46249 8.46249C9.69 7.23497 11.3549 6.54537 13.0908 6.54537C14.8268 6.54537 16.4916 7.23497 17.7192 8.46249C18.9467 9.69 19.6363 11.3549 19.6363 13.0908C19.6363 14.8268 18.9467 16.4916 17.7192 17.7192C16.4916 18.9467 14.8268 19.6363 13.0908 19.6363ZM13.0908 17.4545C14.2481 17.4545 15.358 16.9947 16.1764 16.1764C16.9947 15.358 17.4545 14.2481 17.4545 13.0908C17.4545 11.9335 16.9947 10.8236 16.1764 10.0053C15.358 9.18692 14.2481 8.72718 13.0908 8.72718C11.9335 8.72718 10.8236 9.18692 10.0053 10.0053C9.18692 10.8236 8.72718 11.9335 8.72718 13.0908C8.72718 14.2481 9.18692 15.358 10.0053 16.1764C10.8236 16.9947 11.9335 17.4545 13.0908 17.4545ZM11.9999 1.09082H14.1817V4.36355H11.9999V1.09082ZM11.9999 21.8181H14.1817V25.0908H11.9999V21.8181ZM3.83446 5.377L5.377 3.83446L7.69082 6.14828L6.14828 7.69082L3.83446 5.37809V5.377ZM18.4908 20.0334L20.0334 18.4908L22.3472 20.8046L20.8046 22.3472L18.4908 20.0334ZM20.8046 3.83337L22.3472 5.377L20.0334 7.69082L18.4908 6.14828L20.8046 3.83446V3.83337ZM6.14828 18.4908L7.69082 20.0334L5.377 22.3472L3.83446 20.8046L6.14828 18.4908ZM25.0908 11.9999V14.1817H21.8181V11.9999H25.0908ZM4.36355 11.9999V14.1817H1.09082V11.9999H4.36355Z" fill=""/>
                  </g>
                  <defs>
                    <clipPath id="clip0_7_66">
                      <rect width="26.1818" height="26.1818" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="hidden dark:block">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7_69)">
                    <path d="M10.5166 7C10.5164 8.39064 10.9304 9.74983 11.7058 10.9042C12.4812 12.0586 13.5829 12.9559 14.8704 13.4816C16.1578 14.0073 17.5727 14.1376 18.9345 13.8559C20.2963 13.5742 21.5434 12.8933 22.5166 11.9V12C22.5166 17.523 18.0396 22 12.5166 22C6.9936 22 2.5166 17.523 2.5166 12C2.5166 6.477 6.9936 2 12.5166 2H12.6166C11.9506 2.65113 11.4217 3.42896 11.0611 4.28768C10.7004 5.1464 10.5153 6.06862 10.5166 7ZM4.5166 12C4.51587 13.785 5.11213 15.5189 6.21049 16.926C7.30886 18.333 8.84624 19.3323 10.578 19.7648C12.3098 20.1974 14.1365 20.0383 15.7674 19.313C17.3984 18.5876 18.7399 17.3377 19.5786 15.762C18.086 16.1136 16.5284 16.0781 15.0534 15.6587C13.5785 15.2394 12.2351 14.4501 11.1508 13.3658C10.0665 12.2815 9.27725 10.9381 8.85788 9.46318C8.43852 7.98821 8.40297 6.43056 8.7546 4.938C7.47418 5.62014 6.40339 6.63766 5.65686 7.88164C4.91033 9.12562 4.51618 10.5492 4.5166 12Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_7_69">
                      <rect width="24" height="24" fill="white" transform="translate(0.516602)"/>
                    </clipPath>
                  </defs>
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