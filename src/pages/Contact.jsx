import mapImg from "../assets/images/map.png";
import dialIcon from "../assets/images/dial.png";
import mailIcon from "../assets/images/mail.png";
import locationIcon from "../assets/images/location.png";

import twitter from "../assets/images/twitter.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import yt from "../assets/images/yt.png";
import telegram from "../assets/images/telegram.png";

import userIcon from "../assets/images/cn.png";
import emailIcon from "../assets/images/email.png";
import phoneIcon from "../assets/images/phone.png";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-[#090909] flex flex-col items-center font-['Helvetica_Neue'] px-4 pb-16 md:pb-20">
      <div
        className="
          w-full max-w-[653px]
          flex flex-col items-center
          gap-5 md:gap-8
          mt-2 md:mt-16
        "
      >
        <div className="px-[18px] py-[12px] rounded-[30px] bg-[#1520104D]">
          <span className="text-[#82F352] text-[16px] md:text-[19px] leading-[100%]">
            Contact us
          </span>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 text-center">
          <h1 className="text-[24px] md:text-[34px] font-bold leading-[110%] text-[#f7f9f7]">
            Contact Us for <br />
            <span className="text-[#82F352]">
              Expert Profitx Guidance & Support
            </span>
          </h1>

          <p className="text-[14px] md:text-[18px] leading-[150%] text-gray-200">
            Need assistance? The Profitx Funded team is here to help! Reach
            out to us for expert guidance or support, and our responsive
            team will typically reply within just 60 seconds. Experience
            seamless communication and exceptional service every step of
            the way.
          </p>
        </div>

        <button
          className="
            px-7 py-2 md:px-[18px] md:py-[8px]
            rounded-[60px] bg-[#82F352]
            text-black text-[16px] md:text-[18px] font-bold
          "
        >
          Contact us
        </button>
      </div>

      <div
        className="
          w-full max-w-[1200px]
          mt-16 md:mt-20
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-12
          items-stretch
        "
      >
        <div className="flex flex-col gap-6 md:gap-6">
          <img
            src={mapImg}
            alt="map"
            className="
              w-full max-w-[550px]
              h-[200px] md:h-[280px]
              rounded-[10px] object-cover
            "
          />

          <div className="w-full max-w-[550px] bg-white rounded-[10px] p-5 md:p-6">
            <h2 className="text-[22px] md:text-[30px] font-bold text-black mb-5 md:mb-6">
              Contact Information
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-10">
              <Info icon={dialIcon} text="+44-7365403025" />
              <Info icon={mailIcon} text="info@Profitxfunded.com" />
              <Info
                icon={locationIcon}
                text={
                  <>
                    Atlantic House, 351 <br />
                    Oxport St, London, UK
                  </>
                }
                center
              />
            </div>
          </div>

          <div className="w-full max-w-[550px] bg-white rounded-[10px] p-5 md:p-6">
            <h2 className="text-[22px] md:text-[30px] font-bold text-black mb-5 md:mb-6">
              Our Social Media Platforms
            </h2>

            <div className="flex flex-wrap gap-5 md:gap-8">
              {[twitter, fb, insta, yt, telegram].map((i, idx) => (
                <img
                  key={idx}
                  src={i}
                  className="w-[38px] h-[38px] md:w-[42px] md:h-[42px]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-[491px] bg-white rounded-[10px] p-6 md:p-8 h-full flex flex-col">
          <h2 className="text-[24px] md:text-[33px] font-bold text-black text-center">
            Contact Us
          </h2>

          <p className="mt-2 text-[15px] md:text-[18px] text-black text-center">
            Say Hello send us your thoughts about our products or
            share your ideas with our Team!
          </p>

          <div className="mt-8 md:mt-10 flex flex-col gap-5 md:gap-[24px] flex-1">
            <div className="flex flex-col md:flex-row gap-4 md:gap-[80px]">
              <Input icon={userIcon} placeholder="First Name" />
              <Input icon={userIcon} placeholder="Last Name" />
            </div>

            <Input icon={emailIcon} placeholder="E-mail" />
            <Input icon={phoneIcon} placeholder="Mobile Number" />

            <textarea
              placeholder="Leave us a message . . ."
              className="
                w-full h-[120px] md:h-[142px]
                border border-black rounded-[8px]
                px-4 py-3 text-[14px]
                resize-none
              "
            />

            <p className="text-[14px] md:text-[16px] font-medium">
              You agree to your friendly{" "}
              <span className="underline cursor-pointer">
                Privacy Policy
              </span>
            </p>

            <button
              className="
                w-full h-[42px]
                rounded-[60px] bg-[#82F352]
                text-black text-[16px] md:text-[18px]
                font-bold
              "
            >
              Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Info = ({ icon, text, center }) => (
  <div
    className={`flex flex-col items-center gap-[16px] ${
      center ? "text-center" : ""
    }`}
  >
    <img src={icon} className="w-[48px] h-[48px]" />
    <span className="text-[12px] text-black leading-[15px]">
      {text}
    </span>
  </div>
);

const Input = ({ icon, placeholder }) => (
  <div className="w-full flex items-center gap-2 border-b border-black py-2">
    <img src={icon} className="w-[18px] h-[18px]" />
    <input
      type="text"
      placeholder={placeholder}
      className="w-full outline-none text-[14px]"
    />
  </div>
);

export default Contact;
