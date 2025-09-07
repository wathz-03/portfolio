const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Wathsiluni
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Undergraduate Student | Cybersecurity Enthusiast | UI/UX
                Designer
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Passionate about cybersecurity, database management, and
                creating beautiful user experiences. Currently in my 2nd year at
                Sabaragamuwa University of Sri Lanka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  View My Work
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Wathsiluni Liyanage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
