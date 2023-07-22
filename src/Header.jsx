import React from "react";
import { Navbar } from "flowbite-react";

export default function Header() {
  return (
    <>
      <Navbar fluid rounded className="bg-cyan-500">
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
           ROBIN
          </span>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          
          <Navbar.Link href="/">Question1</Navbar.Link>
          <Navbar.Link href="/Test2">Question2</Navbar.Link>
          <Navbar.Link href="/Test3">Question3</Navbar.Link>
          
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
