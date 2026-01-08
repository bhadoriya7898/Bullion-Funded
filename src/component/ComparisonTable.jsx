import checkIcon from "../assets/images/correctsign.png";

const ComparisonTable = ({
  accountSizes = [],
  fees = [],
  rows = [],
}) => {
  return (
    /* MOBILE SCROLL WRAPPER (NO CENTERING HERE) */
    <div className="w-full overflow-x-auto px-3 sm:px-0">
      
      {/* DESKTOP WIDTH LOCK */}
      <div className="mx-auto max-w-[1240px]">

        {/* TABLE CONTAINER */}
        <div className="min-w-[1100px] rounded-[24px] overflow-hidden border-[2px] border-black bg-[#090909]">

          {/* TOP RIGHT TEXT */}
          <div className="w-full flex justify-end pr-4 py-2">
            <span className="text-white text-[14px] sm:text-[18px] font-medium">
              Compare your challenges
            </span>
          </div>

          {/* TABLE GRID */}
          <div className="grid grid-cols-[220px_repeat(6,1fr)] md:grid-cols-[273px_repeat(6,157px)]">

            {/* HEADER: FIRST COLUMN (STICKY) */}
            <div
              className="
                h-[105px]
                bg-[#3B6B29]
                flex items-center justify-center
                text-white text-[20px] md:text-[24px] font-medium
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
                  h-[105px]
                  bg-[#3B6B29]
                  flex flex-col items-center justify-center gap-2
                  border-r-[2px] border-b-[2px] border-black
                  last:border-r-0
                "
              >
                <span className="text-white text-[20px] md:text-[24px] font-medium">
                  {size}
                </span>

                <div
                  className="w-[127px] h-[43px] bg-[#82F352]
                             rounded-[10px]
                             flex flex-col items-center justify-center"
                >
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

                {/* FIRST COLUMN LABEL (STICKY) */}
                <div
                  className="
                    h-[61px]
                    bg-[#3B6B29]
                    flex items-center px-4
                    text-white text-[14px] md:text-[16px] font-medium
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
                      h-[61px]
                      flex items-center justify-center
                      text-white text-[14px] md:text-[16px]
                      ${i % 2 === 0 ? "bg-[#0E1B0B]" : "bg-[#3B6B29]"}
                      border-r-[2px] border-b-[2px] border-black
                      last:border-r-0
                    `}
                  >
                    {row.isCheck ? (
                      <img
                        src={checkIcon}
                        alt="check"
                        className="w-[16px] h-[16px]"
                      />
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
  );
};

export default ComparisonTable;
