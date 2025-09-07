const About = () => {
  const skills = [
    {
      category: "Cybersecurity",
      items: [
        "Network Security",
        "Ethical Hacking",
        "Vulnerability Assessment",
        "Security Analysis",
      ],
      icon: "🛡️",
    },
    {
      category: "Database Management",
      items: ["SQL", "Database Design", "Data Modeling", "Query Optimization"],
      icon: "🗄️",
    },
    {
      category: "UI/UX Design",
      items: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      icon: "🎨",
    },
    {
      category: "Development",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      icon: "💻",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate undergraduate student pursuing my degree at
            Sabaragamuwa University of Sri Lanka. Currently in my 2nd year, I'm
            dedicated to expanding my knowledge in cybersecurity, database
            management, and creating intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">
                    2nd Year Undergraduate at Sabaragamuwa University of Sri
                    Lanka
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Passion Areas</h4>
                  <p className="text-gray-600">
                    Cybersecurity, Database Management, and UI/UX Design
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Current Focus</h4>
                  <p className="text-gray-600">
                    Building innovative projects and expanding technical
                    expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in-right">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Student ID
              </h3>
              <p className="text-2xl font-mono text-blue-600 mb-4">22FIS0450</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                University Email
              </h3>
              <p className="text-blue-600">22fis0450@ms.sab.ac.lk</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-600 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
