import { useState } from "react";

function CardService({ icon, name, info, colorIcon }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonBgColor = isHovered ? "bg-[#2D9CDB]" : "bg-[#E0E0E0]";
  const buttonTextColor = isHovered ? "text-white" : "text-[#828282]";
  return (
    <div
      className="py-5 hover:shadow-xl hover:rounded-2xl hover:cursor-pointer hover:bg-gray-100 pl-7 flex flex-col  gap-y-9"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`rounded-xl text-white p-4 w-[67px] flex place-content-center ${colorIcon}`}
      >
        {icon}
      </div>
      <div className="font-poppins flex flex-col gap-5">
        <h4 className="text-[#333333] font-bold text-2xl">{name}</h4>
        <p className="text-[#4F4F4F] font-normal w-[273px] py-5 text-base">
          {info}
        </p>
        <button
          className={`font-medium text-base p-3 w-[116px] rounded-xl ${buttonBgColor} ${buttonTextColor}`}
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default CardService;
