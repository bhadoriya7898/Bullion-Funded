import growthLogo from "../../assets/images/growthlogo.png";
import GrowthImg from "../../assets/images/Growth.jpg";

const CARDS = [
  {
    title: "Extra 20% Profit Share in challenge phase",
    desc: "Profitxfunded is the only proprietary trading firm that provides a 20% profit share from the Challenge Phase profits, allowing you to start earning right away.",
    highlighted: false,
  },
  {
    title: "New Trading",
    desc: "Profitxfunded permits news trading, enabling you to capitalize on significant market shifts triggered by high-impact news announcements.",
    highlighted: true,
  },
  {
    title: "24/7 Support",
    desc: "Our customer support team is available 24/7 to assist you, with an average response time of just 60 seconds.",
    highlighted: false,
  },
  {
    title: "No Time Limit",
    desc: "There is no time limit to complete the challenges, allowing you to trade at your own pace.",
    highlighted: false,
  },
];

const Card = ({ title, desc, highlighted }) => (
  <div
    className={`
      w-full h-full
      rounded-[20px]
      p-5 sm:p-6
      flex flex-col gap-3
      transition-all duration-300 hover:shadow-lg hover:-translate-y-1
      ${highlighted ? "bg-[#82F352]" : "bg-white"}
    `}
  >
    <img
      src={growthLogo}
      alt="growth"
      className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] object-contain"
    />

    <div className="flex flex-col gap-2">
      <h4
        className="
          text-[16px] sm:text-[18px]
          font-bold font-font-helvetica
          text-black
          leading-[22px]
          line-clamp-2
        "
      >
        {title}
      </h4>

      <p
        className="
          text-[13px] sm:text-[14px]
          font-normal font-font-helvetica
          text-black
          leading-[18px] sm:leading-[20px]
          opacity-90
        "
      >
        {desc}
      </p>
    </div>
  </div>
);

const KeyHighlights = () => {
  return (
    <section
      id="key-highlights"
      className="w-full bg-black py-16 md:py-24 px-4 sm:px-6 md:px-8 flex justify-center"
    >
      <div
        className="
          w-full max-w-[1306px]
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-16
          items-stretch
        "
      >
        {/* IMAGE SECTION (FIXED) */}
        <div
          className="
            w-full
            min-h-[260px] sm:min-h-[380px]
            rounded-[30px] lg:rounded-[40px]
            shadow-xl
            overflow-hidden
          "
        >
          <img
            src={GrowthImg}
            alt="Growth"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="w-full h-full flex flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-5 items-start">
            <div
              className="
                w-fit
                px-[18px] py-[12px]
                rounded-[30px]
                bg-[#1520104D]
                border border-[rgba(130,243,82,0.35)]
                backdrop-blur-sm
              "
            >
              <span className="text-[16px] md:text-[19px] text-[#82F352] font-font-helvetica font-medium">
                Key Highlights
              </span>
            </div>

            <h2
              className="
                text-[28px] sm:text-[32px] md:text-[38px]
                leading-[1.2]
                font-bold font-font-helvetica
                text-white
              "
            >
              Maximize Your{" "}
              <span className="text-[#82F352]">Trading Success</span>{" "}
              with Profitxfunded.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {CARDS.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
