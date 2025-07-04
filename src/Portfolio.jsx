import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Calendar,
  Trophy,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Language" },
    { name: "Node.js", level: 65, category: "Backend" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 88, category: "Frontend" },
    { name: "Express.js", level: 75, category: "Backend" },
    { name: "MySQL", level: 80, category: "Database" },
    { name: "Python", level: 65, category: "Language" },
    { name: "PHP", level: 78, category: "Backend" },
    { name: "Git", level: 88, category: "Tools" },
    { name: "MongoDB", level: 75, category: "Database" },
  ];

  const projects = [
    {
      title: "PetFood Ecommerce Platform",
      description:
        "A comprehensive full-stack ecommerce solution for pet food with secure authentication, advanced search, and seamless shopping experience.",
      image:
        "https://res.cloudinary.com/da6ficv2z/image/upload/v1751560592/2025-07-03_bpmyq3.png",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Stripe",
      ],
      features: [
        "JWT Authentication & Authorization",
        "Advanced Product Search & Filtering",
        "Shopping Cart & Wishlist Management",
        "Secure Payment Integration",
        "Responsive Design",
      ],
      githubLink: "https://github.com/Dhruil/MERN-PET_FOOD.git",
      liveLink: "https://mern-pet-food-ecommerce.vercel.app/",
      period: "Jan 2024 - April 2025",
    },
    {
      title: "FindMyPG - Property Listing Platform",
      description:
        "A sophisticated PG listing platform connecting students with property owners, featuring advanced search and comprehensive property management.",
      image:
        "https://res.cloudinary.com/da6ficv2z/image/upload/v1751560591/2025-07-03_1_l38udz.png",
      technologies: ["React.js", "PHP", "MySQL", "Bootstrap", "Render"],
      features: [
        "Dual Authentication System",
        "Advanced Property Search",
        "Authorized Owner ",
        "Room-wise Facility Management",
        "Booking System",
      ],
      githubLink: "https://github.com/Dhruil/FindMyPG.git",
      liveLink: "https://findmypg-tfpr.onrender.com/",
      period: "Jan 2025 - May 2025",
    },
    {
      title: "MealWala - Food Ordering App",
      description:
        "A dynamic food ordering platform with real-time restaurant data, optimized performance, and exceptional user experience.",
      image:
        "https://res.cloudinary.com/da6ficv2z/image/upload/v1751560591/2025-07-03_2_nibcpc.png",
      technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "Swiggy API"],
      features: [
        "Real-time Restaurant Data",
        "Advanced Shimmer UI Effects",
        "Lazy Loading & Code Splitting",
        "Search & Filter Functionality",
        "Cart Management",
      ],
      githubLink: "https://github.com/Dhruil/Mealwala.git",
      liveLink: "https://mealwala.vercel.app/",
      period: "Oct 2024 - Nov 2024",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "L D College of Engineering",
      location: "Ahmedabad, Gujarat",
      period: "June 2021 - May 2025",
      grade: "CPI: 8.51",
      description:
        "Specialized in Information Technology with focus on web development, data structures, algorithms, and software engineering principles.",
      achievements: [
        "Maintained consistent academic excellence with 8.51 CPI",
        "Active participant in technical events and hackathon",
        "Completed multiple industry-relevant projects",
        "Strong foundation in computer science fundamentals",
      ],
    },
    {
      degree: "Higher Secondary Education Board (12th Grade)",
      institution: "Vidhyadhish Vidhyasankul",
      location: "Gujarat, India",
      period: "June 2019 - March 2021",
      grade: "Percentage: 88.15%",
      description:
        "Completed higher secondary education with Science stream, focusing on Physics, Chemistry, Mathematics",
      achievements: [
        "Achieved 88.15% in board examinations",
        "Strong foundation in Mathematics and Science",
        "Early exposure to computer programming",
        "Participated in various academic competitions",
      ],
    },
  ];

  const experience = [
    {
      title: "Full Stack Web Development Intern",
      company: "Meetanshi Technologies",
      period: "Jan 2025 - April 2025",
      location: "Bhavnagar",
      description:
        "Developed a PG listing web application from scratch during my internship, now live and accessible with real-time PG data. The platform allows PG owners to manage listings and users to explore accommodations through an easy-to-use interface.",
      achievements: [
        "Built the complete PG platform (FindMyPG) using ReactJs, Php & MySQL.",

        "Designed and implemented secure user authentication for owners and users.",

        "Integrated real-time PG data with owner-managed listings and user access.",

        "Launched the live platform with working search, filters, and facility features.",

      ],
      technologies: ["React.js", "PHP", "MySQL", "Tailwind CSS", "Git"],
    },
    {
      title: "Emerging Technologies (AI & Cloud) Intern",
      company: "Edunet Foundation",
      period: "Jan 2024 - Feb 2025",
      location: "Remote",
      description:
        "Completed an online IBM course focused on AI and cloud technologies. Gained practical knowledge of IBM Watson Assistant and IBM Cloud through hands-on learning and chatbot creation.",
      achievements: [
        "Learned AI and cloud fundamentals through IBM’s online training.",
        "Built a basic chatbot using IBM Watson Assistant in Watson Studio.",
        "Explored IBM Cloud tools for deploying and managing AI applications.",
        "Gained theoretical understanding of AI/ML integration and cloud concepts.",
      ],
      technologies: ["IBM Watson", "IBM Cloud", "Chat Bot"],
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceId = "service_j4nktci"; // ← Replace with your EmailJS service ID
    const templateId = "template_tbhsf6b"; // ← Replace with your EmailJS template ID
    const publicKey = "2g_fswdwhO5UoGgF4"; // ← Replace with your EmailJS public key
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Dhruil Parmar", // this goes in your template
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Dhruil Parmar
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Education",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white">
              {[
                "Home",
                "About",
                "Education",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Hey, I'm <span className="text-blue-600">Dhruil Parmar</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                A Result-Oriented React Developer & Full Stack Engineer
              </p>
            </div>

            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Recent B.Tech graduate in Information Technology with expertise in
              creating user-centric interfaces and modern web applications.
              Passionate about delivering innovative solutions that make a real
              impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Dhruil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Github className="text-gray-700" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruil-parmar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="text-gray-700" size={24} />
              </a>
              <a
                href="mailto:parmardhruil2611@gmail.com"
                className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="text-gray-700" size={24} />
              </a>
            </div>

            <div className="mt-16">
              <ChevronDown
                className="mx-auto animate-bounce text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                size={40}
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                Get to know me!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                I'm a passionate <strong>React Developer</strong> and{" "}
                <strong>Full Stack Engineer</strong> with a strong foundation in
                modern web technologies. My journey in web development has been
                driven by a love for creating intuitive user experiences and
                solving complex problems through elegant code solutions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                With hands-on experience in both frontend and backend
                development, I bring a comprehensive understanding of the entire
                web development lifecycle. I'm always eager to learn
                cutting-edge technologies and contribute to innovative projects
                that make a real impact.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                I'm open to <strong>job opportunities</strong> where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience, then don't hesitate to{" "}
                <strong>contact me</strong>.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg"
              >
                Contact Me
              </Button>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                My Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.slice(0, 12).map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-xl font-medium text-blue-600 mb-2">
                        {edu.institution}
                      </CardDescription>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy size={16} />
                          <span className="font-semibold text-green-600">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-xl font-medium text-blue-600 mb-2">
                        {exp.company}
                      </CardDescription>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Briefcase className="text-blue-600" size={24} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-blue-50 text-blue-700 border-blue-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Here you will find some of the personal and client projects that I
              created with each project containing its own case study
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full  object-fill rounded-lg shadow-lg"
                  />
                </div>
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "md:col-start-1" : ""
                  }`}
                >
                  <h3 className="text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="mr-2" size={16} />
                      View Code
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development. Let's build something amazing together!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:parmardhruil2611@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      parmardhruil2611@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a
                      href="tel:+917048137331"
                      className="text-blue-600 hover:underline"
                    >
                      +91 7048137331
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <span className="text-gray-600">
                      Ahmedabad, Gujarat, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Dhruil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Github className="text-gray-700" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhruil-parmar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Linkedin className="text-gray-700" size={24} />
                </a>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Your Message"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dhruil Parmar</h3>
              <p className="text-gray-400 leading-relaxed">
                A React Developer & Full Stack Engineer focused on building
                amazing digital experiences that are fast, accessible, visually
                appealing, and responsive.
              </p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Social</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <a
                  href="https://github.com/Dhruil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhruil-parmar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:parmardhruil2611@gmail.com"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © Copyright 2025. Made by{" "}
              <span className="text-white font-semibold">Dhruil Parmar</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
