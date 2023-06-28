function CardUser() {
  return (
    <div className="font-poppins py-10 w-[351px] md:w-[931px]" id="clients">
      <p className="text-[#333333] font-medium text-2xl w-[351px] md:w-[700px] lg:w-[600px]">
        “Fast and outstanding resutls. Edie understands their customer's needs.
        They have a young and talented team.”
      </p>
      <div className="flex gap-5 items-center py-7">
        <img
          src="./img/person4.png"
          alt="image of person profile"
          className="rounded-lg w-[82px]"
        />
        <div className="font-medium flex flex-col gap-2">
          <h4 className="text-2xl text-[#333333]">Carlos Tran</h4>
          <h5 className="text-lg text-[#828282]">The Decorate Gatsby</h5>
        </div>
      </div>
    </div>
  );
}

export default CardUser;
