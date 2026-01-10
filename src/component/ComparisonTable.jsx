import checkIcon from "../assets/images/correctsign.png";

const ComparisonTable = ({
  accountSizes = [],
  fees = [],
  rows = [],
}) => {
  return (
    <>
      {/* ================= MOBILE VIEW (HORIZONTAL CARDS) ================= */}
      <div className="md:hidden w-full overflow-x-auto px-3">
        <div className="flex gap-5 snap-x snap-mandatory pb-5 no-scrollbar">

          {accountSizes.map((size, colIndex) => (
            <div
              key={colIndex}
              className="
                min-w-[88%] snap-center flex-shrink-0
                rounded-2xl
                border border-[#82F352]
                bg-gradient-to-b from-[#3B6B29] to-[#1E3314]
                shadow-[0_0_25px_rgba(130,243,82,0.25)]
                p-4
              "
            >
              {/* CARD HEADER */}
              <div className="mb-4 pb-3 border-b border-[#82F352]/40 text-center">
                <h3 className="text-white text-[18px] font-bold">
                  {size}
                </h3>
                <div className="mt-2 inline-flex flex-col items-center bg-[#82F352] rounded-lg px-4 py-2">
                  <span className="text-black font-bold text-[14px]">
                    Get Plan
                  </span>
                  <span className="text-black text-[13px]">
                    Fee: {fees[colIndex]}
                  </span>
                </div>
              </div>

              {/* ROWS (NO BORDERS) */}
              <div className="flex flex-col gap-2">
                {rows.map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex justify-between gap-4"
                  >
                    <span className="text-white/80 text-[13px] leading-snug">
                      {row.label}
                    </span>

                    <span className="text-white text-[13px] font-medium text-right">
                      {row.isCheck ? (
                        <img
                          src={checkIcon}
                          alt="check"
                          className="w-[16px] h-[16px]"
                        />
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
      </div>

      {/* ================= DESKTOP VIEW (TABLE) ================= */}
      <div className="hidden md:block w-full overflow-x-auto px-3 sm:px-0">
        <div className="mx-auto max-w-[1240px]">

          <div className="min-w-[1100px] rounded-[24px] overflow-hidden border-[2px] border-black bg-[#090909]">

            {/* TOP RIGHT TEXT */}
            <div className="w-full flex justify-end pr-4 py-2">
              <span className="text-white text-[18px] font-medium">
                Compare your challenges
              </span>
            </div>

            {/* TABLE GRID */}
            <div className="grid grid-cols-[220px_repeat(6,1fr)] md:grid-cols-[273px_repeat(6,157px)]">

              {/* HEADER FIRST COLUMN */}
              <div
                className="
                  h-[105px] bg-[#3B6B29]
                  flex items-center justify-center
                  text-white text-[24px] font-medium
                  sticky left-0 z-30
                  border-r-[2px] border-b-[2px] border-black
                "
              >
                Account Size
              </div>

              {accountSizes.map((size, i) => (
                <div
                  key={i}
                  className="
                    h-[105px] bg-[#3B6B29]
                    flex flex-col items-center justify-center gap-2
                    border-r-[2px] border-b-[2px] border-black
                    last:border-r-0
                  "
                >
                  <span className="text-white text-[24px] font-medium">
                    {size}
                  </span>

                  <div className="w-[127px] h-[43px] bg-[#82F352]
                                  rounded-[10px]
                                  flex flex-col items-center justify-center">
                    <span className="text-[16px] font-bold text-black">
                      Get Plan
                    </span>
                    <span className="text-[14px] text-black">
                      Fee: {fees[i]}
                    </span>
                  </div>
                </div>
              ))}

              {/* BODY */}
              {rows.map((row, rIdx) => (
                <div key={rIdx} className="contents">

                  <div
                    className="
                      h-[61px] bg-[#3B6B29]
                      flex items-center px-4
                      text-white text-[16px] font-medium
                      sticky left-0 z-20
                      border-r-[2px] border-b-[2px] border-black
                    "
                  >
                    {row.label}
                  </div>

                  {row.values.map((val, i) => (
                    <div
                      key={i}
                      className={`
                        h-[61px] flex items-center justify-center
                        text-white text-[16px]
                        ${i % 2 === 0 ? "bg-[#0E1B0B]" : "bg-[#3B6B29]"}
                        border-r-[2px] border-b-[2px] border-black
                        last:border-r-0
                      `}
                    >
                      {row.isCheck ? (
                        <img src={checkIcon} className="w-[16px] h-[16px]" />
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
      </div>
    </>
  );
};

export default ComparisonTable;
