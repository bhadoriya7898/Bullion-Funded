import { useState, useRef, useLayoutEffect } from "react";
import ComparisonTable from "../component/ComparisonTable";

import graphVideo from "../assets/videos/x-challemge-graph.mp4";
import rulesBg from "../assets/images/x-challenge-bg.png";

import rule1 from "../assets/images/modelrule1.png";
import rule2 from "../assets/images/modelrule2.png";
import rule3 from "../assets/images/modelrule3.png";
import rule4 from "../assets/images/modelrule4.png";
import { useNavigate, useLocation } from "react-router-dom";
import rewardBg from "../assets/images/guarranteedrewardbg.png";
import rewardImg from "../assets/images/untitled.png";

const XChallenge = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [activePlan, setActivePlan] = useState("x-challenge");
  const [activeStep, setActiveStep] = useState(1);

  const tabsWrapperRef = useRef(null);
  const tabRefs = useRef({});
  const [sliderStyle, setSliderStyle] = useState({
    width: 120,
    left: 8,
  });

  useLayoutEffect(() => {
    const wrapper = tabsWrapperRef.current;
    const activeTab = tabRefs.current[activePlan];
    if (!wrapper || !activeTab) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    const PADDING_X = 12;

    setSliderStyle({
      width: tabRect.width + PADDING_X * 2,
      left: tabRect.left - wrapperRect.left - PADDING_X,
    });
  }, [activePlan]);

  /* ---------------------------------------------
     Rule cards shown under “Model Rules”
  --------------------------------------------- */
  const rules = [
    {
      icon: rule1,
      title: "No Time Limit",
      desc:
        "Trade with no rush on our Bullionaire Challenges and execute your trading strategies at your own pace.",
    },
    {
      icon: rule2,
      title: "Fastest Bullion Funded Challenge",
      desc:
        "Get your Bullion Funded Accounts with only just 2 days of trading with Bullionaire 1-Step and 5 days with Bullionaire 2-Step.",
    },
    {
      icon: rule3,
      title: "Balance-based Drawdown",
      desc:
        "Experience absolute freedom and hold your trades tension-free with our drawdowns calculated on your balance.",
    },
    {
      icon: rule4,
      title: "Up to 95% Profit Share",
      desc:
        "Keep up to 95% of the profits you make with your Bullion Funded Bullionaire 1-Step and 2-Step accounts.",
    },
  ];

  /* ---------------------------------------------
     Table data (passed to ComparisonTable only)
  --------------------------------------------- */
  const accountSizes = [
    "$6,000",
    "$15,000",
    "$25,000",
    "$50,000",
    "$100,000",
    "$200,000",
  ];

  const fees = ["$59", "$119", "$199", "$299", "$549", "$999"];

  const tableRows = [
    {
      label: "20% Profit share from challenge Phase",
      values: ["$144", "$360", "$600", "$1200", "$2400", "$4800"],
    },
    {
      label: "Profit Target",
      values: Array(6).fill("P1: 7%, P2: 5%"),
    },
    {
      label: "Maximum Daily Loss",
      values: [
        "5% [$300]",
        "5% [$750]",
        "5% [$1,250]",
        "5% [$2,500]",
        "5% [$5,000]",
        "5% [$10,000]",
      ],
    },
    {
      label: "Maximum Overall loss",
      values: [
        "10% [$600]",
        "10% [$1,500]",
        "10% [$2,500]",
        "10% [$5,000]",
        "10% [$10,000]",
        "10% [$20,000]",
      ],
    },
    {
      label: "Balance Based Drawdown",
      values: Array(6).fill(""),
      isCheck: true,
    },
    {
      label: "Minimum Trading Days",
      values: Array(6).fill("5 Days"),
    },
    {
      label: "Profit Split Upto",
      values: Array(6).fill("95%"),
    },
    {
      label: "News Trading",
      values: Array(6).fill(""),
      isCheck: true,
    },
    {
      label: "First Reward",
      values: Array(6).fill("Monthly"),
    },
  ];

  return (
    <main className="bg-[#090909] text-white overflow-x-hidden font-['Helvetica_Neue']">

      <section className="max-w-[1240px] mx-auto px-4 pt-[80px] md:pt-[100px]
                          grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex items-center px-[18px] py-[15px]
                          rounded-[30px] bg-[#1520104D]
                          border border-[#82F35233]">
            <span className="text-[16px] sm:text-[19px] text-[#82F352]">
              Bullionaire Challenge Model
            </span>
          </div>

          <h1 className="mt-6 text-[28px] sm:text-[32px] lg:text-[37px]
                         font-bold leading-[110%]">
            <span className="text-white">Most </span>
            <span className="text-[#82F352]">Trader-Friendly</span><br />
            <span className="text-[#82F352]">Challenge </span>
            <span className="text-[#E6E6E6]">in the Industry</span>
          </h1>

          <p className="mt-6 max-w-[426px] text-[18px] sm:text-[18px] lg:text-[18px]
                        font-medium leading-[120%] text-white/90">
            Trade with no time limits and earn up to 95% profit split with the
            best challenge in the industry, the Bullion Funded Bullionaire
            Challenge.
          </p>

<div
  className="
    mt-8
    flex flex-wrap items-center
    gap-3 sm:gap-4
    text-[18px] sm:text-[18px] lg:text-[18px]
    font-medium
  "
>
  <button
    onClick={() => navigate("/x-challenge")}
    className={`transition whitespace-normal text-left ${
      isActive("/x-challenge")
        ? "text-[#82F352] font-semibold"
        : "text-white/80 hover:text-[#82F352]"
    }`}
  >
    Bullionaire Challenge Model
  </button>

  <div className="w-px h-[16px] bg-white hidden sm:block" />

  <button
    onClick={() => navigate("/evaluation")}
    className={`transition whitespace-normal text-left ${
      isActive("/evaluation")
        ? "text-[#82F352] font-semibold"
        : "text-white/80 hover:text-[#82F352]"
    }`}
  >
    Evaluation Model
  </button>

  <div className="w-px h-[16px] bg-white hidden sm:block" />

  <button
    onClick={() => navigate("/express")}
    className={`transition whitespace-normal text-left ${
      isActive("/express")
        ? "text-[#82F352] font-semibold"
        : "text-white/80 hover:text-[#82F352]"
    }`}
  >
    Express Model
  </button>
</div>


          <button className="mt-8 sm:mt-10 px-8 sm:px-10 py-3 sm:py-4
                             rounded-full bg-[#82F352]
                             text-black font-bold text-[14px] sm:text-[16px]">
            Sign Up Now
          </button>
        </div>

        {/* RIGHT VIDEO */}
        <div className="rounded-[24px] overflow-hidden bg-[#0D1320]
                        p-3 sm:p-4 max-h-[260px] sm:max-h-[320px] lg:max-h-[420px]">
          <video
            src={graphVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-fit rounded-[20px]"
          />
        </div>
      </section>                                                                                                                                                                                                                                          

      {/* =====================================================
         RULES SECTION
         Why this challenge stands out
      ===================================================== */}
      <section className="relative mt-[120px] sm:mt-[160px]">
        <img src={rulesBg} alt="" className="absolute inset-0 w-full opacity-40" />

        <div className="relative max-w-[1240px] mx-auto px-4">
          <h2 className="text-center text-[28px] sm:text-[36px] lg:text-[50px] font-bold">
            Bullionaire Challenge Model Rules
          </h2>
          <p className="text-center mt-2 text-[13px] sm:text-[16px] lg:text-[18px]">
            Find out the reasons why the Bullionaire Challenge is the best challenge out there!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14
                          max-w-[1100px] mx-auto place-items-center">
            {rules.map((rule, i) => (
              <div
                key={i}
                className="bg-white rounded-[11px]
                           max-w-[474px] min-h-[167px]
                           px-[30px] py-[28px]
                           flex items-center
                           shadow-[0_8px_30px_rgba(130,243,82,0.25)]"
              >
                <div className="flex gap-[30px] w-full">
                  <img src={rule.icon} alt="" className="w-[34px] h-[41px]" />
                  <div className="flex flex-col gap-[30px] max-w-[330px]">
                    <h4 className="text-[19.75px] font-bold text-black">
                      {rule.title}
                    </h4>
                    <p className="text-[17.55px] font-medium text-black">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
         COMPARISON CONTROLS + TABLE
      ===================================================== */}
      <section className="w-full flex justify-center mt-[120px] sm:mt-[160px]">
        <div className="w-full overflow-x-auto px-2 sm:px-0">
          <div className="min-w-[1239px] flex flex-col items-center">

            {/* TOP CONTROLS */}
            <div className="flex flex-col items-center gap-8 mb-12">
              <h2 className="text-[28px] sm:text-[32px] lg:text-[37px]
                             font-bold bg-gradient-to-r from-[#1566DC] to-white
                             bg-clip-text  text-center">
                Difference Between Bullionaire & Bullionaire Lite Challenge
              </h2>

              {/* PLAN TOGGLE */}
             <div
  ref={tabsWrapperRef}
  className="relative w-full max-w-[650px] h-[45px]
             rounded-[44px] bg-[#82F352]
             flex items-center justify-center px-2"
>
  {/* Active sliding background */}
  <div
    className="absolute top-1/2 -translate-y-1/2
               h-[33px] bg-[#3B6B29]
               rounded-[25px] transition-all duration-300"
    style={sliderStyle}
  />

  {/* Bullionaire */}
  <div
    ref={(el) => (tabRefs.current["bullionaire"] = el)}
    onClick={() => setActivePlan("bullionaire")}
    className={`relative z-10 px-5 cursor-pointer
                text-[18px] sm:text-[18px] lg:text-[18px] whitespace-nowrap
                ${
                  activePlan === "bullionaire"
                    ? "text-white"
                    : "text-white/70"
                }`}
  >
    Bullionaire Challenge
  </div>

  {/* Lite */}
  <div
    ref={(el) => (tabRefs.current["lite"] = el)}
    onClick={() => setActivePlan("lite")}
    className={`relative z-10 px-5 cursor-pointer
                text-[18px] sm:text-[18px] lg:text-[18px] whitespace-nowrap
                ${
                  activePlan === "lite"
                    ? "text-white"
                    : "text-white/70"
                }`}
  >
    Bullionaire Lite Challenge
  </div>
</div>


              {/* STEP SELECTOR */}
              <div className="flex items-center gap-4 h-[28px]">
                <span className="font-bold text-[18px] sm:text-[18px] lg:text-[18px]">Select Preference</span>
                {[1, 2].map((step) => (
                  <button
                    key={step}
                    onClick={() => setActiveStep(step)}
                    className={`w-[75px] h-[28px] rounded-[30px]
                                flex items-center justify-center transition text-[18px] sm:text-[18px] lg:text-[18px]
                                ${activeStep === step
                                  ? "bg-[#82F352] text-black"
                                  : "text-white hover:bg-white/10"}`}
                  >
                    {step} Step
                  </button>
                ))}
              </div>
            </div>

            {/* TABLE */}
            <ComparisonTable
              accountSizes={accountSizes}
              fees={fees}
              rows={tableRows}
            />

            {/* FOOT NOTES */}
            <div className="w-full flex justify-center mt-2">
              <div className="w-full max-w-[1240px] flex flex-wrap
                              justify-center md:justify-end
                              gap-4 sm:gap-6 px-4">
                {[
                  "Lifetime Payout 95%",
                  "150% Reward",
                  "Double Up",
                  "No Minimum Trading Days",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-[7px] h-[7px] bg-white rounded-full" />
                    <span className="font-bold text-[14px] sm:text-[18px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
         GUARANTEED REWARDS SECTION
      ===================================================== */}
      <section
        className="relative mt-[40px] sm:mt-[80px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${rewardBg})`,
          transform: "rotate(180deg)",
        }}
      >
        <div
          className="transform rotate-180 max-w-[1240px] mx-auto px-4
                     py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2
                     gap-10 lg:gap-12 items-center"
        >
          <div>
            <h2 className="text-[32px] sm:text-[48px] lg:text-[55px]
                           font-bold text-[#82F352]">
              Guaranteed Rewards!
            </h2>
            <h3 className="mt-5 sm:mt-6 text-[20px] sm:text-[26px] lg:text-[28px]">
              Get Paid in 24 Hours or We Pay $1000 Extra
            </h3>
            <p className="mt-4 sm:mt-6 max-w-[520px]
                          text-[14px] sm:text-[17px] text-white/90">
              At Bullion Funded, earn with confidence. If we miss the 24-hour payout,
              we add $1000 extra — guaranteed.
            </p>
          </div>

          <div className="flex justify-end">
            <img src={rewardImg} alt="" className="w-full max-w-[520px]" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default XChallenge;
