import Image from "next/image";
import { Container } from "./Container";
import footerBackground from "@/public/images/footer-background.png";
import logoLight from "@/public/images/logo-light.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <Container backgroundImage={footerBackground.src}>
      <div className="grid justify-center text-center md:text-left md:justify-start md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
        <div>
          <Image src={logoLight} alt="Logo" className="w-44 mx-auto md:mx-0" />
        </div>
        <div className="font-extralight">
          <p className="text-lg cursor-default">Navigation</p>
          <ul className="mt-5 space-y-2">
            {navigation.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="font-extralight cursor-default">
          <p className="text-lg ">Contact Us</p>
          <ul className="mt-5">
            <li>Phone: (116) 918 9296</li>
            <li>Email:info@wynndentalwellness.com</li>
            <li className="mt-5">Office Hours: 08:30am - 05:30pm</li>
          </ul>
        </div>
        <div className="font-extralight cursor-default">
          <p className="text-lg cursor-default">Location</p>
          <ul className="mt-5">
            <li>747 Thunder Gate Crossing, </li>
            <li>Tampa, NM 27699</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

const navigation = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About Us", href: "/about" },
  { id: 3, name: "Services", href: "/servicees" },
  { id: 4, name: "Contact Us", href: "/contact" },
];
