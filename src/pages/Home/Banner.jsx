"use client"

const Banner = () => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>

      <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 min-h-[500px]">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto px-4">
          <div className="flex-1 flex justify-center relative animate-slideInRight">
            <div className="relative w-full max-w-lg">
              {/* Main large image */}
              <img
                src="https://i.ibb.co.com/nqPnPH1B/authentic-group-therapy-meeting.jpg"
                alt="Professional team meeting"
                className="w-full h-72 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              />

              {/* Smaller overlapping image - top right */}
              <img
                src="https://i.ibb.co.com/PL8f0bK/sabri-tuzcu-Ch-Kz-Td-D5-P3s-unsplash.jpg"
                alt="Remote work setup"
                className="absolute -top-4 -right-4 w-32 h-24 object-cover rounded-lg shadow-lg border-4 border-white animate-float animate-delay-200 hover:scale-110 transition-transform duration-300"
              />

              {/* Smaller overlapping image - bottom left */}
              <img
                src="https://i.ibb.co.com/1tZyx6hQ/omar-prestwich-HSd2y7-Vj-X-E-unsplash.jpg"
                alt="Business success"
                className="absolute -bottom-4 -left-4 w-32 h-24 object-cover rounded-lg shadow-lg border-4 border-white animate-pulse-slow animate-delay-400 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-base-content mb-4 animate-fadeInUp">
              Find Your <span className="text-primary">Dream Job</span> Today
            </h1>
            <p className="text-lg text-base-content/80 mb-8 max-w-lg animate-fadeInUp animate-delay-200">
              Connect with top employers and discover thousands of job opportunities. Your perfect career match is just
              one click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animate-delay-400">
              <button className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Find Jobs
              </button>
              <button className="btn btn-outline btn-lg hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
