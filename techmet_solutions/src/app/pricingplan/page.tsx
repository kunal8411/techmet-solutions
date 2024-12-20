export default function PricingPlan() {
  return (
    <div className="min-h-screen bg-navy-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Great Affordable Pricing Plans</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content 
            of a page when looking at its layout. The point of using.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-slate-300">Bill Monthly</span>
            <button className="w-12 h-6 bg-indigo-600 rounded-full p-1">
              <div className="bg-white w-4 h-4 rounded-full"></div>
            </button>
            <span className="text-slate-300">Bill Annually</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-slate-900/50 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-white">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$29</span>
              <span className="text-slate-400">/per month</span>
            </div>
            <p className="text-slate-400 mb-6">No credit card required</p>
            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg mb-8">
              Try for free
            </button>
            <ul className="space-y-4 text-slate-400">
              <li>400 GB Storage</li>
              <li>Unlimited Photos & Videos</li>
              <li>Exclusive Support</li>
              <li>7-day free trial</li>
            </ul>
          </div>

          {/* Growth Plan */}
          <div className="bg-slate-900/50 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-white">Growth Plan</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$59</span>
              <span className="text-slate-400">/per month</span>
            </div>
            <p className="text-slate-400 mb-6">No credit card required</p>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg mb-8">
              Try for free
            </button>
            <ul className="space-y-4 text-slate-400">
              <li>400 GB Storage</li>
              <li>Unlimited Photos & Videos</li>
              <li>Exclusive Support</li>
              <li>7-day free trial</li>
            </ul>
          </div>

          {/* Business Plan */}
          <div className="bg-slate-900/50 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-white">Business</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$139</span>
              <span className="text-slate-400">/per month</span>
            </div>
            <p className="text-slate-400 mb-6">No credit card required</p>
            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg mb-8">
              Try for free
            </button>
            <ul className="space-y-4 text-slate-400">
              <li>400 GB Storage</li>
              <li>Unlimited Photos & Videos</li>
              <li>Exclusive Support</li>
              <li>7-day free trial</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
