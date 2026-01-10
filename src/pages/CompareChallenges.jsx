import checkIcon from "../assets/images/correctsign.png";
import wrongIcon from "../assets/images/wrongsign.png";
import tableLogo from "../assets/images/ProfitxTableLogo.png";

const plans = [
  "Profitxaire",
  "Profitxaire Lite",
  "Evaluation",
  "Express",
];

const FEATURES = [
  { key: "challengePhase", label: "Challenge Phase" },
  { key: "profitShare", label: "Profit share from challenge phase" },
  { key: "profitTarget", label: "Profit Target" },
  { key: "dailyLoss", label: "Maximum Daily Loss" },
  { key: "overallLoss", label: "Maximum Overall Loss" },
  { key: "drawdown", label: "Drawdown Type" },
  { key: "timeLimit", label: "Time Limit" },
  { key: "minDays", label: "Minimum Trading Days" },
  { key: "commission", label: "Commission" },
  { key: "profitSplit", label: "Profit Split Upto" },
  { key: "leverage", label: "Leverage" },
  { key: "news", label: "News Trading" },
  { key: "weekend", label: "Weekend Holding" },
  { key: "ea", label: "Expert Advisors" },
  { key: "copier", label: "Trade Copier" },
  { key: "reset", label: "Reset Discount" },
  { key: "consistency", label: "Consistency Rule" },
  { key: "firstReward", label: "First Reward" },
  { key: "nextReward", label: "Subsequent Reward" },
];

const DATA = [
  {
    accountSize: "All Sizes",
    values: {
      challengePhase: "Step 1",
      profitShare: "20%",
      profitTarget: "P1: 7%, P2: 5%",
      dailyLoss: "5%",
      overallLoss: "10%",
      drawdown: "Balance Based",
      timeLimit: "No Time Limit",
      minDays: "5",
      commission: "$3 / lot",
      profitSplit: "95%",
      leverage: "1:100",
      news: true,
      weekend: true,
      ea: true,
      copier: true,
      reset: "10%",
      consistency: false,
      firstReward: "Monthly",
      nextReward: "Bi-Weekly",
    },
  },
  {
    accountSize: "All Sizes",
    values: {
      challengePhase: "2",
      profitShare: "20%",
      profitTarget: "10%",
      dailyLoss: "3%",
      overallLoss: "8%",
      drawdown: "Balance Based",
      timeLimit: "No Time Limit",
      minDays: "5",
      commission: "$5 / lot",
      profitSplit: "95%",
      leverage: "1:100",
      news: true,
      weekend: true,
      ea: true,
      copier: true,
      reset: "5%",
      consistency: true,
      firstReward: "5 Business Days",
      nextReward: "5 Business Days",
    },
  },
  {
    accountSize: "All Sizes",
    values: {
      challengePhase: "2",
      profitShare: "20%",
      profitTarget: "P1: 7%, P2: 5%",
      dailyLoss: "5%",
      overallLoss: "10%",
      drawdown: "Balance Based",
      timeLimit: "P1: 4 weeks, P2: 8 weeks",
      minDays: "5",
      commission: "$3 / lot",
      profitSplit: "95%",
      leverage: "1:100",
      news: true,
      weekend: true,
      ea: true,
      copier: true,
      reset: "10%",
      consistency: false,
      firstReward: "21 Days",
      nextReward: "Bi-Weekly",
    },
  },
  {
    accountSize: "All Sizes",
    values: {
      challengePhase: "-",
      profitShare: "20%",
      profitTarget: "25%",
      dailyLoss: "5%",
      overallLoss: "10%",
      drawdown: "Balance Based",
      timeLimit: "No Time Limit",
      minDays: "10",
      commission: "$3 / lot",
      profitSplit: "95%",
      leverage: "1:100",
      news: true,
      weekend: true,
      ea: true,
      copier: true,
      reset: "20%",
      consistency: true,
      firstReward: "Monthly",
      nextReward: "Monthly",
    },
  },
];

const CompareChallenges = () => {
  return (
    <section className="w-full py-16 md:py-24 flex justify-center bg-[#090909]">
      <div className="w-full max-w-[1239px] px-4">

        <h1 className="text-center text-white text-[28px] md:text-[36px] font-bold mb-10">
          Compare All Challenges
        </h1>

{/* ================= MOBILE VIEW – HORIZONTAL CLEAN CARDS ================= */}
<div className="md:hidden w-full overflow-x-auto">
  <div className="flex gap-5 snap-x snap-mandatory pb-5 no-scrollbar">

    {DATA.map((plan, index) => (
      <div
        key={index} 
        className="
          min-w-[88%] snap-center flex-shrink-0
          rounded-2xl
          border border-[#82F352]
          bg-gradient-to-b from-[#3B6B29] to-[#1E3314]
          shadow-[0_0_30px_rgba(130,243,82,0.25)]
          p-4
        "
      >
        {/* CARD HEADER */}
        <div className="mb-4 pb-3 border-b border-[#82F352]/40 text-center">
          <h3 className="text-white text-[18px] font-bold">
            {plans[index]}
          </h3>
          <p className="text-white/70 text-[13px] mt-1">
            {plan.accountSize}
          </p>
        </div>

        {/* ROWS (NO BORDERS) */}
        <div className="flex flex-col gap-2">
          {FEATURES.map((feature) => {
            const value = plan.values[feature.key];
            return (
              <div
                key={feature.key}
                className="flex justify-between items-start gap-4"
              >
                {/* LABEL */}
                <span className="text-white/80 text-[13px] leading-snug">
                  {feature.label}
                </span>

                {/* VALUE */}
                <span className="text-white text-[13px] font-medium text-right">
                  {typeof value === "boolean" ? (
                    <img
                      src={value ? checkIcon : wrongIcon}
                      alt="status"
                      className="w-[16px] h-[16px]"
                    />
                  ) : (
                    value
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    ))}

  </div>
</div>


        {/* ================= DESKTOP VIEW (TABLE – UNCHANGED) ================= */}
        <div className="hidden md:block w-full overflow-x-auto">
          <div className="min-w-[1100px] bg-[#090909] border-[2px] border-black flex flex-col gap-[1px]">

            {/* HEADER */}
            <div className="grid grid-cols-[273px_repeat(4,1fr)] gap-[1px]">
              <div className="h-[58px] bg-[#82F352] flex items-center justify-center sticky left-0 z-20">
                <img src={tableLogo} className="h-[48px]" />
              </div>

              {plans.map((p, i) => (
                <div
                  key={i}
                  className="h-[58px] bg-[#82F352]
                             flex items-center justify-center
                             text-black text-[20px]"
                >
                  {p}
                </div>
              ))}
            </div>

            {/* BODY */}
            {FEATURES.map((f) => (
              <div
                key={f.key}
                className="grid grid-cols-[273px_repeat(4,1fr)] gap-[1px]"
              >
                <div className="h-[45px] bg-[#3B6B29]
                                flex items-center pl-3
                                text-white text-[16px]
                                sticky left-0 z-10">
                  {f.label}
                </div>

                {DATA.map((d, i) => {
                  const value = d.values[f.key];
                  return (
                    <div
                      key={i}
                      className={`h-[45px] flex items-center justify-center
                        text-white text-[16px]
                        ${i % 2 ? "bg-[#3B6B29]" : "bg-[#090909]"}`}
                    >
                      {typeof value === "boolean" ? (
                        <img
                          src={value ? checkIcon : wrongIcon}
                          className="w-[16px] h-[16px]"
                        />
                      ) : (
                        value
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default CompareChallenges;
