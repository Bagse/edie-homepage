function MenuList({name}) {
  return (
    <li className="relative md:block text-white md:text-black">
      <a className="hover:underline transition underline-offset-8 capitalize font-poppins font-medium" href="#">
        {name}
      </a>
    </li>
  );
}

export default MenuList;
