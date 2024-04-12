import AboutSection from "@/app/components/common/AboutSection";
import Hero from "@/app/components/common/Hero";
import AboutUs from "@/app/components/pages/about/About";

export default function About() {
  return (
    <div>
      <Hero
        sectionTitle="About Us"
        title="Ut rhoncus accumsan nibh donec sit."
      />
      <AboutSection
        sectionTitle="Our Story"
        shortDescription="“Id arcu rhoncus, ullamcorper nunc ut porta justo. Sit at pretium sed mauris tincidunt faucibus in id adipiscing. Sit lobortis sagittis ornare nam.”"
        description="Nec, fermentum nisl ornare risus bibendum cras lectus viverra. Tristique in cursus venenatis dictum ullamcorper volutpat. Mauris, ipsum ut volutpat morbi mattis quis arcu. Scelerisque urna est ante sem feugiat nisl nunc. Auctor sit blandit neque libero. Arcu pulvinar nulla fringilla odio egestas vulputate congue nullam felis. Quis sed eu imperdiet neque quis. In diam nec viverra ut morbi feugiat. Etiam arcu aliquam magna at diam. Pellentesque a mauris habitant pharetra magna. Lectus mattis sit laoreet massa. Nullam amet arcu, sed nisl nec ac in sit cursus. Congue a turpis placerat sagittis dolor mollis tortor amet."
      />
      <AboutUs />
    </div>
  );
}
