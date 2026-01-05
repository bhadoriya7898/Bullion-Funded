import heroBg from "../../assets/images/herobg.png";
import arrowRight from "../../assets/arrows/rightarrow.png";
import arrowUp from "../../assets/arrows/uil_arrow-up.png";

const Hero = () => {
  return (
    <section
      className="
        w-full flex justify-center
        bg-no-repeat bg-cover
        bg-center
        md:bg-[10px_300px]
      "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* ================= MAIN HERO CONTAINER ================= */}
      <div
        className="
          w-full max-w-[1307px]
          flex flex-col justify-between
          pt-16 md:pt-20
          px-4 md:px-0
          min-h-auto
          md:min-h-[480px]
          lg:min-h-[564px]
        "
      >
        {/* ================= CENTER CONTENT ================= */}
        <div className="flex justify-center">
          <div
            className="
              w-full max-w-[799px]
              flex flex-col items-center
              gap-[60px] md:gap-[80px]
            "
          >
            {/* ================= HEADING BLOCK ================= */}
            <div className="flex flex-col items-center gap-[40px] md:gap-[50px]">
              {/* TAG LINE */}
              <div
                className="
                  px-[18px] py-[14px]
                  rounded-[30px]
                  bg-[#1520104D]
                  border border-[rgba(130,243,82,0.35)]
                "
              >
                <span className="text-[18px] md:text-[19px] text-[#82F352] font-font-helvetica">
                  Where Trust Meets Trading
                </span>
              </div>

              {/* TITLE + DESCRIPTION */}
              <div className="flex flex-col items-center text-center gap-[24px] md:gap-[30px]">
                <h1
                  className="
                    text-[26px] sm:text-[30px] md:text-[37px]
                    leading-[36px] sm:leading-[42px] md:leading-[50px]
                    font-extrabold font-font-helvetica text-white
                  "
                >
                  <span className="text-[#82F352] font-bold">
                    Bullion Funded:
                  </span>{" "}
                  <span className="font-medium">
                    Trusted Accounts, Highest Payouts, Your Trading Success
                  </span>
                </h1>

                <p
                  className="
                    w-full max-w-[604px]
                    text-[15px] sm:text-[16px] md:text-[18px]
                    leading-[22px] md:leading-[23px]
                    text-white font-font-helvetica
                  "
                >
                  Know the highest possibilities of your trading. Trade with
                  assurance when working with a financially secure trading prop
                  firm like us.
                </p>
              </div>
            </div>

            {/* ================= CTA BUTTONS ================= */}
            <div className="flex flex-col sm:flex-row gap-[14px] w-full sm:w-auto">
              <button
                className="
                  w-full sm:w-auto
                  flex items-center justify-center gap-[10px]
                  h-[46px] md:h-[48px]
                  px-[20px]
                  rounded-[10px]
                  bg-[#82F352]
                  text-[16px] md:text-[18px]
                  font-bold text-[#090909]
                "
              >
                Open Account
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="w-[18px] md:w-[20px] h-[18px] md:h-[20px]"
                />
              </button>

              <button
                className="
                  w-full sm:w-auto
                  flex items-center justify-center
                  h-[46px] md:h-[48px]
                  px-[20px]
                  rounded-[10px]
                  bg-[#82F3520D]
                  text-[16px] md:text-[18px]
                  font-semibold text-[#82F352]
                "
              >
                Join our Telegram
              </button>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM INFO ROW ================= */}
        <div className="mt-10 md:mt-16 text-white">
          {/* INFO POINTS */}
          <div
            className="
              flex flex-col gap-3
              md:flex-row md:justify-between md:items-center
              text-[15px] md:text-[16px]
            "
          >
            <div className="flex flex-col gap-2 md:flex-row md:gap-[50px]">
              <span>✔ Upto 95% of profit split</span>
              <span>✔ Minimum spreads and low commission</span>
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:gap-[50px]">
              <span>✔ Weekly payouts</span>
              <span>✔ Upto $200 trading accounts</span>
            </div>
          </div>

          {/* SCROLL DOWN */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-[12px]">
              <span className="text-[16px] md:text-[18px] font-bold">
                Scroll Down
              </span>
              <div
                className="
                  w-[34px] h-[34px] md:w-[39px] md:h-[39px]
                  rounded-full
                  bg-[#82F3521A]
                  flex items-center justify-center
                "
              >
                <img
                  src={arrowUp}
                  alt="scroll"
                  className="w-[16px] md:w-[20px] h-[16px] md:h-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
