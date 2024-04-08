import Image from "next/image";
import { Container } from "./Container";
import image1 from "@/public/images/about-image-1.png";
import image2 from "@/public/images/about-image-2.png";
import overlay from "@/public/images/overlay-2.png";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TwoColumnImage() {
  return (
    <Container backgroundImage={overlay.src} position="right">
      <div>
        <div className="w-32 h-0.5 mx-auto bg-orange mb-5" />
        <h2 className="text-xl text-center text-orange uppercase tracking-widest">
          Nulla lorem
        </h2>
        <div>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="grid lg:grid-cols-2 gap-10 mt-10 lg:mt-24 items-center"
              >
                <div
                  className={`relative ${item.id % 2 == 0 ? "order-last" : ""}`}
                >
                  <div
                    className={`h-full w-3/4 bg-green absolute -top-10  hidden lg:block ${
                      item.id % 2 == 0 ? "left-10 " : "right-10"
                    }`}
                  />
                  <div className="">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className={`h-full w-full lg:w-3/4 relative ${
                        item.id % 2 == 0 ? "lg:mr-auto " : "lg:ml-auto "
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={item.id % 2 == 0 ? "lg:text-right" : "text-left"}
                >
                  <h2 className="text-2xl font-light">{item.title}</h2>
                  <div className="space-y-5 font-light text-sm my-5">
                    <p>{item.description}</p>
                  </div>
                  <Button className="bg-transparent hover:bg-transparent border border-orange rounded-none font-normal text-orange">
                    <Link href={item.ctaLink}>{item.ctaText}</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const data = [
  {
    id: 1,
    title: "Welcome To Wynn Dental Wellness",
    description:
      "Enim cursus volutpat aliquet pharetra magna proin augue. Lorem eu, sit cras quis amet. Gravida eu aliquam nulla tempor mi, cras non aliquet libero. Risus convallis diam lectus sagittis sed at nulla. Lectus amet amet senectus ornare sed vitae.",
    ctaText: "Your  first visit",
    ctaLink: "/",
    image: image1,
  },
  {
    id: 2,
    title: "Ultricies cursus hendrerit sed interdum diam",
    description:
      "Ut fames tempus venenatis facilisis tempus, egestas. Lacinia bibendum viverra odio aliquam, id pharetra pellentesque. A felis amet neque ultrices id mattis senectus vitae pellentesque. Feugiat sed nunc at elit cursus sed viverra amet risus.",
    ctaText: "Tailored Services",
    ctaLink: "/",
    image: image2,
  },
];
