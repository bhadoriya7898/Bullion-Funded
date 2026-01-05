import zishan from "../../assets/certificatesimg/zishan.png";
import yaseen from "../../assets/certificatesimg/yaseen.png";
import wangzang from "../../assets/certificatesimg/wangzang.png";
import michael from "../../assets/certificatesimg/michael.png";
import jameshjosh from "../../assets/certificatesimg/jameshjosh.png";
import hatim from "../../assets/certificatesimg/hatim.png";

const certificates = [
  yaseen,
  zishan,
  jameshjosh,
  hatim,
  wangzang,
  michael,
];

const Certificate = () => {
  return (
    <section className="w-full bg-black py-20 md:py-32 overflow-hidden">
      <div className="w-full max-w-[1242px] mx-auto flex flex-col gap-[36px] px-4">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-[16px]">
          <div className="w-fit px-[14px] py-[6px] rounded-full bg-[#82F352]">
            <span className="text-[16px] md:text-[18px] text-black font-medium">
              Get Certified
            </span>
          </div>

          <h2 className="text-[24px] md:text-[32px] font-bold text-white leading-tight max-w-[1242px]">
            Successfully pass our trading challenge and receive a BullionFunded
            certificate, including both challenge completion and payout
            certification
          </h2>
        </div>

        {/* ================= INFINITE SCROLL ================= */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-[20px] md:gap-[28px] w-max animate-certificate-scroll">

            {[...certificates, ...certificates].map((img, index) => (
              <div
                key={index}
                className={`
                  flex-shrink-0
                  rounded-[20px]
                  border-[8px] md:border-[10px]
                  border-[#011C5D]
                  overflow-hidden
                  bg-black

                  /* Desktop sizes */
                  ${
                    index % 2 === 0
                      ? "md:w-[797px] md:h-[603px]"
                      : "md:w-[417px] md:h-[603px]"
                  }

                  /* Tablet */
                  sm:w-[360px] sm:h-[260px]

                  /* Mobile */
                  w-[280px] h-[200px]
                `}
              >
                <img
                  src={img}
                  alt="Certificate"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificate;
