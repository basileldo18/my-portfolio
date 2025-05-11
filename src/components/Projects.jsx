import Project_prop from "./project_prop";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Portfolio Website"
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            link=""
            github_link=""
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="AI Legal Assistant"
            para="AI Legal Assistant is a smart platform for drafting, reviewing, and translating legal documents, offering AI-based chat support, document suggestions, and advocate search for fast and reliable legal help"
            img={Portfolio}
            link=""
            github_link=""
            react={
              <Tooltip title="Flask" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="CSS" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="ToxiTrack AI"
            para="Toxicity Analyzer is a web-based tool that uses AI to assess online comments for toxicity, threats, insults, and hate, powered by the advanced BERT model."
            img={Rocket}
           // link="https://stark-rockets.onrender.com/"
            github_link="https://github.com/basileldo18/comment-toxicity-analyzer.git"
            html5={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="Flask" arrow>
<IconButton>
  <img
    src="https://www.vectorlogo.zone/logos/palletsprojects/palletsprojects-icon.svg"
    alt="Flask"
    className="w-6 h-6 dark:invert"
  />
  
</IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
