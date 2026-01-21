import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Mail,
  Phone,
  Linkedin,
  Globe,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import profileImg from "./assets/bky.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const resumeData = {
    name: "Brijesh Kumar Yadav",
    title: "Full Stack Software Engineer",
    location: "Kathmandu, Nepal",
    email: "biryourhell@gmail.com",
    phone: "+977-9819726365 / 9745827350",
    phoneDial: "+9779819726365",
    linkedin: "linkedin.com/in/brijesh-yadav-a0769723b",

    education: [
      {
        degree: "BSC(Hons)Csse",
        institution:
          "Patan College for Professional Studies (University of Bedfordshire)",
        year: "2024",
      },
      {
        degree: "12th Grade",
        institution: "Arniko Awasiya Higher Secondary School, Biratnagar, Nepal",
        year: "2019",
      },
      {
        degree: "10th Grade",
        institution: "Happyland Higher Secondary School, Rajbiraj, Saptari",
        year: "2017",
      },
    ],

    experiences: [
      {
        title: "Junior Developer",
        company: "Horizon Technology",
        period: "04/2080 - 11/2080",
        description:
          "Worked on C#/.NET programming, developing and maintaining web applications, collaborating with team members to ensure high-quality code and project completion.",
      },
      {
        title: "Junior Developer",
        company: "ACAN",
        period: "08/2079 - 03/2080",
        description:
          "Worked on WordPress development, creating and customizing websites, ensuring responsiveness and cross-browser compatibility, and implementing client requirements.",
      },
      {
        title: "Junior Developer",
        company: "Bhibhuti Solution",
        period: "11/2080 - 01/2081",
        description:
          "Worked on PHP(Laravel framework) development, assisting in the creation of dynamic web applications, debugging and troubleshooting code, and collaborating with senior developers on various projects.",
      },
    ],

    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "Developed a full-stack e-commerce platform using Laravel framework with features like product catalog, shopping cart, and payment integration.",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        image:
          "https://placehold.co/600x400/111827/ffffff?text=E-Commerce+Platform",
      },
      {
        title: "Corporate Website",
        description:
          "Created a responsive corporate website using WordPress with custom themes and plugins for enhanced functionality.",
        technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
        image:
          "https://placehold.co/600x400/111827/ffffff?text=Corporate+Website",
      },
      {
        title: "Inventory Management System",
        description:
          "Built an inventory management system using C#/.NET with features for tracking stock levels, generating reports, and managing suppliers.",
        technologies: ["C#", ".NET", "SQL Server", "ASP.NET"],
        image:
          "https://placehold.co/600x400/111827/ffffff?text=Inventory+System",
      },
    ],
  };

  // ===== Skills grouped like your image =====
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 90, color: "from-cyan-400 to-purple-500" },
        { name: "CSS", level: 88, color: "from-cyan-400 to-purple-500" },
        { name: "JavaScript", level: 85, color: "from-cyan-400 to-purple-500" },
        { name: "React", level: 75, color: "from-cyan-400 to-purple-500" },
      ],
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "C#", level: 90, color: "from-purple-400 to-pink-500" },
        { name: ".NET", level: 85, color: "from-purple-400 to-pink-500" },
        { name: "PHP", level: 88, color: "from-purple-400 to-pink-500" },
        { name: "Laravel", level: 85, color: "from-purple-400 to-pink-500" },
      ],
    },
    {
      title: "CMS & Platforms",
      skills: [
        { name: "WordPress", level: 92, color: "from-cyan-400 to-blue-500" },
        { name: "Web Development", level: 88, color: "from-cyan-400 to-blue-500" },
      ],
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "SQL", level: 82, color: "from-orange-400 to-pink-500" },
        { name: "Git", level: 85, color: "from-orange-400 to-pink-500" },
      ],
    },
  ];

  // ===== Small component for skill bar =====
  const SkillBar = ({ name, level, color }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white font-medium">{name}</p>
        <p className="text-gray-300 text-sm">{level}%</p>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
        />
      </div>
    </div>
  );

  // ===== Sections =====
  const HomeSection = () => (
    <div className="min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full opacity-5 blur-3xl animate-bounce -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {resumeData.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            {resumeData.title}
          </p>
          <p className="text-lg text-gray-400">
            Based in {resumeData.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <button
            onClick={() => setActiveSection("about")}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Me
          </button>

          <button
            onClick={() => setActiveSection("contact")}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href={`mailto:${resumeData.email}`}
            className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
          >
            <Mail className="w-5 h-5 text-cyan-400" />
          </a>
          <a
            href={`tel:${resumeData.phoneDial}`}
            className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-colors"
          >
            <Phone className="w-5 h-5 text-purple-400" />
          </a>
          <a
            href={`https://${resumeData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-blue-400" />
          </a>
        </div>
      </div>

      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center">
            <ChevronDown className="w-6 h-6 text-white" />
            <span className="text-xs text-gray-400 mt-2">Scroll down</span>
          </div>
        </motion.div>
      )}
    </div>
  );

  const AboutSection = () => (
    <div className="min-h-screen py-20 px-6 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500 rounded-full opacity-10 blur-2xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* LEFT IMAGE */}
          <div className="lg:w-1/3 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20">
              <img
                src={profileImg}
                alt={resumeData.name}
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/60 backdrop-blur">
                <h3 className="text-xl font-bold">{resumeData.name}</h3>
                <p className="text-sm text-gray-300">{resumeData.title}</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:w-2/3 w-full">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="space-y-6 mb-8 text-gray-200">
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack software engineer with a strong
                foundation in both front-end and back-end technologies. With
                experience in C#/.NET, WordPress, and PHP/Laravel frameworks, I
                build clean, scalable and modern web apps.
              </p>

              <p className="text-lg leading-relaxed">
                I enjoy working in collaborative environments and love learning
                new technologies to deliver high-quality solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{resumeData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{resumeData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <span>{resumeData.linkedin}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>{resumeData.location}</span>
                </div>
              </div>
            </div>

            {/* SKILLS TITLE */}
            <h3 className="text-4xl md:text-5xl font-extrabold text-center mt-14 mb-10">
              <span className="text-white">Technical </span>
              <span className="text-cyan-400">Skills</span>
            </h3>

            {/* SKILLS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillGroups.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-2xl p-6 bg-gradient-to-br from-[#120b2a] to-[#0b0b18] border border-purple-500/20 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                    <h4 className="text-xl font-bold text-white">
                      {group.title}
                    </h4>
                  </div>

                  {group.skills.map((s, i) => (
                    <SkillBar
                      key={i}
                      name={s.name}
                      level={s.level}
                      color={s.color}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const ExperienceSection = () => (
    <div className="min-h-screen py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400">My journey as a software developer</p>
        </motion.div>

        <div className="space-y-8">
          {resumeData.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold">{exp.company}</p>
                </div>
                <p className="text-gray-400">{exp.period}</p>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const EducationSection = () => (
    <div className="min-h-screen py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400">Academic background and qualifications</p>
        </motion.div>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold">{edu.institution}</p>
                </div>
                <p className="text-gray-400">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div className="min-h-screen py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="min-h-screen py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-400">Let's work together on your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{resumeData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{resumeData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <span>{resumeData.linkedin}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>{resumeData.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                >
                  <Mail className="w-6 h-6 text-cyan-400" />
                </a>
                <a
                  href={`tel:${resumeData.phoneDial}`}
                  className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-colors"
                >
                  <Phone className="w-6 h-6 text-purple-400" />
                </a>
                <a
                  href={`https://${resumeData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">Brijesh</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-4">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400 bg-cyan-500/10"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      {renderSection()}
    </div>
  );
}
