import { useState, useRef, useLayoutEffect } from "react";
import { FEATURES, PLAN_DATA } from "./challengePlans";
import checkIcon from "../../assets/images/correctsign.png";
import { Link } from "react-router-dom";
const plans = ["X-Challenge", "Evaluation", "Express", "X-lite Challenge"];

const addons = [
  "Add-ons for Stellar",
  "Lifetime Payout 95%",
  "150% Reward",
  "Double Up",
  "No Minimum Trading Days",
];

const ChallengeComparison = () => {
  const [activePlan, setActivePlan] = useState(0);
  const [activeStep, setActiveStep] = useState("step1");

  /* ---------------- PLAN SELECTOR PILL ---------------- */
  const tabsWrapperRef = useRef(null);
  const tabRefs = useRef([]);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0 });

  useLayoutEffect(() => {
    const wrapper = tabsWrapperRef.current;
    const tab = tabRefs.current[activePlan];
    if (!wrapper || !tab) return;

    const tabRect = tab.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    const PADDING_X = 10;

    setPillStyle({
      width: tabRect.width + PADDING_X * 2,
      left: tabRect.left - wrapperRect.left - PADDING_X,
    });
  }, [activePlan]);

  /* ---------------- DATA ---------------- */
  const planKey =
    activePlan === 0
      ? "x-challenge"
      : activePlan === 1
      ? "evaluation"
      : activePlan === 2
      ? "express"
      : "x-lite";

  const planConfig = PLAN_DATA[planKey];
  const data = planConfig.hasSteps
    ? planConfig.steps[activeStep]
    : planConfig.data;

  return (
    <section className="w-full py-16 md:py-24 flex justify-center bg-[#090909]">
      <div className="w-full max-w-[1239px] flex flex-col items-center px-4">

        {/* ================= PLAN SELECTOR ================= */}
        <div className="w-full max-w-[700px] overflow-x-auto">
          <div className="relative min-w-max h-[45px] bg-[#82F352] rounded-[44px] flex items-center justify-center px-4">
            <div ref={tabsWrapperRef} className="relative flex">

              <div
                className="absolute top-1/2 -translate-y-1/2
                           h-[33px] bg-[#3B6B29] rounded-[25px]
                           transition-all duration-300"
                style={pillStyle}
              />

              {plans.map((p, i) => (
                <div
                  key={i}
                  ref={(el) => (tabRefs.current[i] = el)}
                  onClick={() => {
                    setActivePlan(i);
                    setActiveStep("step1");
                  }}
                  className="relative z-10 px-5 h-[33px]
                             flex items-center justify-center
                             cursor-pointer
                             text-white text-[16px] md:text-[20px]
                             whitespace-nowrap"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SELECT PREFERENCE ================= */}
        {activePlan === 0 && (
          <div className="mt-6 flex items-center gap-4 flex-wrap justify-center">
            <span className="text-white text-[16px] md:text-[18px] font-bold">
              Select Preference
            </span>

            {["Step 1", "Step 2"].map((s, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i === 0 ? "step1" : "step2")}
                className={`px-4 h-[28px] rounded-[30px]
                            flex items-center justify-center cursor-pointer
                            ${
                              (i === 0 && activeStep === "step1") ||
                              (i === 1 && activeStep === "step2")
                                ? "bg-[#3B6B29]"
                                : "bg-transparent"
                            }`}
              >
                <span className="text-white text-[16px] font-medium">
                  {s}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ================= HEADING ================= */}
        
<Link to="/compare-challenges">
  <h3 className="mt-10 text-white text-[18px] md:text-[20px] font-bold underline text-center cursor-pointer">
    Compare your challenges
  </h3>
</Link>

        {/* ================= TABLE (RESPONSIVE) ================= */}
        <div className="mt-6 w-full overflow-x-auto">
          <div className="min-w-[1100px] bg-[#090909] border-[2px] border-black flex flex-col gap-[1px]">

            {/* HEADER */}
            <div className="grid grid-cols-[220px_repeat(6,1fr)] md:grid-cols-[273px_repeat(6,1fr)] gap-[1px]">
              <div className="h-[58px] bg-[#3B6B29]
                              flex items-center justify-center
                              text-white text-[18px] md:text-[24px] font-medium
                              sticky left-0 z-20">
                Account Size
              </div>

              {data.map((d, i) => (
                <div
                  key={i}
                  className="h-[58px] bg-[#3B6B29]
                             flex items-center justify-center
                             text-white text-[18px] md:text-[24px]"
                >
                  {d.accountSize}
                </div>
              ))}
            </div>

            {/* BODY */}
            {FEATURES.map((f) => (
              <div
                key={f.key}
                className="grid grid-cols-[220px_repeat(6,1fr)] md:grid-cols-[273px_repeat(6,1fr)] gap-[1px]"
              >
                <div className="h-[45px] bg-[#3B6B29]
                                flex items-center pl-3
                                text-white text-[14px] md:text-[16px]
                                sticky left-0 z-10">
                  {f.label}
                </div>

                {data.map((d, i) => {
                  const isGreen = i % 2 !== 0;
                  return (
                    <div
                      key={i}
                      className={`h-[45px]
                        flex items-center justify-center
                        text-white text-[14px] md:text-[16px]
                        ${isGreen ? "bg-[#3B6B29]" : "bg-[#090909]"}`}
                    >
                      {typeof d.values[f.key] === "boolean" ? (
                        d.values[f.key] && (
                          <img
                            src={checkIcon}
                            alt="tick"
                            className="w-[16px] h-[16px]"
                          />
                        )
                      ) : (
                        d.values[f.key]
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            {/* BUTTON ROW */}
            <div className="grid grid-cols-[220px_repeat(6,1fr)] md:grid-cols-[273px_repeat(6,1fr)] gap-[1px]">
              <div className="h-[45px] bg-[#090909] sticky left-0 z-10" />

              {data.map((_, i) => {
                const isGreen = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`h-[45px]
                      flex items-center justify-center
                      ${isGreen ? "bg-[#3B6B29]" : "bg-[#090909]"}`}
                  >
                    <button className="w-[120px] md:w-[144px] h-[27px
                      rounded-[60px] bg-[#82F352]
                      text-black text-[13px] md:text-[14px] font-bold
                      transition hover:bg-[#74DA48]">
                      Start Challenge
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= ADDONS ================= */}
        <div className="mt-10 w-full flex justify-center md:justify-end">
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
            {addons.map((a, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-[7px] h-[7px] bg-white rounded-full" />
                <span className="text-white text-[14px] md:text-[18px] font-bold">
                  {a}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChallengeComparison;
