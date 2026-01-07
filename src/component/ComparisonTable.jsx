import checkIcon from "../assets/images/correctsign.png";

/*
  ComparisonTable
  ----------------
  Fixed-width comparison table as per Figma.
  On smaller screens, horizontal scrolling is enabled
  without breaking layout or spacing.
*/
const ComparisonTable = ({
  accountSizes = [],
  fees = [],
  rows = [],
}) => {
  return (
    /* Mobile-safe horizontal scroll wrapper */
<div className="w-full overflow-x-auto flex justify-center">
  <div className="min-w-[1239px] rounded-[24px] overflow-hidden">

        {/* TABLE GRID */}
        <div className="mt-10 grid grid-cols-[273px_repeat(6,157px)]">

          {/* HEADER ROW */}
          <div
            className="h-[105px] bg-[#3B6B29]
                       flex items-center justify-center
                       text-white text-[24px] font-medium"
          >
            Account Size
          </div>

          {accountSizes.map((size, i) => (
            <div
              key={i}
              className="h-[105px] bg-[#3B6B29]
                         flex flex-col items-center justify-center gap-2"
            >
              <span className="text-white text-[24px] font-medium">
                {size}
              </span>

              {/* CTA */}
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

          {/* TABLE BODY */}
          {rows.map((row, rIdx) => (
            <div key={rIdx} className="contents">

              {/* Row label */}
              <div
                className="h-[61px] bg-[#3B6B29]
                           flex items-center px-4
                           text-white text-[16px] font-medium"
              >
                {row.label}
              </div>

              {/* Row values */}
              {row.values.map((val, i) => (
                <div
                  key={i}
                  className={`h-[61px] flex items-center justify-center
                    ${i % 2 === 0 ? "bg-[#0E1B0B]" : "bg-[#3B6B29]"}
                    text-white text-[16px]`}
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
  );
};

export default ComparisonTable;
