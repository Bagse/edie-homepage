function Team() {
  return (
    <div className="md:flex md:items-center md:justify-between md:gap-7 lg:gap-0">
      <div className="font-poppins flex flex-col gap-4">
        <h2 className="text-[#EB5757] font-medium text-lg">Meet the team</h2>
        <h3 className="text-[#333333] text-4xl w-[280px]">
          We are chilled and a laidback team
        </h3>
        <p className="text-[#4F4F4F] md:text-base md:w-[273px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-2 items-center gap-3 my-11">
        <img
          src="./img/person3.png"
          alt="image of person profile"
          className="w-[178px] rounded-3xl md:w-[320px]"
        />
        <div className="flex flex-col gap-3 rounded-2xl">
          <img
            src="./img/person1.png"
            alt="image of person profile"
            className="w-[144px] rounded-3xl md:w-[260px]"
          />
          <img
            src="./img/person2.png"
            alt="image of person profile"
            className="w-[162px] rounded-3xl md:w-[291px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
