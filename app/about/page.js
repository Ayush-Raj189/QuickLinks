import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-4 sm:px-6 py-12 md:py-16">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-6">
              About <span className="text-purple-600">QuickLinks</span>
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 text-base sm:text-lg">
                At <span className="font-semibold text-purple-600">QuickLinks</span>, we believe that shortening URLs should be <span className="font-medium">fast, secure, and private</span>. Our tool puts <strong>you</strong> first — no sign-ups, no tracking, no nonsense.
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                Perfect for students, developers, marketers, and everyday users. Create and share shortened links instantly with our simple yet powerful platform.
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                <span className="font-medium">Open-source and transparent</span> — that's the QuickLinks difference.
              </p>
            </div>
          </div>

          {/* Image - Using standard img tag */}
          <div className="lg:w-1/2 w-full h-64 sm:h-80 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="URL shortening illustration"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-10 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-3">Our Mission</h3>
            <div className="w-16 h-1 bg-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
              To simplify digital sharing while respecting your privacy. No data collection, no compromises — just clean, fast URL shortening.
            </p>
          </div>
        </div>

        {/* Features Grid - Responsive columns */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: '⚡', title: 'Instant Results', text: 'Get shortened links in seconds' },
            { icon: '🔒', title: 'No Tracking', text: 'We don\'t monitor your clicks' },
            { icon: '🎯', title: 'Simple UI', text: 'Clean interface, no clutter' },
            { icon: '📱', title: 'Mobile-Friendly', text: 'Works perfectly on any device' },
            { icon: '🔄', title: 'Reliable', text: '99.9% uptime guarantee' },
            { icon: '💻', title: 'Developer API', text: 'Easy integration options' }
          ].map((item, index) => (
            <div key={index} className="bg-purple-50 p-5 rounded-lg border border-purple-100 hover:shadow-md transition-shadow">
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h4 className="font-bold text-purple-700">{item.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About