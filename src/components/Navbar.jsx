import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="NAVBAR p-5 mx-20 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
      <div className="NAVBAR flex justify-between capitalize">
        <div className="LOGO">
          <a
            href="#"
            className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
          >
            {"<Waqar/>"}
          </a>
        </div>
        <div className="NAVLINKS text-[20px] translate-x-[385px] max-sm:hidden flex gap-12 text-[#00040f] dark:text-[#e1e1e1]">
          {["Home", "Experience", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-500">
              {item}
            </a>
          ))}
          <button onClick={handleTheme}>
            {theme === "dark" ? <HiMoon className="-translate-y-1 text-2xl" /> : <HiSun className="-translate-y-1 text-2xl" />}
          </button>
        </div>
        <button onClick={() => setNav(!nav)}>
          <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
        </button>
      </div>
      {nav && <Menu />}
    </section>
  );
};

export default Navbar;
