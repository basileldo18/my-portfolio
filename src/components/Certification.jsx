import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "Coursera",
    date: "Dec 2024",
    domain: "Data Science",
    icon: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
    link: "https://coursera.org/share/9ad369adc8ae965175df44e15642f2a6",
  },
  {
    title: "Multi AI Agent Systems with crewAI",
    issuer: "DeepLearning.AI",
    date: "Mar 2025",
    domain: "Artificial Intelligence",
    icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
    link: "https://learn.deeplearning.ai/accomplishments/004091a6-99ef-4a25-b381-951946271144?usp=sharing",
  },
  {
    "title": "Workshop On Robotic Operating System",
    "issuer": "Udemy",
    "date": "Feb 2024",
    "domain": "Robotics / Operating Systems",
    icon:"https://img.icons8.com/color/96/artificial-intelligence.png",
    "link": "https://i.postimg.cc/RFmdWGqf/Screenshot-2024-07-06-094501.png"
  }
  ,
    
];

const Certification = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-[#00040f] text-white py-16 px-4 md:px-20 font-['Poppins']"
      id="certifications"
    >
      <h1
        className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl"
        data-aos="fade-down"
      >
        Certification
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={cert.icon}
                alt="cert-icon"
                className="w-16 h-16 object-contain rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-cyan-400">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-2">
              <span className="italic text-gray-400">Issued {cert.date}</span>
            </p>
            <p className="text-sm text-gray-400 mb-4">{cert.domain}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 underline hover:text-blue-300"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
