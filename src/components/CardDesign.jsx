function CardDesign({ img, name, descrip, bottom }) {
  return (
    <div className={`font-poppins flex flex-col py-5 ${bottom}`}>
      <img src={img} alt="design image" className="rounded-3xl w-[351px] md:w-[534px]" />
      <div className="py-4">
        <h4 className="text-[#828282] font-light text-xs md:text-sm">{name}</h4>
        <p className="text-[#333333] font-medium text-lg md:text-2xl">{descrip}</p>
      </div>
    </div>
  );
}

export default CardDesign;
