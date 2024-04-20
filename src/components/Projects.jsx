import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiBootstrap,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite
} from "react-icons/si";
import {
  Lacasse,
  LevelUp
} from "../constants/Constant";
import Project_prop from "./Project_prop";

import Typewriter from "../components/Typewriter";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10 mb-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >

          <Project_prop
            title="LevelUp"
            para="I successfully designed LevelUp's landing page, ensuring it was SEO-friendly 
                  and pixel-perfect to the Adobe XD design. The page connects users with property 
                  owner contact information based on address input, enhancing seller connections."
            img={LevelUp}
            link="https://levelup-tools.com/"
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
            bootstrap={
              <Tooltip title="Bootstrap" arrow>
                <IconButton>
                  <SiBootstrap className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
           <Project_prop
            title="Lacasse"
            para="I led the development of Lacasse, a platform for buying and selling car spare parts, 
                  translating Figma designs into a visually appealing and user-friendly website. Integrating 
                  various APIs, I ensured seamless data exchange for real-time information on spare parts 
                  availability and pricing. Prioritizing user experience, Lacasse offers easy navigation, 
                  quick search functionality, and a streamlined purchasing process. The platform has become a 
                  go-to resource for automotive enthusiasts and professionals, showcasing the successful collaboration between design and development."
            img={Lacasse}
            link="https://lacase.ma/home"
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
              <Tooltip title="Tailwind Css" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="ReactJs" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
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
        </div>
      </div>
      <div className="my-5 w-[100%] py-5 text-center text-5xl bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
      <Typewriter  delay={100} text={"More Coming soon..."} ></Typewriter>
      </div>
    </section>
  );
};
export default Projects;
