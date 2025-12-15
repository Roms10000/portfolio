import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {FaGithub} from "react-icons/fa";

export default function List2() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="text-black bg-white  hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 cursor-pointer"><FaGithub size={20} className="text-black cursor-pointer" /></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" href="https://github.com/Roms10000/front_end_website_devis" target="_blank">Front</DropdownItem>
        <DropdownItem key="copy" href="https://github.com/SivanandaSS/Symfony_suivi_demande" target="_blank">Back</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}