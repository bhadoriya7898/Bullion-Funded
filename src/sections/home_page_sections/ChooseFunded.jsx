import Profitxfunded from "../../assets/choosefunded/Profitxfunded.png";
import ftmo from "../../assets/choosefunded/ftmo.png";
import alphaCapital from "../../assets/choosefunded/alphacapital.png";
import fivePercent from "../../assets/choosefunded/five.png";
import tick from "../../assets/choosefunded/tickright.png";

const companies = [
  { name: "Profitxfunded", logo: Profitxfunded },
  { name: "FTMO", logo: ftmo },
  { name: "Alpha Capital", logo: alphaCapital },
  { name: "Five Percent", logo: fivePercent },
];

const rows = [
  {
    label: "Profit Share From Challenge Phase Profits",
    values: ["15%", "15%", "15%", "15%"],
  },
  {
    label: "Profitxfunded Account Profit Share",
    values: ["95%", "95%", "95%", "95%"],
  },
  {
    label: "Profit Target",
    values: ["8% / 5%", "8% / 5%", "8% / 5%", "8% / 5%"],
  },
  {
    label: "News Trading with Profit Share",
    values: [true, true, true, true],
  },
  {
    label: "Free Trial with TradingView",
    values: [
      "15% [upto $7500]",
      "15% [upto $7500]",
      "15% [upto $7500]",
      "15% [upto $7500]",
    ],
  },
  {
    label: "Free Competitions",
    values: [
      "15% [upto $7500]",
      "15% [upto $7500]",
      "15% [upto $7500]",
      "15% [upto $7500]",
    ],
  },
  {
    label: "Swap Free Account",
    values: [
      "15% [upto $7500]",
      "15% [upto $7500]",
      "15% [upto $7500]",
      "15% [upto $7500]",
    ],
  },
];

const ChooseFunded = () => {
  return (
    <section className="w-full bg-black py-20 md:py-32 flex justify-center">
      <div className="w-full max-w-[1224px] px-4 flex flex-col gap-12">

        {/* ================= HEADER ================= */}
        <div className="max-w-[400px]">
          <h2 className="text-[26px] md:text-[32px] font-bold text-white">
            Why Choose <span className="text-[#82F352]">Funded</span>
          </h2>
          <p className="text-white mt-3 text-[16px] md:text-[18px]">
            Choose your account and funds to begin your trading journey with funded.
          </p>
        </div>

        {/* ================= MOBILE VIEW (CARDS) ================= */}
        <div className="md:hidden flex flex-col gap-6">
          {companies.map((company, colIndex) => (
            <div
              key={colIndex}
              className="bg-[#2B4218] border border-[#6CB83E] rounded-xl p-5"
            >
              {/* Logo */}
              <div className="flex justify-center mb-5">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-[26px] invert brightness-0"
                />
              </div>

              {/* Data */}
              <div className="flex flex-col gap-4 text-white text-sm">
                {rows.map((row, i) => (
                  <div key={i} className="flex justify-between gap-4">
                    <span className="opacity-80">{row.label}</span>
                    <span className="font-medium text-right">
                      {row.values[colIndex] === true ? (
                        <img src={tick} alt="tick" className="w-4 h-4" />
                      ) : (
                        row.values[colIndex]
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW (TABLE) ================= */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-[900px] border border-black">

            {/* Header Row */}
            <div
              className="
                grid grid-cols-[2.2fr_repeat(4,1fr)]
                bg-[#82F352] h-[64px]
                items-center text-black font-medium
                text-[18px] border-b border-black
              "
            >
              <div className="px-4">Variable</div>

              {companies.map((company, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center border-l border-black h-full"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-[30px] invert brightness-0"
                  />
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {rows.map((row, idx) => (
              <div
                key={idx}
                className={`
                  grid grid-cols-[2.2fr_repeat(4,1fr)]
                  h-[52px] items-center text-white
                  text-[16px] border-b border-black
                  ${idx % 2 === 0 ? "bg-[#6CB83E]" : "bg-[#2B4218]"}
                `}
              >
                <div className="px-4">{row.label}</div>

                {row.values.map((val, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center border-l border-black h-full"
                  >
                    {val === true ? (
                      <img src={tick} alt="tick" className="w-[18px] h-[18px]" />
                    ) : (
                      val
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChooseFunded;
