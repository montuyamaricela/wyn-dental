import Image from "next/image";
import logoDark from "@/public/images/logo-dark.svg";
import logoLight from "@/public/images/logo-light.svg";
import SheetWrapper from "./SheetWrapper";
import Link from "next/link";

const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Dental Services", link: "/" },
  { id: 4, title: "Why Wynn?", link: "/" },
  { id: 5, title: "First Visit", link: "/" },
  { id: 6, title: "Contact", link: "/contactt" },
];

export default function Navbar() {
  return (
    <div className="container mx-auto py-5 flex flex-row-reverse sm:flex-row justify-between text-white items-center fixed left-0 right-0 z-50">
      <div>
        <SheetWrapper
          ButtonTrigger={
            <div className="flex gap-1 items-center justify-center">
              <div className="flex flex-col gap-1">
                <div className="h-0.5 w-5 rounded-full bg-white" />
                <div className="h-0.5 w-5 rounded-full bg-white" />
              </div>
              Menu
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
          href="/"
          className="text-xs bg-transparent border-white border px-5 py-2"
        >
          BOOK NOW
        </Link>
      </div>
    </div>
  );
}
