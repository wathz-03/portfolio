const Contact = () => {
  const contactInfo = [
    {
      type: "Phone",
      value: "0769315478",
      href: "tel:+94769315478",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
    },
    {
      type: "Personal Email",
      value: "piyarawathsiluni@gmail.com",
      href: "mailto:piyarawathsiluni@gmail.com",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "University Email",
      value: "22fis0450@ms.sab.ac.lk",
      href: "mailto:22fis0450@ms.sab.ac.lk",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/wathz-03",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "hover:text-gray-700",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/wathsiluni-liyanage",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology. Feel free to reach out through
            any of the channels below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-left group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  {contact.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {contact.type}
                  </h4>
                  <p className="text-gray-600">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links & Call to Action */}
          <div className="animate-fade-in-right">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <p className="text-gray-600 mb-8">
                Follow my journey and connect with me on social media to stay
                updated with my latest projects and insights.
              </p>

              <div className="flex space-x-6 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-200`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Let's Work Together
                </h4>
                <p className="text-gray-600 mb-6">
                  I'm interested in collaborating on cybersecurity projects, web
                  development, and UI/UX design initiatives. Let's create
                  something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:piyarawathsiluni@gmail.com"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center"
                  >
                    Send Email
                  </a>
                  <a
                    href="tel:+94769315478"
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto animate-fade-in-up">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-4">
              "Passionate about creating secure, efficient, and beautiful
              digital experiences that make a difference."
            </blockquote>
            <cite className="text-gray-500 font-medium">
              - Wathsiluni Liyanage
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
