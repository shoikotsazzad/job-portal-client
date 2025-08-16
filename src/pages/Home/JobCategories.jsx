"use client"

const JobCategories = () => {
  const categories = [
    {
      title: "Technology",
      icon: "💻",
      jobCount: "2,450",
      description: "Software, AI, Data Science",
    },
    {
      title: "Healthcare",
      icon: "🏥",
      jobCount: "1,890",
      description: "Medical, Nursing, Research",
    },
    {
      title: "Finance",
      icon: "💰",
      jobCount: "1,650",
      description: "Banking, Investment, Accounting",
    },
    {
      title: "Marketing",
      icon: "📈",
      jobCount: "1,320",
      description: "Digital, Content, Brand",
    },
    {
      title: "Design",
      icon: "🎨",
      jobCount: "980",
      description: "UI/UX, Graphic, Product",
    },
    {
      title: "Education",
      icon: "📚",
      jobCount: "1,150",
      description: "Teaching, Training, Research",
    },
    {
      title: "Sales",
      icon: "🤝",
      jobCount: "1,780",
      description: "B2B, Retail, Business Dev",
    },
    {
      title: "Engineering",
      icon: "⚙️",
      jobCount: "2,100",
      description: "Mechanical, Civil, Electrical",
    },
  ]

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">Browse Jobs by Category</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Explore opportunities across various industries and find your perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-3 hover:scale-105 group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "slideInUp 0.6s ease-out forwards",
              }}
              onClick={() => console.log(`Clicked on ${category.title} category`)}
            >
              <div className="card-body p-6 text-center">
                <div className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="card-title text-lg font-semibold text-base-content justify-center mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-sm text-base-content/60 mb-3 group-hover:text-base-content/80 transition-colors duration-300">
                  {category.description}
                </p>
                <div className="badge badge-primary badge-lg group-hover:badge-secondary group-hover:scale-110 transition-all duration-300">
                  {category.jobCount} jobs
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="btn btn-outline btn-primary btn-lg hover:btn-primary transform hover:scale-105 active:scale-95 transition-all duration-300 group"
            onClick={() => console.log("View all categories clicked")}
          >
            <span className="group-hover:scale-110 transition-transform duration-200">View All Categories</span>
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

export default JobCategories
