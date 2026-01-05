import bitcoin from "../../assets/paymentmethods/bitcoin.png";
import dollar from "../../assets/paymentmethods/dollar.png";
import liza from "../../assets/paymentmethods/liza.png";
import tiii from "../../assets/paymentmethods/tiii.png";
import visa from "../../assets/paymentmethods/visa.png";

const paymentIcons = [bitcoin, dollar, liza, tiii, visa];

const PaymentMethods = () => {
  return (
    <section className="w-full flex justify-center bg-black py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[948px] flex flex-col gap-[30px] md:gap-[40px] px-4">

        {/* ===== Heading ===== */}
        <h2 className="text-center text-[26px] md:text-[32px] font-bold text-white">
          Available{" "}
          <span className="text-[#82F352]">
            Payment Methods
          </span>
        </h2>

        {/* ===== Auto Scroll Wrapper ===== */}
        <div className="relative w-full overflow-hidden">

          {/* Scrolling Track */}
          <div
            className="
              flex w-max gap-[24px] md:gap-[40px]
              animate-payment-scroll
              hover:[animation-play-state:paused]
              will-change-transform
            "
          >
            {/* Duplicate list for infinite scroll */}
            {[...paymentIcons, ...paymentIcons].map((icon, index) => (
              <div
                key={index}
                className="
                  w-[120px] h-[80px]
                  md:w-[160px] md:h-[112px]
                  bg-[#0E0E0E]
                  rounded-[12px] md:rounded-[16px]
                  flex items-center justify-center
                  shrink-0
                "
              >
                <img
                  src={icon}
                  alt="payment-method"
                  className="max-h-[70%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ===== Animation Styles ===== */}
      <style>{`
        @keyframes payment-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-payment-scroll {
          animation: payment-scroll 22s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-payment-scroll {
            animation-duration: 16s;
          }
        }
      `}</style>
    </section>
  );
};

export default PaymentMethods;
