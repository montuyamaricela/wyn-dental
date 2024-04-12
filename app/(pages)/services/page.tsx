import AboutSection from "@/app/components/common/AboutSection";
import Hero from "@/app/components/common/Hero";
import Testimonial from "@/app/components/common/Testimonial";
import AboutUs from "@/app/components/pages/about/About";
import BookNow from "@/app/components/pages/services/BookNow";

export default function Services() {
  return (
    <div>
      <Hero
        sectionTitle="Our Services"
        title="Nibh ultrices lectus cum etiam odio."
      />
      <AboutSection
        sectionTitle="Tailored Dental Care"
        shortDescription="At dignissim ipsum cursus rhoncus sit orci. Scelerisque varius consectetur malesuada sed at et, egestas scelerisque eu."
        description="Convallis libero pulvinar sit aliquet purus iaculis. Proin et, aliquam elit justo neque tristique nibh pretium hendrerit. Nam sed lacus, nisl sed accumsan amet urna, placerat. Vitae at quis pellentesque sit. Imperdiet eget cursus lorem donec est aliquam auctor mattis nullam."
      />
      <Testimonial />
      <BookNow />
    </div>
  );
}
