import bgImage from "../../assets/images/statsbg.png";
import layer1 from "../../assets/images/Layer_1.png";
import layer2 from "../../assets/images/Layer_2.png";
import postAI from "../../assets/images/post-ai 1.png";
import arrowRight from "../../assets/arrows/rightarrow.png";
import communityIcon from "../../assets/images/community.png";
import supportIcon from "../../assets/images/support.png";

const OurStats = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-16 md:py-24">

      {/* BACKGROUND */}
      <img
        src={bgImage}
        alt=""
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[900px] md:w-[1200px] lg:w-[1400px]
          h-auto opacity-10 pointer-events-none
        "
      />

      <div className="relative z-10 w-full max-w-[1306px] mx-auto px-4 flex flex-col gap-12">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-[18px] text-[#EFEFEF]">Our Stats</span>

          <h2 className="max-w-[600px] text-[26px] md:text-[32px] font-bold leading-tight text-[#82F352]">
            Accomplish your objectives by using Funded&apos;s trading platform.
          </h2>

          <p className="max-w-[620px] text-[16px] md:text-[18px] text-white">
            Our goal at Funded is to help traders reach their greatest possibility
            to trade. We have seen traders succeed with Funded backed trading programs.
          </p>
        </div>

        {/* ================= ROW 1 ================= */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* LEFT STACK */}
          <div className="flex flex-col gap-4 w-full lg:w-[580px]">

            {/* CARD 1 */}
            <div className="rounded-[20px] bg-gradient-to-b from-[#82F352] to-[#26431D] p-5">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <img src={layer1} alt="" className="w-[90px] sm:w-[110px]" />

                <div className="text-white text-center sm:text-left">
                  <h3 className="text-[26px] md:text-[34px] font-bold">
                    Guaranteed Payouts
                  </h3>
                  <p className="mt-1 text-[16px] font-bold">
                    Get paid in 24 hours
                  </p>
                  <p className="mt-1 text-[14px]">
                    Receive payout within 24 hours or get extra $1000
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-[20px] bg-[#61B43F] p-5">
              <img src={layer2} alt="" className="w-[80px] md:w-[90px]" />

              <h3 className="mt-3 text-[22px] md:text-[30px] font-bold text-white">
                Adaptable Trading Conditions
              </h3>

              <div className="mt-3 flex flex-wrap gap-x-2 gap-y-2 text-white text-[14px]">
                <span>Low spreads |</span>
                <span>Low Commission |</span>
                <span>Balance Based Drawdown |</span>
                <span>Reset & Top up |</span>
                <span>No time limit |</span>
                <span>News Trading</span>
              </div>
            </div>
          </div>

          {/* MT5 CARD */}
          <div className="relative w-full lg:w-[740px] rounded-[28px] bg-[#3F6B28] p-5 md:p-8 overflow-hidden">

            <div className="relative z-10 max-w-full lg:max-w-[300px]">
              <h2 className="text-[36px] md:text-[48px] font-bold text-white leading-none">
                MT-5
                <span className="block text-[26px] md:text-[38px] font-light">
                  PLATFORM
                </span>
              </h2>

              <div className="mt-6 text-white">
                <span className="text-[14px] font-medium text-[#D1FF05]">
                  Your Choice!
                </span>

                <p className="mt-2 text-[18px] font-bold">
                  Best Trading Platform
                </p>

                <p className="mt-1 text-[12px]">
                  Trading on MT5 Platform
                </p>

                <p className="mt-4 text-[13px] leading-[18px]">
                  Trade on MetaTrader 5 with secure MQ licenses and advanced
                  in-house technology ensuring speed and reliability.
                </p>
              </div>
            </div>

            {/* IMAGE (DESKTOP ONLY) */}
            <img
              src={postAI}
              alt=""
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-[55%] w-[410px]"
            />

            {/* BUTTON */}
            <button className="mt-6 lg:absolute lg:bottom-6 lg:right-6
                               flex items-center gap-2 px-6 py-3
                               rounded-full bg-[#82F352]
                               text-[16px] md:text-[18px] font-bold text-black">
              Download MT5
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* BIG STATS CARD */}
          <div
            className="w-full lg:w-[700px] rounded-[20px] p-6 text-white"
            style={{
              background:
                "linear-gradient(270deg, #82F352 0%, #26431D 100%)",
            }}
          >
            <h3 className="text-[28px] md:text-[40px] font-bold leading-tight">
              Empowering Traders in <br /> 195+ Countries
            </h3>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[18px] font-bold">$100+</p>
                <p className="text-[14px]">Total Payouts</p>
              </div>
              <div>
                <p className="text-[18px] font-bold">99k+</p>
                <p className="text-[14px]">Traders</p>
              </div>
              <div>
                <p className="text-[18px] font-bold">5 hrs</p>
                <p className="text-[14px]">Avg Reward</p>
              </div>
            </div>
          </div>

          {/* SMALL CARD 1 */}
          <div className="w-full lg:w-[287px] rounded-[20px] bg-[#61B43F] p-5 text-white flex flex-col gap-4">
            <img src={communityIcon} className="w-[80px]" />
            <h4 className="text-[20px] md:text-[22px] font-bold">
              Community & Support
            </h4>
            <p className="text-[16px]">
              Empowering traders worldwide to secure funding
            </p>
          </div>

          {/* SMALL CARD 2 */}
          <div className="w-full lg:w-[287px] rounded-[20px] bg-[#3B6B29] p-5 text-white flex flex-col gap-4">
            <img src={supportIcon} className="w-[76px]" />
            <h4 className="text-[22px] md:text-[27px] font-bold">
              24/7 Pro Support
            </h4>
            <p className="text-[16px]">
              Instant help with average response time of 60 seconds
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStats;
