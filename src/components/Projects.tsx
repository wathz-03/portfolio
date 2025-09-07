const Projects = () => {
  const projects = [
    {
      title: "EscapeRoutes",
      description:
        "A comprehensive travel website providing information about hotels, travel destinations, and activities. Features include destination guides, hotel bookings, activity recommendations, and a secure login panel for personalized experiences.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Hotel information and booking system",
        "Travel destination guides",
        "Activity recommendations",
        "User login panel",
        "Responsive design",
      ],
      status: "Completed",
      type: "Web Development",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Intelligent PDF Reader Chatbot",
      description:
        "An AI-powered chatbot that can read, analyze, and answer questions about PDF documents. Built with modern, privacy-focused technologies to ensure user data security while providing intelligent document interaction.",
      technologies: ["Streamlit", "LangChain", "Ollama"],
      features: [
        "PDF document upload and parsing",
        "Natural language processing",
        "Intelligent Q&A system",
        "Privacy-focused architecture",
        "Real-time chat interface",
      ],
      status: "In Development",
      type: "AI/Machine Learning",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've been working on, showcasing my
            skills in web development, AI, and user experience design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-600 flex items-center"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.gradient}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            I'm always working on new projects and learning new technologies.
            Check out my GitHub for more projects and contributions!
          </p>
          <a
            href="https://github.com/wathz-03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
