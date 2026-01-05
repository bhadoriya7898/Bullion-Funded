import bullionFunded from "../../assets/choosefunded/bullionfunded.png";
import ftmo from "../../assets/choosefunded/ftmo.png";
import alphaCapital from "../../assets/choosefunded/alphacapital.png";
import fivePercent from "../../assets/choosefunded/five.png";
import tick from "../../assets/choosefunded/tickright.png";

const rows = [
  {
    label: "Profit Share From Challenge Phase Profits",
    values: ["15%", "15%", "15%", "15%"],
  },
  {
    label: "BullionFunded Account Profit Share",
    values: ["95%", "95%", "95%", "95%"],
  },
  {
    label: "Profit Target",
    values: ["8% / 5%", "8% / 5%", "8% / 5%","8% / 5%"],
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
      <div className="w-full max-w-[1224px] flex flex-col gap-[40px] px-4">

        {/* ================= HEADER ================= */}
        <div className="max-w-[371px] flex flex-col gap-[18px]">
          <h2 className="text-[26px] md:text-[32px] font-bold text-white">
            Why Choose <span className="text-[#82F352]">Funded</span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-white">
            Choose your account and funds to begin your trading journey with
            funded.
          </p>
        </div>

        {/* ================= TABLE (RESPONSIVE) ================= */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[900px] border border-black">

            {/* HEADER ROW */}
            <div className="
              grid grid-cols-[220px_repeat(4,1fr)]
              md:grid-cols-[2.2fr_1fr_1fr_1fr_1fr]
              bg-[#82F352] h-[64px]
              items-center text-black font-medium
              text-[14px] md:text-[18px]
              border-b border-black
            ">
              <div className="px-4 sticky left-0 bg-[#82F352] z-20">
                Variable
              </div>

              {[bullionFunded, ftmo, alphaCapital, fivePercent].map((logo, i) => (
                <div
                  key={i}
                  className="flex justify-center border-l border-black h-full items-center"
                >
                  <img
                    src={logo}
                    alt=""
                    className="h-[22px] md:h-[30px] invert brightness-0"
                  />
                </div>
              ))}
            </div>

            {/* DATA ROWS */}
            {rows.map((row, idx) => (
              <div
                key={idx}
                className={`
                  grid grid-cols-[220px_repeat(4,1fr)]
                  md:grid-cols-[2.2fr_1fr_1fr_1fr_1fr]
                  h-[52px]
                  items-center
                  text-white
                  text-[13px] md:text-[16px]
                  border-b border-black
                  ${idx % 2 === 0 ? "bg-[#6CB83E]" : "bg-[#2B4218]"}
                `}
              >
                <div className="
                  px-4 sticky left-0 z-10
                  bg-inherit
                ">
                  {row.label}
                </div>

                {row.values.map((val, i) => (
                  <div
                    key={i}
                    className="flex justify-center border-l border-black h-full items-center"
                  >
                    {val === true ? (
                      <img
                        src={tick}
                        alt="tick"
                        className="w-[18px] h-[18px]"
                      />
                    ) : (
                      <span>{val}</span>
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
