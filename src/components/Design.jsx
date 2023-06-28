import CardDesign from "./CardDesign";
import { CgArrowLongRight } from "react-icons/cg";

function Design() {
  return (
    <div  id="our_works">
      <h2 className="text-2xl font-medium w-[280px] pl-7 md:text-4xl md:w-[448px]">
        Good design means good business
      </h2>
      <div className="py-10 md:py-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
        <CardDesign
          img="./img/smarthome.jpg"
          name="Full stack application"
          descrip="Smart home dashboard"
          bottom={`md:pt-44`}
        />
        <CardDesign
          img="./img/onboard.png"
          name="UX/UI design"
          descrip="Onboard application"
        />
        <CardDesign
          img="./img/booking.png"
          name="Mobile application"
          descrip="Booking system"
          bottom={`md:pt-44`}
        />
        <CardDesign
          img="./img/juice-product.png"
          name="Front End applicati on"
          descrip="Juice product homepage"
        />
      </div>
      <div className="flex gap-2 items-center text-[#2D9CDB] font-medium text-lg hover:underline hover:cursor-pointer md:justify-end -mt-10 pb-20 md:-mt-28 lg:pr-36">
          <p>see more</p>
          <CgArrowLongRight size={24} />
        </div>
    </div>
  );
}

export default Design;
