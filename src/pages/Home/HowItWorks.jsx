"use client"

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Create Your Profile",
      description: "Sign up and build a compelling profile that showcases your skills and experience.",
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "Search & Apply",
      description: "Browse thousands of job listings and apply to positions that match your interests.",
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Get Hired",
      description: "Connect with employers, ace your interviews, and land your dream job.",
    },
  ]

  const stats = [
    { number: "50K+", label: "Active Jobs" },
    { number: "25K+", label: "Companies" },
    { number: "100K+", label: "Job Seekers" },
    { number: "95%", label: "Success Rate" },
  ]

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">How It Works</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Getting started is easy. Follow these simple steps to find your next opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="text-center relative group cursor-pointer"
              style={{
                animationDelay: `${index * 0.3}s`,
                animation: "slideInUp 0.8s ease-out forwards",
              }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/20 z-0 group-hover:bg-primary/40 transition-colors duration-500">
                  <div className="h-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                </div>
              )}

              <div className="relative z-10">
                <div className="w-24 h-24 bg-primary text-primary-content rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:bg-secondary transition-all duration-500 cursor-pointer">
                  <div className="group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-content rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-125 group-hover:bg-accent transition-all duration-300">
                  {step.id}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-base-content mb-3 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-base-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-base-content/70 font-medium group-hover:text-base-content transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}

export default HowItWorks
