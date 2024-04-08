import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "./Container";

type SectionType = {
  background?: string;
  sectionTitle: string;
  shortDescription: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

export default function TwoColumnText({
  background,
  sectionTitle,
  shortDescription,
  description,
  ctaText,
  ctaLink,
}: SectionType) {
  return (
    <Container backgroundImage={background}>
      <div
        className={`w-32 h-0.5 mx-auto  mb-5 ${
          background ? "bg-white" : "bg-orange"
        }`}
      />
      <div className="">
        <h2
          className={`text-center text-xl uppercase tracking-widest  ${
            background ? "text-white" : "text-orange"
          }`}
        >
          {sectionTitle}
        </h2>
        <div
          className={`grid lg:grid-cols-2 gap-5 lg:gap-20 mt-10 ${
            background ? "text-white" : "text-blue"
          }`}
        >
          <div>
            <p className="text-base md:text-2xl ">{shortDescription}</p>
          </div>
          <div>
            <p className="text-base ">{description}</p>
            <Button
              className={`bg-transparent hover:bg-transparent border  rounded-none font-normal uppercase mt-5 ${
                background
                  ? "border-white text-white"
                  : "border-orange text-orange"
              }`}
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
