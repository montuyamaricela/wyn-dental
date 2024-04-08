import Image from "next/image";
import Hero from "../components/common/Hero";
import AboutSection from "../components/common/AboutSection";

export default function Home() {
  return (
    <div>
      <Hero
        sectionTitle="Enim elementum neque"
        title="Lorem ipsum Dolor Sit amit consecutor"
      />
      <AboutSection
        sectionTitle="Enim elementum neque"
        shortDescription="Arcu arcu a, eu facilisis tellus vulputate cursus nisl, felis. Tincidunt tellus egestas posuere magnis. Mauris metus, luctus varius fermentum sit quis eu ullamcorper. In integer eget id nibh."
      />
    </div>
  );
}
