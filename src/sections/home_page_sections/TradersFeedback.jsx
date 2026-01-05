import fiveStar from "../../assets/images/fivestar.png";

const reviews = [
  {
    name: "Abdirisak faysal",
    time: "2 Days ago",
    title: "Firstly I'm loving this propfirm…",
    text:
      "Firstly I'm loving this propfirm activities, since it provide convenience tools that helped me pass phase one. Tools like journaling helped me most.And I hope to pass phase 2 and become funded trader. Thank you",
  },
  {
    name: "Joe T",
    time: "2 Days ago",
    title: "Honestly the company did very well…",
    text:
      "Honestly the company has done an excellent job helping small traders improve their stability. The transparency and support are outstanding.",
  },
  {
    name: "Ali Abolhosseini",
    time: "3 Days ago",
    title: "Come to see your dream house…",
    text:
      "Bullionfunded transformed my trading journey. Clear rules, fast support, and reliable funding process overall.",
  },
  {
    name: "Aqib Siddique",
    time: "3 Days ago",
    title: "Bullionfunded is awesome…",
    text:
      "I passed my evaluation smoothly. Support was fast and account credentials were delivered quickly. Amazing experience.",
  },
  {
    name: "Tariq Boudjella",
    time: "4 Days ago",
    title: "Support is amazing…",
    text:
      "Had an issue during market opening. Support resolved it within hours and refunded the amount. Respect!",
  },
  {
    name: "Gaele Lepron",
    time: "4 Days ago",
    title: "A fair player, quite recommendable…",
    text:
      "Very transparent prop firm with easy-to-understand rules and helpful customer support.",
  },
  {
    name: "Mustafa Muzamil",
    time: "5 Days ago",
    title: "Great experience overall…",
    text:
      "Smooth evaluation process and quick responses from support team. Would recommend to serious traders.",
  },
  {
    name: "Mohamud Muktar",
    time: "5 Days ago",
    title: "Reliable prop firm…",
    text:
      "Everything from signup to trading was straightforward. No hidden tricks. Solid company.",
  },
  {
    name: "Ralph Edwards",
    time: "6 Days ago",
    title: "Very professional setup…",
    text:
      "The dashboard, rules, and support system are well designed. Makes trading stress-free.",
  },
];

const FeedbackCards = () => {
  return (
    <section className="w-full flex justify-center py-20 md:py-28 bg-black">
      <div className="w-full max-w-[1242px] flex flex-col gap-[36px] px-4">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-[6px]">
          <span className="text-[14px] md:text-[16px] text-[#C8C8C8]">
            Traders Feedbacks
          </span>

          <h2 className="text-[26px] md:text-[32px] font-bold text-white">
            Our Traders L❤️ve Us
          </h2>

          <p className="max-w-[520px] text-[14px] md:text-[16px] text-[#DADADA]">
            FundedNext shines with traders like you! See what real traders have
            to say about our best-in-class prop trading firm.
          </p>

          <div className="flex flex-col gap-[4px] mt-[6px]">
            <span className="text-[15px] md:text-[16px] text-white font-semibold">
              Excellent{" "}
              <span className="text-[#82F352]">★★★★★</span>
            </span>

            <span className="text-[13px] md:text-[15px] text-[#C8C8C8]">
              Rated 4.5 / 5 based on 20,000 reviews
            </span>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="flex justify-center">
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              gap-[20px] md:gap-[24px]
              lg:h-[456px]
              lg:overflow-y-auto
              pr-[6px]
              scrollbar-hide
            "
          >
            {reviews.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-[10px]
                  p-[16px]
                  h-auto lg:h-[214px]
                "
              >
                <div className="flex flex-col gap-[8px] h-full">

                  <img
                    src={fiveStar}
                    alt="rating"
                    className="w-[140px] h-auto"
                  />

                  <p className="text-[13px] md:text-[15px] text-black">
                    {item.name}, {item.time}
                  </p>

                  <h4 className="text-[14px] md:text-[16px] font-medium text-black">
                    {item.title}
                  </h4>

                  <p className="text-[12px] md:text-[13px] text-black leading-[1.4]">
                    {item.text}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeedbackCards;
