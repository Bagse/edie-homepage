function MenuList({name, link}) {
  return (
    <li className="relative md:block text-white md:text-black">
      <a className="hover:underline transition underline-offset-8 capitalize font-poppins font-medium md:text-2xl hover:text-[#2D9CDB]" href={link}>
        {name}
      </a>
    </li>
  );
}

export default MenuList;
