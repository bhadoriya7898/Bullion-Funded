import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";

const stepsData = [
  {
    icon: step1,
    title: "X-Challenge",
    desc: "The most popular package amongst FundedNext traders",
    points: [
      "Upto 95% Profit Split",
      "15% Profit Share in Challenge Phase",
      "Up to 150% Reward",
      "No Time Limit",
      "News Trading Allowed",
    ],
    highlight: false,
  },
  {
    icon: step2,
    title: "Evaluation",
    desc: "The most affordable package for new and upcoming traders",
    points: [
      "Upto 95% Profit Split",
      "Super Affordable",
      "Up to 10% Maximum Loss Limit",
      "Lowest Profit Target",
      "News Trading Allowed",
    ],
    highlight: true,
  },
  {
    icon: step3,
    title: "Express",
    desc: "The only package that offers free retakes",
    points: [
      "Upto 95% Profit Split",
      "15% Profit Share in Challenge Phase",
      "Up to 10% Maximum Loss Limit",
      "Up to 150% Reward",
      "News Trading Allowed",
    ],
    highlight: false,
  },
  {
    icon: step4,
    title: "X-Lite Challenge",
    desc: "The package offers profit shares without needing 5% growth",
    points: [
      "Upto 95% Profit Split",
      "15% Profit Share in Challenge Phase",
      "Up to 10% Maximum Loss Limit",
      "Up to 150% Reward",
      "News Trading Allowed",
    ],
    highlight: true,
  },
];

const FourSteps = () => {
  return (
    <section className="w-full bg-[#090909] py-24 flex flex-col items-center gap-16">
      <div className="max-w-[610px] flex flex-col gap-[19px] text-center px-4">
        <h2 className="text-white text-[32px] font-bold leading-tight">
          You’re <span className="text-[#82F352]">four steps</span> away from
          harnessing your trading skills
        </h2>

        <p className="text-white text-[18px] font-normal max-w-[371px] mx-auto">
          Choose your account and funds to begin your trading journey with funded.
        </p>
      </div>

      <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className={`
              rounded-[20px] p-4 flex flex-col
              transition-all duration-300 ease-out
              ${
                item.highlight
                  ? "bg-[#82F352] shadow-[0_0_40px_rgba(130,243,82,0.25)] hover:scale-[1.015]"
                  : "bg-white hover:scale-[1.01]"
              }
            `}
          >
            <div className="flex-1 p-5 flex flex-col gap-4 rounded-[16px]">
              <img src={item.icon} alt={item.title} className="w-[49px] h-[49px]" />

              <h3 className="text-black text-[20px] font-medium">
                {item.title}
              </h3>

              <p className="text-black text-[15px]">
                {item.desc}
              </p>

<div className="w-full h-[1px] bg-gradient-to-r from-black/10 via-black/40 to-black/10" />
              <ul className="flex flex-col gap-[10px]">
                {item.points.map((point, i) => (
                  <li key={i} className="text-black text-[14px]">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`
                mt-auto h-[36px] rounded-[10px] text-[14px] font-medium
                transition-all duration-300
                ${
                  item.highlight
                    ? "bg-white text-black hover:bg-[#6fd63c] hover:text-white"
                    : "bg-[#82F352] text-black hover:bg-[#6fd63c]"
                }
              `}
            >
              Start Challenge
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourSteps;
