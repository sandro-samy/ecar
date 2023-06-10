import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../shared/Button";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <h3 className="font-extrabold text-3xl leading-none">ECar</h3>
        </Link>
        <Button
          title="Sign In"
          type="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
