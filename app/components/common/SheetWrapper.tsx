import { ReactNode } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import logoLight from "@/public/images/logo-light.svg";

type SheetWrapperType = {
  ButtonTrigger: ReactNode;
  children: ReactNode;
};

export default function SheetWrapper({
  children,
  ButtonTrigger,
}: SheetWrapperType) {
  return (
    <Sheet>
      <SheetTrigger className="flex cursor-pointer flex-col space-y-1 bg-transparent hover:bg-transparent">
        {ButtonTrigger}
      </SheetTrigger>

      <SheetContent className="bg-orange" side={"left"}>
        <SheetHeader className="justify-center">
          <SheetClose asChild>
            <div className="flex justify-center items-center ">
              <Image
                src={logoLight}
                alt="Logo"
                className="w-36 cursor-pointer"
              />
            </div>
          </SheetClose>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
