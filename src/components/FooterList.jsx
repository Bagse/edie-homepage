function FooterList({name, link}) {
  return (
    <li className="hover:text-[#2D9CDB] hover:font-medium cursor-pointer transition">
      <a href={link}>
        {name}
      </a>
    </li>
  );
}

export default FooterList;
