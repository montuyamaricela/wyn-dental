import Image from "next/image";
import Image1 from "@/public/images/about-us-image-1.png";
import Image2 from "@/public/images/about-us-image-2.png";
import { Container } from "../../common/Container";

export default function AboutUs() {
  return (
    <Container styling={{ backgroundColor: "#FAF6EA" }}>
      <div className="w-32 h-0.5 mx-auto bg-orange mb-5" />
      <h2 className="text-xl uppercase tracking-widest text-orange text-center">
        Nulla lorem
      </h2>
      <div className="mt-10 xl:mt-24 mb-10">
        <div className="grid xl:grid-cols-2 items-center relative bg-white sm:w-3/5 mx-auto py-10 md:py-14 px-10 gap-10 xl:gap-0">
          <div className="flex xl:absolute -left-10 -top-10">
            <Image src={Image1} alt="Image1" className="w-full xl:w-3/4" />
          </div>
          <div className="hidden xl:flex" />
          <div>
            <h3 className="text-xl text-blue mb-5">
              Vivamus ullamcorper nec et, arcu neque, in pellentesque feugiat
              orci.
            </h3>
            <p className="text-sm text-blue">
              Sed id ac euismod sodales venenatis mattis amet morbi. Dis
              pharetra eget sem turpis non tortor. Ipsum pharetra eu semper sed
              accumsan in gravida fringilla in. Vitae convallis elementum semper
              mauris arcu felis aliquet dictum. Fermentum odio enim vitae ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 xl:mt-32  mb-10">
        <div className="grid xl:grid-cols-2 items-center relative bg-white sm:w-3/5 mx-auto py-10 md:py-14 px-10 gap-10 xl:gap-0">
          <div className="order-last xl:order-none">
            <h3 className="text-xl text-blue mb-5">
              Non id nam vel, facilisis.
            </h3>
            <p className="text-sm text-blue">
              Nam vitae, est eu integer sed morbi. Enim non faucibus laoreet
              faucibus cursus. Iaculis in tellus gravida nisi, risus. Laoreet
              semper suspendisse feugiat at maecenas adipiscing libero mi. A
              quis ac adipiscing nunc, sem. Leo imperdiet eu quis mauris odio
              malesuada pellentesque dapibus feugiat. Donec tincidunt natoque id
              scelerisque. Mattis enim, morbi blandit cras nec et ultricies
              duis. Congue non diam diam tortor cum sodales quisque mi. Volutpat
              condimentum tortor ipsum venenatis egestas vitae hac.
            </p>
            <h3 className="text-xl text-blue mb-5 mt-10">
              A urna, arcu neque egestas pellentesque.
            </h3>
            <p className="text-sm text-blue">
              Massa eget egestas sapien mi aenean faucibus praesent urna. Etiam
              urna non, viverra venenatis, mauris. Pulvinar tincidunt enim
              faucibus sed vulputate consectetur nam aliquam. Varius elementum
              varius arcu blandit mattis gravida pretium nulla. Donec fringilla
              pharetra duis amet commodo amet, tincidunt. Lorem netus ornare
              risus mollis vitae in orci.
            </p>
          </div>
          <div className="flex xl:absolute -right-10 -top-10 ">
            <Image
              src={Image2}
              alt="Image2"
              className="w-full xl:w-3/4 ml-auto"
            />
          </div>
          <div className="hidden xl:flex" />
        </div>
      </div>
    </Container>
  );
}
