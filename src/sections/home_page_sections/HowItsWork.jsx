import bgImage from "../../assets/images/howitsworkbg.png";
import arrowRight from "../../assets/arrows/rightarrow.png";
import stepsLine from "../../assets/images/step.png";
import cyrone from "../../assets/images/cyrone.png";

const STEPS = [
  {
    step: "Step 1",
    title: "Complete a challenge",
    desc: "Show your trading skills by completing a challenge. You are able to select from our 400+ pair possibilities.",
  },
  {
    step: "Step 2",
    title: "Get Verified",
    desc: "Clear the BullionFunded phases, prove your trading skill, and unlock certification and payout eligibility.",
  },
  {
    step: "Step 3",
    title: "Become a funded trader",
    desc: "Good luck! You can keep up to 95% of the money you make in your simulated funded trading account.",
  },
  {
    step: "Step 4",
    title: "Get Paid",
    desc: "You have complete control over when and how you want to be paid out. You are free to stop at any point in time.",
  },
];

const HowItsWork = () => {
  return (
    <section className="relative w-full flex justify-center bg-black py-16 md:py-24 overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src={bgImage}
        alt=""
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[900px] md:w-[1100px] lg:w-[1305px]
          h-auto
          opacity-10
          pointer-events-none
        "
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative w-full max-w-[1306px] flex flex-col gap-[60px] md:gap-[80px] px-4 md:px-0">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

          <div className="max-w-[597px] flex flex-col gap-[14px] md:gap-[19px]">
            <span className="text-[18px] md:text-[19px] font-font-helvetica text-white">
              How its Work
            </span>

            <h2
              className="
                text-[26px] sm:text-[30px] md:text-[32px]
                leading-[34px] md:leading-[32px]
                font-bold font-font-helvetica text-white
              "
            >
              You’re four steps away from harnessing your{" "}
              <span className="text-[#82F352]">trading skills</span>
            </h2>
          </div>

          {/* DESKTOP CTA */}
          <button className="hidden lg:flex items-center gap-[10px]
                             px-[20px] py-[15px]
                             rounded-[40px]
                             bg-[#82F352]
                             text-[18px] font-bold font-font-helvetica text-black">
            Start a Challenge
            <img src={arrowRight} alt="" className="w-[26px]" />
          </button>
        </div>

        {/* ================= CONNECTOR LINE ================= */}
        <div className="hidden lg:flex justify-center">
          <img src={stepsLine} alt="" className="w-[1130px] h-[24px]" />
        </div>

        {/* ================= STEPS ================= */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            gap-[40px] md:gap-[60px] lg:gap-[78px]
            text-center
          "
        >
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-[14px] md:gap-[20px]">

              <span className="text-[18px] md:text-[20px] font-bold font-font-helvetica text-white">
                {step.step}
              </span>

              <h4 className="text-[18px] md:text-[20px] font-bold font-font-helvetica text-white">
                {step.title}
              </h4>

              <p className="text-[15px] md:text-[16px] font-font-helvetica text-white leading-[22px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= MOBILE CTA ================= */}
        <div className="flex justify-center lg:hidden">
          <button className="flex items-center gap-[10px]
                             px-[24px] py-[15px]
                             rounded-[40px]
                             bg-[#82F352]
                             text-[18px] font-bold font-font-helvetica text-black">
            Start a Challenge
            <img src={arrowRight} alt="" className="w-[26px]" />
          </button>
        </div>
      </div>

      {/* ================= DECORATIVE IMAGE ================= */}
      <img
        src={cyrone}
        alt=""
        className="
          absolute
          w-[120px] md:w-[151px]
          h-[120px] md:h-[151px]
          -rotate-270
          left-[-40px] md:left-[-53px]
          bottom-0
          pointer-events-none
        "
      />
    </section>
  );
};

export default HowItsWork;
