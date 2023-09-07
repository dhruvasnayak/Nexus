import React from "react";
import { Button } from "./Button";
const Navbar = () => {
  return (
    <>
      <div className="h-16 w-full flex items-center gap-72 border-b-2 border-secondary/50">
        <h1 className="p-[25px] font-montserrat font-bold text-lg">NEXUS</h1>
        <div className="flex w-[30rem] justify-between  h-full items-center text-[12px] font-montserrat font-bold">
          <h2>HOME</h2>
          <h2>TEAM</h2>
          <h2>DISCOVER</h2>
          <h2>OPTIONS</h2>
          <h2>HOME</h2>
        </div>
        <Button size="sm" className="font-bold py-30 px-10">Login</Button>
      </div>
      
    </>
  );
};

export default Navbar;
