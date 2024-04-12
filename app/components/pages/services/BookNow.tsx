import { Container } from "../../common/Container";
import Image from "next/image";
import Icon1 from "@/public/images/icon1.png";
import Icon2 from "@/public/images/icon2.png";
import Icon3 from "@/public/images/icon3.png";
import Icon4 from "@/public/images/icon4.png";
import Icon5 from "@/public/images/icon5.png";
import Icon6 from "@/public/images/icon6.png";
import { Button } from "../../ui/button";
import Link from "next/link";

export default function BookNow() {
  return (
    <Container>
      <div>
        <div className="w-32 h-0.5 mx-auto bg-orange mb-5" />
        <h2 className="text-xl uppercase tracking-widest text-orange text-center">
          Orci ut tempor eu
        </h2>
        <div className="grid sm:grid-cols-2 mt-10 md:mt-20 text-blue md:w-3/4 mx-auto gap-5 sm:gap-10 md:gap-20 text-center sm:text-left">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="mb-5 ">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="mx-auto sm:mx-0"
                  />
                </div>
                <div>
                  <h2 className="text-lg mb-2">{item.title}</h2>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" bg-orange p-10 mt-10 sm:mt-20 text-white grid md:grid-cols-3 items-center">
          <div className="col-span-2 cols">
            <h2 className="text-xl sm:text-2xl ">
              Pharetran amet habitasse cras est, malesuada elementum. Nisl, eu
              ultricies lorem nunc.
            </h2>
            <div className="mt-5 flex gap-20 items-center">
              <p className="text-base">
                Congue non diam diam tortor cum sodales quisque mi. Volutpat
                condimentum tortor ipsum venenatis egestas vitae hac.
              </p>
            </div>
          </div>
          <Button className="bg-white text-orange rounded-none border-none w-44 mx-auto mt-5 md:mt-0">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}

const data = [
  {
    id: 1,
    icon: Icon1,
    title: "Sit aenean enim turpis pellentesque nunc libero praesent",
    description:
      "Donec tincidunt natoque id scelerisque. Mattis enim, morbi blandit cras nec et ultricies duis. Congue non diam diam tortor cum sodales quisque mi. Volutpat condimentum tortor ipsum venenatis egestas vitae hac.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "In fermentum tempor ac ornare",
    description:
      "Donec tincidunt natoque id scelerisque. Mattis enim, morbi blandit cras nec et ultricies duis. Congue non diam diam tortor cum sodales quisque mi. Volutpat condimentum tortor ipsum venenatis egestas vitae hac.",
  },
  {
    id: 3,
    icon: Icon3,
    title:
      "Eget morbi egestas eget adipiscing ultrices blandit amet ultrices duis",
    description:
      "Donec tincidunt natoque id scelerisque. Mattis enim, morbi blandit cras nec et ultricies duis. Congue non diam diam tortor cum sodales quisque mi. Volutpat condimentum tortor ipsum venenatis egestas vitae hac.",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Nisl vulputate faucibus diam viverra",
    description:
      "Donec tincidunt natoque id scelerisque. Mattis enim, morbi blandit cras nec et ultricies duis. Congue non diam diam tortor cum sodales quisque mi. Volutpat condimentum tortor ipsum venenatis egestas vitae hac.",
  },
  {
    id: 5,
    icon: Icon5,
    title:
      "Lectus sollicitudin sit sit diam lorem facilisis adipiscing magna vitae",
    description:
      "Donec tincidunt natoque id scelerisque. Mattis enim, morbi blandit cras nec et ultricies duis. Congue non diam diam tortor cum sodales quisque mi. Volutpat condimentum tortor ipsum venenatis egestas vitae hac.",
  },
  {
    id: 6,
    icon: Icon6,
    title: "Pharetra vestibulum, elementum aliquam magna risus",
    description:
      "Donec tincidunt natoque id scelerisque. Mattis enim, morbi blandit cras nec et ultricies duis. Congue non diam diam tortor cum sodales quisque mi. Volutpat condimentum tortor ipsum venenatis egestas vitae hac.",
  },
];
