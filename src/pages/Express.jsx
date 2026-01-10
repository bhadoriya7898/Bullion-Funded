import { useNavigate } from "react-router-dom";
import ComparisonTable from "../component/ComparisonTable";
import { useLocation } from "react-router-dom";

import graphVideo from "../assets/videos/x-challemge-graph.mp4";
import rulesBg from "../assets/images/x-challenge-bg.png";

import EvaluationRuleCard from "../component/EvaluationRuleCard";

import card1 from "../assets/EvaluationPageIMG/card1.png";
import card2 from "../assets/EvaluationPageIMG/card2.png";
import card3 from "../assets/EvaluationPageIMG/card3.png";
import card4 from "../assets/EvaluationPageIMG/card4.png";
import card5 from "../assets/EvaluationPageIMG/card5.png";
import card6 from "../assets/EvaluationPageIMG/card6.png";
import rewardBg from "../assets/images/guarranteedrewardbg.png";

const Express = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const rules = [
    {
      icon: card1,
      title: "Trade with up to $200K",
      description:
        "We win when you win. To increase your chances of profitability, we are offering you up to $200,000 funds in our Evaluation model.",
    },
    {
      icon: card2,
      title: "20% Profit Share from the Challenge Phase",
      description:
        "In the Evaluation model, you can get 20% profit during each assessment phase. So you can start earning a profit share as a reward even when you’re trading the  Challenge account.",
    },
    {
      icon: card3,
      title: "14 Day Extension",
      description:
        "If you are in profit but can not meet your phase-01 target, no worries. As long as you are profitable by following all rules, you will be given an additional 14 days to complete your challenge.",
    },
    {
      icon: card4,
      title: "Unlimited Free Retakes",
      description:
        "Don’t worry if you are in profit but cannot achieve your target within a trading cycle while following the rules. We will provide you with unlimited retakes without any additional charge. All you have to do is to be profitable without violating any rules.",
    },
    {
      icon: card5,
      title: "Up to 90% Profit Sharing",
      description:
        "After getting the Profitx Funded Account, you start with an 80% profit split to begin with. And when you become eligible for the scale-up plan, your profit share will increase to 90%.",
    },
    {
      icon: card6,
      title: "Weekend Holding",
      description:
        "You don't have to miss any big market movement. Hold your trade as long as you want, even during the weekends. Whatever your trading style is (Scalp, Intraday, or Swing trading), this is perfect option for you.",
    },
  ];

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
      <section
        className="max-w-[1240px] mx-auto px-4 pt-[80px] md:pt-[100px]
                          grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        {/* LEFT CONTENT */}
        <div>
          <h1
            className="mt-6 text-[28px] sm:text-[32px] lg:text-[37px]
                         font-bold leading-[110%]"
          >
            <span className="text-white">Express Model</span>
          </h1>

          <p
            className="mt-6 max-w-[426px] text-[18px] sm:text-[18px] lg:text-[18px]
                        font-medium leading-[120%] text-white/90"
          >
            Your goal in this model will be to prove your trading ability in 2
            phases with very realistic profit targets. Once you achieve the
            targets, you will start trading on Profitx Funded Account with an
            80% profit split. The profit split percentage can be increased all
            the way up to 90% based on your performance.
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
              Profitxaire Challenge Model
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

          <button
            className="mt-8 sm:mt-10 px-8 sm:px-10 py-3 sm:py-4
                             rounded-full bg-[#82F352]
                             text-black font-bold text-[16px] sm:text-[18px]"
          >
            Start Challenge Now
          </button>
        </div>

        {/* RIGHT VIDEO */}
        <div
          className="rounded-[24px] overflow-hidden bg-[#0D1320]
                        p-3 sm:p-4 max-h-[260px] sm:max-h-[320px] lg:max-h-[420px]"
        >
          <video
            src={graphVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-fit rounded-[20px]"
          />
        </div>
      </section>

      {/*   RULES SECTION*/}
      <section className="relative mt-[120px] sm:mt-[160px]">
        <img
          src={rulesBg}
          alt=""
          className="absolute inset-0 w-full opacity-40"
        />

        <div className="relative max-w-[1240px] mx-auto px-4">
          <h2 className="text-center text-[28px] sm:text-[36px] lg:text-[50px] font-bold">
            <span className="text-[#82F352]">Express Challenge </span>Rules
          </h2>
          <p className="text-center mt-2 text-[13px] sm:text-[16px] lg:text-[18px]">
            Find out the reasons why the Express Challenge is the best challenge
            out there!
          </p>

          <div className="mt-[70px] flex justify-center">
            <div
              className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-x-[40px]
      gap-y-[40px]
      place-items-center
    "
            >
              {rules.map((rule, i) => (
                <EvaluationRuleCard
                  key={i}
                  icon={rule.icon}
                  title={rule.title}
                  description={rule.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[120px] sm:mt-[160px] w-full">
        {/* HEADING */}
        <h2
          className="
      text-center
      text-[22px] sm:text-[32px] lg:text-[37px]
      font-bold
      bg-gradient-to-r from-[#1566DC] to-white
      bg-clip-text 
      mb-4
    "
        >
          Choose your Express Plan
        </h2>

        {/* TABLE WRAPPER */}
        <div className="w-full overflow-x-auto px-3 sm:px-0">
          <div className="mx-auto max-w-[1240px]">
            <ComparisonTable
              accountSizes={accountSizes}
              fees={fees}
              rows={tableRows}
            />
          </div>
        </div>

        {/* FOOT NOTES */}
        <div className="mt-6 w-full flex justify-center md:justify-end">
          <div
            className="
        w-full max-w-[1240px]
        flex flex-wrap
        justify-center md:justify-end
        gap-4 sm:gap-6
        px-4
      "
          >
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
      </section>

      <section
        className="relative mt-[40px] sm:mt-[80px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${rewardBg})`,
          transform: "rotate(180deg)",
        }}
      >
        {/* rotate content back */}
        <div className="transform rotate-180 max-w-[1240px] mx-auto px-4 py-20 sm:py-28">
          {/* HEADING */}
          <h2 className="text-right text-[24px] sm:text-[36px] lg:text-[42px] font-bold mb-14">
            Why Choose Profitx Funded <br /> as Your Prop Firm?
          </h2>

          {/* CARDS GRID — RESPONSIVE WIDTH */}
          <div
            className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-x-[40px]
        gap-y-[40px]
        place-items-center
      "
          >
            {[
              { icon: card1, title: "Trade with up to $200K" },
              { icon: card2, title: "Profitx Funded Pro Support" },
              { icon: card3, title: "Reset Top-up" },
              { icon: card4, title: "Fastest Reward" },
              { icon: card5, title: "Trader-Friendly Leverage" },
              { icon: card6, title: "Best Trading Condition" },
            ].map((item, i) => (
              <div
                key={i}
                className="
            w-full
            max-w-[340px] sm:max-w-[380px] xl:max-w-[400px]
            h-[260px] sm:h-[269px]
            bg-[#1F3B16]/90
            rounded-[10px]
            flex flex-col items-center justify-center
            gap-[20px] sm:gap-[24px]
            text-center
            shadow-[0_0_60px_rgba(130,243,82,0.08)]
          "
              >
                {/* ICON */}
                <img
                  src={item.icon}
                  alt=""
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"
                />

                {/* TITLE */}
                <h4 className="text-[18px] sm:text-[20px] font-semibold">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Express;
