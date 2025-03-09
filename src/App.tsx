import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  BookOpen,
  Code,
  Award,
  Briefcase,
  Star,
  Home,
  User,
  Wrench,
  FileText,
  Phone as PhoneIcon,
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-sm shadow-purple-500/20 shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              PSK
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { icon: Home, text: "Home", id: "home" },
                { icon: User, text: "About", id: "about" },
                { icon: Wrench, text: "Skills", id: "skills" },
                { icon: FileText, text: "Experience", id: "experience" },
                { icon: PhoneIcon, text: "Contact", id: "contact" },
              ].map(({ icon: Icon, text, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300
                    ${
                      isScrolled
                        ? "text-purple-300 hover:text-purple-400 hover:bg-purple-900/50"
                        : "text-purple-200 hover:bg-purple-800/30"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header
        id="home"
        className="bg-black/80 backdrop-blur-sm shadow-purple-500/20 shadow-lg pt-24"
      >
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-purple-500 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Prachi Suresh Kadam
              </h1>
              <p className="text-2xl text-purple-300 mt-2 font-semibold">
                Aspiring Software Developer
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        {/* About Section */}
        <section
          id="about"
          className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-purple-500/20 transform hover:scale-[1.02] transition-transform"
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-4 flex items-center">
            <Star className="w-8 h-8 mr-2 text-purple-500" />
            About Me
          </h2>
          <p className="text-purple-200 leading-relaxed text-lg">
            I am a dedicated and passionate engineering student with hands-on
            experience in software development and problem-solving. Proficient
            in Python, C Programming, and Data Structures and Algorithms (DSA),
            I am driven by my curiosity to build innovative solutions.
          </p>
        </section>

        {/* Education Section */}
        <section className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-purple-500/20">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-purple-500 mr-2" />
            <h2 className="text-3xl font-bold text-purple-400">Education</h2>
          </div>
          <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-xl p-6 border border-purple-700/50">
            <h3 className="text-2xl font-semibold text-purple-300">
              Bachelor of Engineering
            </h3>
            <p className="text-purple-400 mt-2">
              Sindhudurg Shikshan Prasarak Mandal's College of Engineering,
              Kankavli (SSPMCOE)
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-purple-500/20"
        >
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-purple-500 mr-2" />
            <h2 className="text-3xl font-bold text-purple-400">Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-xl p-6 border border-purple-700/50 transform hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-semibold text-purple-300">
                CodSoft Internship
              </h3>
              <ul className="list-none space-y-2 text-purple-200 mt-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Gained practical experience in software development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Collaborated with team members on various projects
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-xl p-6 border border-purple-700/50 transform hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-semibold text-purple-300">
                College Internship Program
              </h3>
              <p className="text-purple-200 mt-3">
                Participated in hands-on training and gained valuable insights
                into software development and teamwork.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-purple-500/20"
        >
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-purple-500 mr-2" />
            <h2 className="text-3xl font-bold text-purple-400">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Python", color: "from-purple-900 to-purple-700" },
              { name: "C Programming", color: "from-purple-800 to-purple-600" },
              {
                name: "Data Structures and Algorithms (DSA)",
                color: "from-purple-700 to-purple-500",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className={`bg-gradient-to-r ${skill.color} rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform`}
              >
                <span className="text-purple-100 font-semibold text-lg block text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-purple-500/20">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-purple-500 mr-2" />
            <h2 className="text-3xl font-bold text-purple-400">
              Certifications
            </h2>
          </div>
          <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-xl p-6 border border-purple-700/50 transform hover:scale-[1.02] transition-transform">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3">
                <img
                  src="../cert.jpg"
                  alt="Certificate"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold text-purple-300">
                  Internship Certificate - Codsoft
                </h3>
                <p className="text-purple-200 mt-3">
                  Successfully completed the internship program at Codsoft,
                  demonstrating proficiency in software development and
                  practical application of programming concepts.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-xl p-6 border border-purple-700/50 transform hover:scale-[1.02] transition-transform">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3">
                <img
                  src="../cert2.jpg"
                  alt="Certificate"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold text-purple-300">
                  Internship Certificate - SSPMCOE
                </h3>
                <p className="text-purple-200 mt-3">
                  Successfully completed the internship program at SSPMCOE,
                  demonstrating proficiency in software development and
                  practical application of programming concepts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Contact Information */}
      <footer
        id="contact"
        className="bg-black/90 backdrop-blur-sm border-t border-purple-800 mt-12"
      >
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Contact Me
              </h3>
              <div className="flex items-center space-x-2 text-purple-300 hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:prachikadam2010@gmail.com"
                  className="hover:underline"
                >
                  prachikadam2010@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <Phone className="w-5 h-5" />
                <span>9730216250</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <MapPin className="w-5 h-5" />
                <span>Kankavli, Maharashtra</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-end space-x-8">
              <a
                href="https://github.com/prachisuresh18"
                className="text-purple-400 hover:text-purple-300 transform hover:scale-110 transition-transform"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/prachi-kadam-932b16287/"
                className="text-purple-400 hover:text-purple-300 transform hover:scale-110 transition-transform"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
