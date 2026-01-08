// src/components/EvaluationRuleCard.jsx
const EvaluationRuleCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        w-full
        max-w-[340px] sm:max-w-[380px] xl:max-w-[400px]
        h-[260px] sm:h-[269px]
        bg-white
        rounded-[10px]
        pt-[10px] pr-[18px] sm:pr-[21px]
        pb-[18px] sm:pb-[21px]
        pl-[18px] sm:pl-[21px]
        flex items-center justify-center
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
        <img
          src={icon}
          alt={title}
          className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"
        />

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
