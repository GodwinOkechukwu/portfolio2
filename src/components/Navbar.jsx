import React from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/projects", text: "Project" },
    { path: "/skills", text: "Skill" },
    { path: "/resume", text: "Resume" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <nav className="w-[90%] max-w-5xl mx-auto py-6">
      <ul className="flex justify-between text-sm sm:text-base text-white font-medium">
        {navLinks.map((link, i) => {
          const isActive = currentRoute === link.path;

          return (
            <li key={i}>
              <Link
                to={link.path}
                className={`relative px-2 py-1 transition-all duration-300 ease-in-out 
                hover:text-yellow-400
                ${
                  isActive
                    ? "text-yellow-400 after:scale-100"
                    : "text-white after:scale-0"
                }
                after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-yellow-400 after:transition-transform after:duration-300 after:origin-left`}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
