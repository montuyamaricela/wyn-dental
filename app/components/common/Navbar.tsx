"use client";

import Image from "next/image";
import logoDark from "@/public/images/logo-dark.svg";
import logoLight from "@/public/images/logo-light.svg";
import SheetWrapper from "./SheetWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Dental Services", link: "/services" },
  { id: 4, title: "Why Wynn?", link: "/about" },
  { id: 5, title: "First Visit", link: "/about" },
  { id: 6, title: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 20) {
        setBackgroundColor("#122D47");
      } else {
        setBackgroundColor("transparent");
      }
    };

    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className=" text-white fixed  left-0 right-0 z-50"
    >
      <div className="container  mx-auto py-5 flex flex-row-reverse sm:flex-row justify-between items-center text-white">
        <div>
          <SheetWrapper
            ButtonTrigger={
              <div className="flex gap-1 items-center justify-center">
                <div className="flex flex-col gap-1">
                  <div className="h-0.5 w-5 rounded-full bg-white" />
                  <div className="h-0.5 w-5 rounded-full bg-white" />
                </div>
                MENU
              </div>
            }
          >
            <div>
              <div className="mt-20">
                <ul className="flex flex-col  gap-10 text-white items-center">
                  {navLinks.map((navItem) => {
                    return (
                      <li
                        key={navItem.id}
                        className="hover:border-white border-b border-transparent transition-all ease-in-out delay-150"
                      >
                        <Link href={navItem.link}>{navItem.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </SheetWrapper>
        </div>
        <Link href="/">
          <Image src={logoDark} alt="Logo" className="w-36" />
        </Link>
        <div className="hidden sm:block">
          <Link
            href="/contact"
            className="text-xs bg-transparent border-white border px-5 py-2"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
