import { MdModeEdit } from "react-icons/md";
import { MdOutlineCode } from "react-icons/md";
import { MdStorage } from "react-icons/md";
import CardService from "./CardService";

function Services() {
  return (
    <div className="font-poppins">
      <h2 className="text-2xl font-medium w-[259px] pl-7">
        We offer high demand services
      </h2>

      <div className="py-10 flex flex-col gap-7">
        <CardService
          icon={<MdModeEdit size={36} />}
          name="UI/UX Design"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus
          ac nulla consequat aliquet id quis turpis."
          colorIcon="bg-[#2D9CDB]"
        />
        <CardService
          icon={<MdOutlineCode size={36} />}
          name="Front End"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
          colorIcon="bg-[#27AE60]"
        />
        <CardService
          icon={<MdStorage size={36} />}
          name="Back End"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
          colorIcon="bg-[#EB5757]"
        />
      </div>
    </div>
  );
}

export default Services;
