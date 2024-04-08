import { Container } from "../../common/Container";
import background from "@/public/images/discover-background.png";
import image from "@/public/images/discover-image.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
export default function About() {
  return (
    <Container backgroundImage={background.src}>
      <div className="text-white">
        <div className="w-32 h-0.5 mx-auto bg-white mb-5" />
        <h2 className="text-xl text-center uppercase tracking-widest">
          Why Wynn Dental Wellness
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 mt-10 lg:mt-24 items-center">
          <div className="relative">
            <div className="h-full w-3/4 bg-green absolute -top-10 right-10 hidden lg:block" />
            <div>
              <Image
                src={image}
                alt="Image"
                className="h-full w-full lg:w-3/4 relative lg:ml-auto"
              />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-light">
              Convallis convallis viverra egestas
            </h2>
            <div className="space-y-5 font-light text-sm my-5">
              <p>
                Cras at lectus arcu pellentesque imperdiet facilisis. Sem proin
                eu, non enim. Sed nunc, egestas duis tristique commodo
                scelerisque consequat fringilla. Sed facilisi sed scelerisque id
                sapien, turpis adipiscing mi sed.
              </p>
              <p>
                Fringilla orci, euismod accumsan elementum massa. Velit massa
                tempor, duis habitant orci auctor. Pharetra proin amet habitasse
                cras est, malesuada elementum. Nisl, eu ultricies lorem nunc.
                Dolor eu ultricies amet habitant sem non ipsum dolor sit amit
                consecutor elementum.
              </p>
            </div>
            <Button className="bg-transparent hover:bg-transparent border border-white rounded-none font-normal">
              <Link href="/">DISCOVER THE WYNN EXPERIENCE</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
