import { useState } from "react";

import faqBg from "../assets/images/FAQ-bg-stars.png";
import faqQst from "../assets/images/faqQST.png";
import faqEmail from "../assets/images/FAQEmailus.png";
import faqSupport from "../assets/images/FAQcustomercare.png";

const faqList = [
  {
    q: "Is Bullionfunded regulated?",
    a: "Bullion funded is a registered trademark in the UAE and is officially based in Ajman, UAE. It operates under a distinctive framework and is not subject to conventional financial regulations. It's important to note that Bullion funded doesn't handle client funds or conduct trading on behalf of the public. Due to this unique aspect, the usual regulatory requirements for firms dealing with client funds or providing trading services to the general public don't apply to Bullion Funded.",
  },
  {
    q: "How do I claim the 20% Profit Share?",
    a: "Once you meet the eligibility criteria and complete the required trading period, profit share can be claimed directly from your dashboard.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full bg-[#090909] font-['Helvetica_Neue']">

      {/* ================= HERO ================= */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${faqBg})` }}
      >
        <div className="max-w-[1300px] mx-auto px-6 py-32">
          <h1 className="text-white text-[36px] md:text-[56px] font-bold leading-tight max-w-[520px]">
            Your Guide to <br />
            Everything <br />
            You Need to <br />
            Know!
          </h1>
        </div>
      </div>

      {/* ================= ASSISTANCE TITLE ================= */}
      <div className="w-full flex justify-center px-4 mt-20">
        <h2 className="text-white text-[20px] md:text-[30px] font-bold tracking-wide">
          GET THE ASSISTANCE YOU’RE LOOKING FOR!
        </h2>
      </div>

      {/* ================= SUPPORT CARDS ================= */}
      <div className="w-full flex justify-center px-4 mt-12">
        <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* FAQ CARD */}
          <div className="bg-white rounded-[24px] px-8 py-10 text-center">
            <img src={faqQst} className="mx-auto mb-6 w-[90px]" />
            <h3 className="text-[24px] font-bold mb-4">FAQ</h3>
            <p className="text-[17px] text-black-700 leading-relaxed font-semi-bold">
              Check out our frequently asked questions below to find the
              information you need. If you need further help, feel free
              to contact us!
            </p>
          </div>

          {/* SUPPORT REQUEST (HIGHLIGHTED) */}
          <div className="bg-[#82F352] rounded-[24px] px-8 py-10 text-center">
            <img src={faqSupport} className="mx-auto mb-6 w-[90px]" />
            <h3 className="text-[24px] font-bold mb-4 text-black">
              Support Request
            </h3>
            <p className="text-[17px] text-black leading-relaxed font-semi-bold">
              Our dedicated team is ready to assist you anytime, with an
              average response time of just 60 seconds. Reach out whenever
              you need help, and we’ll be there to support you!
            </p>
          </div>

          {/* EMAIL US */}
          <div className="bg-white rounded-[24px] px-8 py-10 text-center">
            <img src={faqEmail} className="mx-auto mb-6 w-[90px]" />
            <h3 className="text-[24px] font-bold mb-4">Email Us!</h3>
            <p className="text-[17px] text-black-700 leading-relaxed font-semi-bold">
              We welcome new ideas, suggestions, and affiliate partnerships.
              Reach out today and let’s explore exciting opportunities
              together!
            </p>
          </div>

        </div>
      </div>

      {/* ================= FAQ ACCORDION ================= */}
      <div className="w-full flex justify-center px-4 mt-24 pb-32">
        <div className="w-full max-w-[900px] space-y-5">

          {faqList.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] px-6 py-4 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <span className="text-black text-[24px] font-medium font-bold">
                  {item.q}
                </span>
                <span className="text-black text-[22px] font-bold">
                  {open === i ? "−" : "+"}
                </span>
              </div>

              {open === i && (
                <p className="mt-4 text-[18px] text-black
                -700 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQ;
