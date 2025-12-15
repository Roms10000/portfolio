import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
import {FaGithub,FaVideo} from "react-icons/fa";

export default function List() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="text-black bg-white  hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 cursor-pointer"><FaGithub size={20} className="text-black cursor-pointer" /></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" href="https://github.com/ValentinRibotDev/coffee-front" target="_blank">Front</DropdownItem>
        <DropdownItem key="copy" href="https://github.com/Roms10000/back_coffee" target="_blank">Back</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}