// src/components/EvaluationRuleCard.jsx
const EvaluationRuleCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        group
        w-full
        max-w-[340px] sm:max-w-[380px] xl:max-w-[400px]
        h-[260px] sm:h-[269px]
        bg-white
        rounded-[10px]
        pt-[10px] pr-[18px] sm:pr-[21px]
        pb-[18px] sm:pb-[21px]
        pl-[18px] sm:pl-[21px]
        flex items-center justify-center
        transition-all duration-300
        hover:bg-[#82F352]
        hover:-translate-y-1
        hover:shadow-[0_12px_40px_rgba(130,243,82,0.45)]
      "
    >
      {/* Inner Frame */}
      <div
        className="
          w-full
          max-w-[300px] sm:max-w-[340px] xl:max-w-[358px]
          h-full
          flex flex-col items-center
          gap-[18px] sm:gap-[21px]
        "
      >
        {/* Icon */}
        <div
          className="
            w-[56px] h-[56px]
            flex items-center justify-center
            rounded-[12px]
            text-[32px]
            bg-[#82F352]/20
            text-black
            transition-all duration-300
            group-hover:bg-white/20
          "
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className="
            text-black
            text-[20px] sm:text-[24px]
            font-bold
            text-center
            leading-[110%]
          "
          style={{ fontFamily: "Helvetica Neue" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-black
            text-[13px] sm:text-[14px]
            font-normal
            text-center
            leading-[120%]
          "
          style={{ fontFamily: "Helvetica Neue" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default EvaluationRuleCard;
