import growthLogo from "../../assets/images/growthlogo.png";

// Static content config
const CARDS = [
  {
    title: "Extra 20% Profit Share in challenge phase",
    desc:
      "Bullionfunded is the only proprietary trading firm that provides a 20% profit share from the Challenge Phase profits, allowing you to start earning right away.",
    highlighted: false,
  },
  {
    title: "New Trading",
    desc:
      "Bullionfunded permits news trading, enabling you to capitalize on significant market shifts triggered by high-impact news announcements.",
    highlighted: true,
  },
  {
    title: "24/7 Support",
    desc:
      "Our customer support team is available 24/7 to assist you, with an average response time of just 60 seconds.",
    highlighted: false,
  },
  {
    title: "No Time Limit",
    desc:
      "There is no time limit to complete the challenges, allowing you to trade at your own pace.",
    highlighted: false,
  },
];

const Card = ({ title, desc, highlighted }) => (
  <div
    className={`
      w-full sm:max-w-[302px]
      rounded-[20px]
      ${highlighted ? "bg-[#82F352]" : "bg-white"}
    `}
  >
    <div
      className="
        p-[16px] sm:p-[15px]
        flex flex-col gap-[12px]
      "
    >
      <img
        src={growthLogo}
        alt="growth"
        className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px]"
      />

      <div className="flex flex-col gap-[8px]">
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
            text-[13px]
            font-normal font-font-helvetica
            text-black
            leading-[18px]
          "
        >
          {desc}
        </p>
      </div>
    </div>
  </div>
);

const KeyHighlights = () => {
  return (
    <section className="w-full flex justify-center bg-black py-16 md:py-24">
      {/* Layout wrapper */}
      <div
        className="
          w-full max-w-[1306px]
          flex flex-col lg:flex-row
          gap-12 lg:gap-0
          justify-between
          px-4 md:px-0
        "
      >
        {/* Visual placeholder */}
        <div
          className="
            w-full lg:w-[643px]
            h-[240px] sm:h-[320px] lg:h-[608px]
            rounded-[30px] lg:rounded-[40px]
            bg-[#D9D9D9]
          "
        />

        {/* Content */}
        <div
          className="
            w-full lg:w-[625px]
            flex flex-col
            gap-[28px] lg:gap-[40px]
          "
        >
          {/* Header */}
          <div className="flex flex-col gap-[20px] lg:gap-[25px]">
            <div
              className="
                w-fit
                px-[18px] py-[14px]
                rounded-[30px]
                bg-[#1520104D]
                border border-[rgba(130,243,82,0.35)]
              "
            >
              <span className="text-[18px] md:text-[19px] text-[#82F352] font-font-helvetica">
                Key Highlights
              </span>
            </div>

            <h2
              className="
                text-[26px] sm:text-[30px] md:text-[32px]
                leading-[34px] md:leading-[36px]
                font-bold font-font-helvetica
                text-white
              "
            >
              Maximize Your{" "}
              <span className="text-[#82F352]">Trading Success</span>{" "}
              with BullionFunded.
            </h2>
          </div>

          {/* Cards grid */}
          <div className="flex flex-col gap-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {CARDS.slice(0, 2).map((c) => (
                <Card key={c.title} {...c} />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {CARDS.slice(2).map((c) => (
                <Card key={c.title} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
