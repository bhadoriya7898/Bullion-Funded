import user1 from "../../assets/images/card1.png";
import user2 from "../../assets/images/card2.png";
import user3 from "../../assets/images/card3.png";
import user4 from "../../assets/images/card4.png";
import user5 from "../../assets/images/card5.png";
import user6 from "../../assets/images/card6.png";

const testimonials = [
  {
    name: "Devon Lane",
    role: "Marketing Coordinator",
    image: user1,
    content:
      "I've been investing in a Profitx-funded company for the past year, and it’s been an incredibly rewarding experience. The transparency and security provided by the company have given me confidence in my investments.",
  },
  {
    name: "Jane Cooper",
    role: "Marketing Coordinator",
    image: user2,
    content:
      "I've been investing in a Profitx-funded company for the past year, and it’s been an incredibly rewarding experience. The transparency and security provided by the company have given me confidence in my investments.",
  },
  {
    name: "Guy Hawkins",
    role: "Marketing Coordinator",
    image: user3,
    content:
      "I've been investing in a Profitx-funded company for the past year, and it’s been an incredibly rewarding experience. The transparency and security provided by the company have given me confidence in my investments.",
  },
  {
    name: "Ralph Edwards",
    role: "Marketing Coordinator",
    image: user4,
    content:
      "I've been investing in a Profitx-funded company for the past year, and it’s been an incredibly rewarding experience. The transparency and security provided by the company have given me confidence in my investments.",
  },
  {
    name: "Theresa Webb",
    role: "Marketing Coordinator",
    image: user5,
    content:
      "I've been investing in a Profitx-funded company for the past year, and it’s been an incredibly rewarding experience. The transparency and security provided by the company have given me confidence in my investments.",
  },
  {
    name: "Wade Warren",
    role: "Marketing Coordinator",
    image: user6,
    content:
      "I've been investing in a Profitx-funded company for the past year, and it’s been an incredibly rewarding experience. The transparency and security provided by the company have given me confidence in my investments.",
  },
];

const CommunityFeedback = () => {
  return (
    <section className="w-full bg-[#0C1406] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center gap-[40px] md:gap-[60px] px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[720px]">
          <h2 className="text-[26px] md:text-[36px] font-bold text-white">
            Feedback from <span className="text-[#82F352]">our community</span>
          </h2>

          <p className="mt-4 text-[15px] md:text-[18px] text-white/80">
            Choose your account and funds to begin your trading journey with funded.
          </p>
        </div>

        {/* ================= AUTO SCROLL ================= */}
        <div className="relative w-full overflow-hidden">
          <div
            className="
              flex gap-[20px] md:gap-[40px]
              animate-testimonial-scroll
              hover:[animation-play-state:paused]
              will-change-transform
            "
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-testimonial-scroll {
          animation: testimonial-scroll 18s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-testimonial-scroll {
            animation-duration: 14s;
          }
        }
      `}</style>
    </section>
  );
};

const TestimonialCard = ({ data }) => {
  return (
    <div
      className="
        w-[300px] h-[230px]
        md:w-[360px] md:h-[260px]
        bg-white rounded-[12px]
        shadow-lg p-[20px] md:p-[24px]
        flex-shrink-0
      "
    >
      <div className="flex flex-col gap-[14px] h-full">

        {/* Header */}
        <div className="flex items-center gap-[12px]">
          <img
            src={data.image}
            alt={data.name}
            className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full object-cover"
          />

          <div>
            <h4 className="font-bold text-black text-[15px] md:text-[16px]">
              {data.name}
            </h4>
            <p className="text-[13px] md:text-[14px] text-gray-600">
              {data.role}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex items-center flex-1">
          <p className="text-[13px] md:text-[14px] text-gray-700 leading-[1.6]">
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedback;
