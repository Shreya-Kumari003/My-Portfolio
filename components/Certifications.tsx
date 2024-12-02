import { CgArrowTopRight } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";

const certificates = [
  {
    company: "Google",
    year: "2024",
    title: "Google Analytics Certification",
    results: [
      { title: "Mastered website traffic analysis and user behavior tracking." },
      { title: "Gained expertise in setting up and managing Google Analytics accounts." },
      { title: "Learned to generate actionable insights from data." },
    ],
    link: "https://www.linkedin.com/in/shreya-kumari-b650b921a/details/certifications/",
    image: "/c4.png",
  },
  {
    company: "Accenture",
    year: "2024",
    title: "Data Analytics and Visualization Internship",
    results: [
      { title: "Gained skills in data cleaning and modeling." },
      { title: "Developed proficiency in data visualization and storytelling." },
      { title: "Learned to present insights effectively to clients." },
    ],
    link: "https://www.linkedin.com/in/shreya-kumari-b650b921a/details/certifications/",
    image: "/c2.png",
  },
  {
    company: "Walmart Global Tech",
    year: "2024",
    title: "Advanced Software Engineering Internship",
    results: [
      { title: "Mastered advanced data structures" },
      { title: "Learned to design scalable architectures." },
      { title: "Enhanced skills in database designing and data processing." },
    ],
    link: "https://www.linkedin.com/in/shreya-kumari-b650b921a/details/certifications/",
    image: "/c1.png",
  },
  {
    company: "Developer Student Clubs",
    year: "2024",
    title: "Hotstar Clone Bootcamp by Devtown",
    results: [
      { title: "Built a Hotstar clone using HTML, CSS, and JavaScript." },
      { title: "Crafted interactive interfaces. " },
      { title: "Gained hands-on experience in application design." },
    ],
    link: "https://www.linkedin.com/in/shreya-kumari-b650b921a/details/certifications/",
    image: "/c3.png",
  },
];

const grainImage = "/grain1.png";

export const Certifications = () => {
  return (
    <section id="achievement" className="pb-16 lg:py-24">
      <div className="container">
        <div className="text-purple text-[14px] my-3 flex justify-center tracking-widest mt-[36px]">
          <h1 className="heading">
          Certifications and
            <span className=" text-pink-500"> Achievements 🎉 </span>
          </h1>
        </div>
        {/* <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2> */}
        <p
          className="text-center md:text-lg lg:text-xl text-white/60 mt-4
        max-w-md mx-auto"
        >
          A glimpse into my certifications and the skills I've gained!
        </p>
        <div className="flex flex-col md:mt-20 mt-10 gap-20">
          {certificates.map((certificate, certificateIndex) => (
            <div
              key={certificate.title}
              className="bg-gray-800 
             z-0 overflow-hidden after:z-10 after:content-[''] rounded-3xl after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none
            sticky
            "
              style={{
                top: `calc(64px + ${certificateIndex * 40}px`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{
                  backgroundImage: `url(${grainImage})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 !!lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{certificate.company}</span>
                    <span>&bull;</span>
                    <span>{certificate.year}</span>
                  </div>
                  <h3
                    className="font-serif md:mt-5 md:text-4xl text-2xl
                    mt-2" 
                  >
                    {certificate.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {certificate.results.map((result,index) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50" key={index}>
                        <FaRegCheckCircle className="size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={certificate.link} target="_blank">
                    <button
                      className="bg-pink-600 text-white/90 h-12 w-full
                  md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>See Credentials</span>
                      <CgArrowTopRight className="size-4 md:size-6" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 rounded-t-2xl
                    lg:absolute lg:h-[460px] lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
