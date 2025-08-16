"use client"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      company: "TechCorp",
      image: "/src/assets/charlesdeluvio-kVg2DQTAK7c-unsplash.jpg",
      text: "Found my dream job within 2 weeks! The platform made it so easy to connect with top companies.",
    },
    {
      name: "Michael Chen",
      role: "HR Manager",
      company: "StartupXYZ",
      image: "/src/assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
      text: "We've hired 15+ talented professionals through this platform. The quality of candidates is exceptional.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Specialist",
      company: "Creative Agency",
      image: "/src/assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
      text: "The job matching algorithm is incredible. I received relevant opportunities that perfectly matched my skills.",
    },
  ]

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">What Our Users Say</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Join thousands of professionals who have found success through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-3 hover:scale-105 group"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: "slideInUp 0.8s ease-out forwards",
              }}
            >
              <div className="card-body p-6">
                <div className="flex items-center mb-4">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-primary">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover w-full h-full group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-base-content group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-base-content/60 group-hover:text-base-content/80 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary font-medium group-hover:text-secondary transition-colors duration-300">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-base-content/80 italic group-hover:text-base-content transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div className="flex justify-end mt-4">
                  <div className="rating rating-sm">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${index}`}
                        className="mask mask-star-2 bg-orange-400 hover:bg-orange-500 transition-colors duration-200 cursor-pointer"
                        defaultChecked={i === 4}
                        onClick={() => console.log(`Rated ${i + 1} stars for ${testimonial.name}`)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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

export default Testimonials
