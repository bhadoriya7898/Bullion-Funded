import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo's/navbarlogo.png";
import arrow from "../assets/arrows/downarrow.png";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "How it works", path: "/how-it-works" },
  { name: "Models", path: "/x-challenge" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact us", path: "/contact" },
];

const MODEL_ROUTES = ["/x-challenge", "/evaluation", "/express"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isModelRoute = MODEL_ROUTES.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <header className="w-full flex justify-center pt-5 relative z-50">
      <nav className="w-full max-w-[1307px] h-[58px] flex items-center justify-between px-4 lg:px-0">
        {/* LOGO */}
        <Link to="/">
          <img
            src={logo}
            alt="Profitx Founded"
            className="h-[36px] md:h-[45px] object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-[85px]">
          <div
            className="relative flex items-center gap-2 px-[22px] py-[15px]
                       rounded-[13px] h-[58px]
                       bg-[#84F34F1A]
                       border border-[rgba(255,255,255,0.12)]"
          >
            <div
              className="absolute top-1/2 left-1/2
                         -translate-x-1/2 -translate-y-1/2
                         w-[260px] h-[120px]
                         rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(130,243,82,0.4) 0%, rgba(130,243,82,0.22) 35%, rgba(130,243,82,0.08) 55%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex items-center gap-2">
              {navLinks.map((item) => {
                const isModels =
                  item.name === "Models" && isModelRoute;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-[10px] py-[5px] rounded-md text-[18px] font-medium transition
                      ${isActive || isModels ? "text-[#82F352]" : "text-white"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-[15px]">
          <button
            className="flex items-center gap-2 h-[48px] px-[20px]
                       rounded-[10px] bg-[#82F352]
                       text-[18px] font-bold text-[#090909]"
          >
            Platform
            <img src={arrow} alt="arrow" className="w-[20px] h-[20px]" />
          </button>

          <NavLink to="login">
            <button
              className="h-[48px] px-[20px]
                         rounded-[10px] bg-[#82F3520D]
                         text-[18px] font-bold text-[#82F352]"
            >
              Login
            </button>
          </NavLink>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-white text-[30px]"
        >
          <FiMenu />
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md
                    transition-transform duration-300
                    ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white text-[36px]"
        >
          <FiX />
        </button>

        <div className="h-full flex flex-col justify-center items-center gap-8">
          {navLinks.map((item) => {
            const isModels =
              item.name === "Models" && isModelRoute;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-[22px] font-semibold transition
                  ${isActive || isModels ? "text-[#82F352]" : "text-white"}`
                }
              >
                {item.name}
              </NavLink>
            );
          })}

          <div className="flex flex-col gap-4 w-[80%] mt-6">
            <button
              className="h-[50px] rounded-[12px]
                         bg-[#82F352] text-[18px]
                         font-bold text-[#090909]"
            >
              Platform
            </button>

            <NavLink to="login" onClick={() => setOpen(false)}>
              <button
                className="h-[50px] w-full rounded-[12px]
                           bg-[#82F3520D]
                           text-[18px] font-bold text-[#82F352]"
              >
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
