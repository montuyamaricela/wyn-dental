import Image from "next/image";
import { Container } from "./Container";

type SectionType = {
  sectionTitle: string;
  shortDescription: string;
  description?: string;
};

export default function AboutSection({
  sectionTitle,
  shortDescription,
  description,
}: SectionType) {
  return (
    <Container>
      <div className="w-32 h-0.5 mx-auto bg-orange mb-5" />
      <div className="text-center">
        <h2 className="text-base uppercase text-orange">{sectionTitle}</h2>
        <p className="text-xl text-blue w-2/4 mx-auto mt-5">
          {shortDescription}
        </p>
        {description && (
          <p className="text-base text-blue w-2/4 mx-auto mt-5">
            {description}
          </p>
        )}
      </div>
    </Container>
  );
}
