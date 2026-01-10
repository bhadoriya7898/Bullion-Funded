import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo's/navbarlogo.png";
import arrow from "../assets/arrows/downarrow.png";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  // { name: "About Us", path: "/about" },
  { name: "How it works", path: "/how-it-works" },
  { name: "Models", path: "/x-challenge" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center pt-5 relative z-50">
      <nav className="w-full max-w-[1307px] h-[58px] flex items-center justify-between px-4 lg:px-0">

        {/* LOGO */}
        
        <Link to="/">
  <img
    src={logo}
    alt="Profitx Founded"
    className="h-[36px] md:h-[45px] object-contain cursor-pointer"
  />
</Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center gap-[85px]">

          {/* CENTER NAV */}
          <div
            className="relative flex items-center gap-2 px-[22px] py-[15px]
                       rounded-[13px] h-[58px]
                       bg-[#84F34F1A]
                       border border-[rgba(255,255,255,0.12)]"
          >
            {/* GREEN GLOW */}
            <div
              className="absolute top-1/2 left-1/2
                         -translate-x-1/2 -translate-y-1/2
                         w-[260px] h-[120px]
                         rounded-full pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(130,243,82,0.4) 0%, rgba(130,243,82,0.22) 35%, rgba(130,243,82,0.08) 55%, transparent 70%)",
              }}
            />

            {/* LINKS */}
            <div className="relative z-10 flex items-center gap-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-[10px] py-[5px] rounded-md text-[18px] font-medium transition-all
                    ${
                      isActive
                        ? "text-[#82F352]"
                        : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden lg:flex items-center gap-[15px]">
          <button className="flex items-center gap-2 h-[48px] px-[20px]
                             rounded-[10px] bg-[#82F352]
                             text-[18px] font-bold text-[#090909]">
            Platform
            <img src={arrow} alt="arrow" className="w-[20px] h-[20px]" />
          </button>

          <button className="h-[48px] px-[20px]
                             rounded-[10px] bg-[#82F3520D]
                             text-[18px] font-bold text-[#82F352]">
            Login
          </button>
        </div>

        {/* ================= MOBILE MENU ICON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-[28px]"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full
                        bg-black/95 backdrop-blur-md
                        py-6 px-6 flex flex-col gap-6">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-white text-[18px] font-medium"
            >
              {item.name}
            </NavLink>
          ))}

          <div className="flex flex-col gap-4 pt-4 border-t border-white/20">
            <button className="h-[48px] rounded-[10px]
                               bg-[#82F352] text-[18px]
                               font-bold text-[#090909]">
              Platform
            </button>

            <button className="h-[48px] rounded-[10px]
                               bg-[#82F3520D]
                               text-[18px] font-bold text-[#82F352]">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
