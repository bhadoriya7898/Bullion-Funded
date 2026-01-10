import footerBg from "../assets/Footer/footerbg.png";
import facebookIcon from "../assets/Footer/facebook.png";
import instagramIcon from "../assets/Footer/instagram-solid.png";
import youtubeIcon from "../assets/Footer/youtube.png";
import ProfitxLogo from "../assets/Footer/ProfitX.png";

import { FaUser, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ======================================================
          SECTION 1: CTA FOOTER
      ====================================================== */}
      <footer className="w-full bg-[#25421BB2] flex justify-center py-10 px-4">
        <div className="w-full max-w-[965px] bg-[#10190DB2] rounded-[32px]
                        px-6 py-10 md:px-12 md:py-12
                        flex flex-col items-center gap-6 text-center">

          <h2 className="max-w-[520px] text-[26px] md:text-[32px] font-bold text-white">
            Join the Global Community for the Traders, by the Traders
          </h2>

          <p className="max-w-[880px] text-[14px] md:text-[16px] text-white/90">
            Funded Trading is not only a prop trading company. We are a group of
            traders that are enthusiastic about our group's development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => navigate("/login")}
              className="h-[48px] px-8 rounded-full bg-[#82F352] font-bold text-black"
            >
              Login
            </button>

            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[48px] px-8 rounded-full border border-[#82F352]
                         font-bold text-white flex items-center justify-center"
            >
              Join our Discord community
            </a>
          </div>
        </div>
      </footer>

      {/* ======================================================
          SECTION 2: MAIN FOOTER
      ====================================================== */}
      <footer
        className="w-full bg-cover bg-center py-16 px-6"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-14">

          {/* ================= LEFT ================= */}
          <div className="flex-1 flex flex-col gap-10">

            {/* LOGO */}
            <Link to="/">
              <img
                src={ProfitxLogo}
                alt="Profitx Logo"
                className="w-[180px] md:w-[200px] object-contain cursor-pointer"
              />
            </Link>

            {/* LINKS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-20">

              {/* Company */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white text-[18px] font-bold">Company</h4>
                <ul className="flex flex-col gap-3 text-[15px] text-white/90">
                  <li><Link to="/how-it-works">How it works</Link></li>
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/contact">Contact us</Link></li>
                </ul>
              </div>

              {/* Models */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white text-[18px] font-bold">Models</h4>
                <ul className="flex flex-col gap-3 text-[15px] text-white/90">
                  <li><Link to="/express">Express Model</Link></li>
                  <li><Link to="/evaluation">Evaluation Model</Link></li>
                  <li><Link to="/x-challenge">X Challenge</Link></li>
                </ul>
              </div>

              {/* Community + Platform */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h4 className="text-white text-[18px] font-bold">Community</h4>
                  <Link to="/community" className="text-[15px] text-white/90">
                    Join local community
                  </Link>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-white text-[18px] font-bold">Platform</h4>
                  <Link to="/platform" className="text-[15px] text-white/90">
                    Trading Platform
                  </Link>
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white text-[18px] font-bold">Follow us on</h4>

                <div className="flex items-center gap-5">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="w-5 h-5 hover:scale-110 transition" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="w-5 h-5 hover:scale-110 transition" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" className="w-5 h-5 hover:scale-110 transition" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="w-full lg:w-[260px] flex flex-col gap-6">
            <button
              onClick={() => navigate("/contact")}
              className="h-[48px] rounded-[10px] border border-[#82F352]
                         text-white font-bold"
            >
              Explore your contact us
            </button>

            <div className="bg-[#82F352] rounded-[20px] p-6 flex flex-col gap-4">
              <h3 className="text-black text-[22px] font-bold">Contact</h3>

              <div className="flex gap-3 text-black">
                <FaUser /> info@Profitx.com
              </div>

              <div className="flex gap-3 text-black">
                <FaMapMarkerAlt /> Near C21 mall, Indore (M.P)
              </div>

              <div className="flex gap-3 text-black">
                <FaPhoneAlt /> +91-9344-234563
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
