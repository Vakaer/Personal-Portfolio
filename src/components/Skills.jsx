import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";
import { SKILLS } from "../constants/data";

const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <section className="EXPERIENCE px-5 py-8 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG p-5 grid-cols-3 grid md:grid-cols-6 place-items-start gap-10 max-sm:p-2 mt-10"
          data-aos="zoom-out-right"
        >
          {SKILLS.map(skill => (
            <Image name={skill.name} img={skill.image}></Image>
          ))}
        </div>
      </section>
    </>
  );
};
export default Skills;
