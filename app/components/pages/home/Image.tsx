import backgroundImage from "@/public/images/rectangle1.png";
import { Container } from "../../common/Container";

export default function ImageBackground() {
  return (
    <Container backgroundImage={backgroundImage.src} position="">
      <div className="h-[150px] md:h-[300px] lg:h-[500px]" />
    </Container>
  );
}
