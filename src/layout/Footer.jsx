import footerBg from "../assets/Footer/footerbg.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* ======================================================
          SECTION 1: CTA FOOTER
      ====================================================== */}
      <footer className="w-full bg-[#25421BB2] flex justify-center py-10 px-4">
        <div
          className="
            w-full max-w-[965px]
            bg-[#10190DB2]
            rounded-[32px]
            px-6 py-10
            md:px-12 md:py-12
            flex flex-col items-center gap-6
            text-center
          "
        >
          <h2 className="max-w-[520px] text-[26px] md:text-[32px] font-bold text-white leading-tight">
            Join the Global Community for the Traders, by the Traders
          </h2>

          <p className="max-w-[880px] text-[14px] md:text-[16px] leading-[22px] text-white/90">
            Funded Trading is not only a prop trading company. We are a group of
            traders that are enthusiastic about our group's development. We are
            committed to helping our traders at every turn. Visit us and introduce
            yourself to a community of like-minded people.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <button className="h-[48px] px-8 rounded-full bg-[#82F352] text-[16px] md:text-[18px] font-bold text-black">
              Login
            </button>

            <button className="h-[48px] px-8 rounded-full border border-[#82F352] text-[15px] md:text-[16px] font-bold text-white">
              Join our Discord community
            </button>
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

            {/* Logo */}
            <h2
              className="text-white text-[32px] md:text-[36px]"
              style={{ fontFamily: "Faster One" }}
            >
              Bullion
            </h2>

            {/* Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">

              {/* Company */}
              <div>
                <h4 className="text-white text-[18px] font-bold mb-3">
                  Company
                </h4>
                <ul className="space-y-2 text-[15px] text-white/90">
                  <li>How it works</li>
                  <li>About us</li>
                  <li>FAQ</li>
                  <li>Contact us</li>
                </ul>
              </div>

              {/* Models */}
              <div>
                <h4 className="text-white text-[18px] font-bold mb-3">
                  Models
                </h4>
                <ul className="space-y-2 text-[15px] text-white/90">
                  <li>Express Model</li>
                  <li>Evaluation Model</li>
                  <li>X Challenge</li>
                </ul>
              </div>

              {/* Community + Platform */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-white text-[18px] font-bold mb-2">
                    Community
                  </h4>
                  <p className="text-[15px] text-white/90">
                    Join local community
                  </p>
                </div>

                <div>
                  <h4 className="text-white text-[18px] font-bold mb-2">
                    Platform
                  </h4>
                  <p className="text-[15px] text-white/90">
                    Join local community
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white text-[18px] font-bold mb-3">
                Follow us on
              </h4>
              <div className="flex gap-4">
                <FaFacebookF className="text-white text-[20px] cursor-pointer" />
                <FaInstagram className="text-white text-[20px] cursor-pointer" />
                <FaYoutube className="text-white text-[20px] cursor-pointer" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="w-full lg:w-[260px] flex flex-col gap-6">

            {/* Outline Button */}
            <div className="h-[48px] rounded-[10px] border border-[#82F352]
                            flex items-center justify-center">
              <span className="text-white text-[16px] font-bold">
                Explore your contact us
              </span>
            </div>

            {/* Contact Card */}
            <div className="w-full bg-[#82F352] rounded-[20px] p-6 flex flex-col gap-4 shadow-lg">
              <h3 className="text-black text-[22px] font-bold">
                Contact
              </h3>

              <div className="flex items-center gap-3 text-black text-[15px]">
                <FaUser />
                <span>info.bullion.com</span>
              </div>

              <div className="flex items-center gap-3 text-black text-[15px]">
                <FaMapMarkerAlt />
                <span>Near C21 mall, Indore (M.P)</span>
              </div>

              <div className="flex items-center gap-3 text-black text-[15px]">
                <FaPhoneAlt />
                <span>+91-9344-234563</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
