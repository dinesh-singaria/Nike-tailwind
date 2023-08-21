import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            className=""
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                key={items.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
