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
      <img
        src={bgImage}
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2
                   w-[900px] md:w-[1200px] lg:w-[1400px]
                   h-auto opacity-10 pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-[1306px] mx-auto px-4 sm:px-6 flex flex-col gap-8 md:gap-12">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-[16px] md:text-[18px] text-[#EFEFEF]">Our Stats</span>

          <h2 className="max-w-[600px] text-[24px] md:text-[32px] font-bold leading-tight text-[#82F352]">
            Accomplish your objectives by using Funded&apos;s trading platform.
          </h2>

          <p className="max-w-[620px] text-[15px] md:text-[18px] text-white leading-relaxed">
            Our goal at Funded is to help traders reach their greatest possibility
            to trade. We have seen traders succeed with Funded backed trading
            programs.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4">
          {/* LEFT STACK */}
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] bg-gradient-to-b from-[#82F352] to-[#26431D] p-5 md:p-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <img
                  src={layer1}
                  alt="Layer 1"
                  className="w-[80px] sm:w-[100px] object-contain"
                />

                <div className="text-white text-center sm:text-left">
                  <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-bold leading-tight">
                    Guaranteed Payouts
                  </h3>
                  <p className="mt-2 text-[15px] md:text-[16px] font-bold">
                    Get paid in 24 hours
                  </p>
                  <p className="mt-1 text-[13px] md:text-[14px] opacity-90">
                    Receive your payment within 24 hours otherwise we will pay extra $1000
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#61B43F] p-5 md:p-6">
              <img
                src={layer2}
                alt="Layer 2"
                className="w-[70px] md:w-[90px] object-contain"
              />

              <h3 className="mt-3 text-[20px] md:text-[28px] font-bold text-white leading-tight">
                Adaptable Trading Conditions
              </h3>

              <div className="mt-3 flex flex-wrap gap-x-1 gap-y-1 text-white text-[13px] md:text-[14px]">
                <span className="whitespace-nowrap">Low spreads |</span>
                <span className="whitespace-nowrap">Low Commission |</span>
                <span className="whitespace-nowrap">Balance Based Drawdown |</span>
                <span className="whitespace-nowrap">Reset & Top up |</span>
                <span className="whitespace-nowrap">No time limit |</span>
                <span className="whitespace-nowrap">Allowed News Trading</span>
              </div>
            </div>
          </div>

          {/* RIGHT MT5 CARD */}
          <div className="relative rounded-[28px] bg-[#3F6B28] p-6 md:p-8 overflow-hidden flex flex-col justify-between min-h-[420px]">
            <div className="relative z-10 max-w-full lg:max-w-[60%] xl:max-w-[300px]">
              <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-white leading-none">
                MT-5
                <span className="block text-[24px] md:text-[32px] lg:text-[38px] font-light">
                  PLATFORM
                </span>
              </h2>

              <div className="mt-20 text-white space-y-2">
                <span className="block text-[16px] font-medium text-[#D1FF05]">
                  Your Choice!
                </span>

                <p className="text-[20px] font-bold">
                  Best Trading Platform
                </p>

                <p className="text-[14px] opacity-90">
                  Trading on MT5 Platform
                </p>

                <p className="pt-8 text-[15px] leading-[18px] opacity-90">
                  Best Trading Platforms Trade on MT5 Platform Funded Firm Traders can choose to trade metatrader 5 platform. Our MQ Licenses and advanced in-house technology ensure enhanced security and efficiency
                </p>
              </div>
            </div>

            <img
              src={postAI}
              alt="MT5 Platform"
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-[55%]
                         w-[45%] max-w-[410px] object-contain pointer-events-none"
            />

            <div className="mt-8 lg:absolute lg:bottom-6 lg:right-6">
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#82F352] text-[16px] font-bold text-black hover:bg-[#72d846] transition-colors">
                Download MT5
                <img src={arrowRight} alt="Arrow" />
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[45%_27%_27%] gap-4">
          <div
            className="rounded-[20px] p-6 md:p-8 text-white flex flex-col justify-center"
            style={{
              background: "linear-gradient(270deg, #82F352 0%, #26431D 100%)",
            }}
          >
            <h3 className="text-[24px] md:text-[36px] lg:text-[40px] font-bold leading-tight text-center xl:text-left">
              Empowering Traders in <br className="hidden xl:block" /> 195+ Countries
            </h3>

            <div className="mt-8 grid grid-cols-3 gap-2 md:gap-4 text-center">
              <div>
                <p className="text-[18px] md:text-[24px] font-bold">$100+</p>
                <p className="text-[12px] md:text-[14px] opacity-90">Total Payouts</p>
              </div>
              <div>
                <p className="text-[18px] md:text-[24px] font-bold">99k+</p>
                <p className="text-[12px] md:text-[14px] opacity-90">Traders</p>
              </div>
              <div>
                <p className="text-[18px] md:text-[24px] font-bold">5 hrs</p>
                <p className="text-[12px] md:text-[14px] opacity-90">Avg. Reward Timing</p>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] bg-[#61B43F] p-5 md:p-6 text-white flex flex-col justify-center gap-4">
            <img src={communityIcon} className="w-[70px] md:w-[80px]" alt="Community" />
            <div>
              <h4 className="text-[20px] md:text-[22px] font-bold leading-tight">
                Bullion Funded Community and Support
              </h4>
              <p className="mt-2 text-[14px] md:text-[16px] opacity-90 leading-snug">
                Empowering traders worldwide to conquer challenges and secure funding
              </p>
            </div>
          </div>

          <div className="rounded-[20px] bg-[#3B6B29] p-5 md:p-6 text-white flex flex-col justify-center gap-4">
            <img src={supportIcon} className="w-[66px] md:w-[76px]" alt="Support" />
            <div>
              <h4 className="text-[20px] md:text-[26px] font-bold leading-tight">
                24/7 Pro Support
              </h4>
              <p className="mt-2 text-[14px] md:text-[16px] opacity-90 leading-snug">
                Our customer support team is available 24/7 to assist you, with an average response time of just 60 seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStats;
