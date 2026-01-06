import createImg from "../assets/images/create.png";
import objectsImg from "../assets/images/OBJECTS.png";
import objects2Img from "../assets/images/OBJECTS2.png";
const cards = [
  {
    title: "Create an Account",
    desc: "Create an account with us using your preferred email/username and Make a Deposit",
    img: createImg,
    active: false,
  },
  {
    title: "Start Trading/Investing",
    desc: "Start trading with FOREX, CRYPTO, INDICES & COMMODITIES",
    img: objectsImg,
    active: true, // green highlighted card
  },
  {
    title: "Get Funded",
    desc: "Get paid within 24 hours otherwise we pay extra $1000",
    img: objects2Img,
    active: false,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-[#090909] font-['Helvetica_Neue']">

      {/* ================= HERO ================= */}
      <div className="w-full flex justify-center px-4 pt-20 md:pt-28">
        <div className="max-w-[900px] text-center">

          {/* small pill */}
          <span className="inline-block mb-4 px-5 py-1 rounded-full bg-[#1520104D] text-[#82F352] text-lg">
            Get Started
          </span>

          {/* heading */}
          <h1 className="text-white text-[30px] md:text-[42px] font-bold leading-tight">
            How to Get Started with <br />
            <span className="text-[#82F352]">Bullion Funded</span>
          </h1>

          {/* description */}
          <p className="mt-4 text-gray-300 text-[17px] md:text-[19px] leading-relaxed">
            Kickstart your trading career with Bullion Funded by selecting
            the perfect funding plan for your needs. Pass our evaluation
            process to demonstrate your trading expertise and gain access
            to a funded account. With no personal risk, you can focus on
            trading and achieving your financial goals.
          </p>

          {/* CTA */}
          <button className="text-lg mt-8 px-10 py-3 rounded-full bg-[#82F352] text-black font-bold hover:bg-[#74DA48] transition">
            Start Now
          </button>
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div className="w-full flex justify-center px-4 pb-24 md:pb-32 mt-16 md:mt-20 ">
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

          {cards.map((card, i) => (
            <div
              key={i}
              className={`
                rounded-[20px] p-6 md:p-8
                flex flex-col items-center text-center
                transition
                ${
                  card.active
                    ? "bg-[#82F352] text-black"
                    : "bg-white text-black"
                }
              `}
            >
              {/* image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-[140px] h-auto mb-6"
              />

              {/* title */}
              <h3 className="text-[19px] md:text-[20px] font-bold mb-3">
                {card.title}
              </h3>

              {/* description */}
              <p
                className={`text-[14px] md:text-[15px] leading-relaxed ${
                  card.active ? "text-black" : "text-gray-700"
                }`}
              >
                {card.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default HowItWorksSection;
