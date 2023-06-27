import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import MenuList from "./MenuList";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex justify-between items-center">
      <h1 className=" font-heebo text-2xl text-[#333333]">Edie</h1>
      <nav className="flex">
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <AiFillCloseCircle size={28} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "fixed inset-0 bg-black bg-opacity-50 z-50" : "hidden"
          } md:relative md:flex md-items-center w-full md:w-auto`}
        >
          <ul className="lg:gap-24 md:flex-row md:text-xl items-center flex flex-col gap-10 place-content-center bg-[#181719] h-screen text-2xl md:h-0">
            <MenuList name="home" />
            <MenuList name="services" />
            <MenuList name="our works" />
            <MenuList name="clients" />
            <MenuList name="contact" />
          </ul>
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none md:hidden"
            >
              <AiFillCloseCircle size={28} className="text-white rounded-full" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
