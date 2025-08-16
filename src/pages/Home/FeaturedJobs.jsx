"use client"

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      logo: "https://i.ibb.co.com/JRHpsL4q/all-day-long-front-computer.jpg",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $130k",
      logo: "https://i.ibb.co.com/SXk7SR0d/female-web-designer-with-papers-notes-office.jpg",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $100k",
      logo: "https://i.ibb.co.com/5XX7WYxZ/man-designing-websites-high-angle.jpg",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataFlow Corp",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $140k",
      logo: "https://i.ibb.co.com/yc5DFydB/ui-ux-representations-with-laptop.jpg",
    },
  ]

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">Featured Jobs</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover hand-picked opportunities from top companies looking for talented professionals like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "slideInUp 0.6s ease-out forwards",
              }}
            >
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={`${job.company} logo`}
                        className="object-cover w-full h-full group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="card-title text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h3>
                    <p className="text-base-content/70 font-medium group-hover:text-base-content transition-colors duration-300">
                      {job.company}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <div className="badge badge-outline group-hover:badge-primary group-hover:text-primary-content transition-all duration-300">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {job.location}
                      </div>
                      <div className="badge badge-primary badge-outline group-hover:badge-primary group-hover:text-primary-content transition-all duration-300">
                        {job.type}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-primary font-semibold group-hover:text-secondary transition-colors duration-300">
                        {job.salary}
                      </span>
                      <button
                        className="btn btn-primary btn-sm hover:btn-secondary transform hover:scale-110 active:scale-95 transition-all duration-200"
                        onClick={() => console.log(`Applied to ${job.title}`)}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="btn btn-outline btn-lg hover:btn-primary transform hover:scale-105 active:scale-95 transition-all duration-300 group"
            onClick={() => console.log("View all jobs clicked")}
          >
            View All Jobs
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default FeaturedJobs
