import Hero from "../components/common/Hero";
import AboutSection from "../components/common/AboutSection";
import About from "../components/pages/home/About";
import TwoColumnText from "../components/common/TwoColumnText";
import ImageBackground from "../components/pages/home/Image";
import TwoColumnImage from "../components/common/TwoColumnImage";
import Testimonial from "../components/common/Testimonial";
import backgroundImage from "@/public/images/learn-more.png";
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
      <About />
      <TwoColumnText
        sectionTitle="About Us"
        shortDescription="Nisi interdum ac cras amet maecenas donec donec feugiat enim. Mi posuere aliquet."
        description="Volutpat auctor sit commodo nec montes. Lectus porttitor sem posuere nisl felis. Nunc varius cras elementum pellentesque in mattis ipsum eleifend praesent. Blandit donec justo, augue fermentum. Nec integer neque habitant non. Egestas arcu vitae tristique varius tincidunt."
        ctaText="Learn More"
        ctaLink="/"
      />
      <ImageBackground />
      <TwoColumnImage />
      <Testimonial />
      <TwoColumnText
        background={backgroundImage.src}
        sectionTitle="About Us"
        shortDescription="Nisi interdum ac cras amet maecenas donec donec feugiat enim. Mi posuere aliquet."
        description="Volutpat auctor sit commodo nec montes. Lectus porttitor sem posuere nisl felis. Nunc varius cras elementum pellentesque in mattis ipsum eleifend praesent. Blandit donec justo, augue fermentum. Nec integer neque habitant non. Egestas arcu vitae tristique varius tincidunt."
        ctaText="Learn More"
        ctaLink="/"
      />
    </div>
  );
}
