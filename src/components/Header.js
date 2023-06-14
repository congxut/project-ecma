import MenuList from "./MenuList";
import { menus } from "../data";
const Header = () => {
  return /*html */ `
    ${MenuList({ menus })}
  `;
};

export default Header;
