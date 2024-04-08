import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "./Container";
import contactBackground from "@/public/images/contact-us.png";
import reachUsBackground from "@/public/images/reach-us.png";

export default function ContactUs() {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-10">
        <div
          style={{
            backgroundImage: `url('${contactBackground.src}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[400px] md:h-[500px] lg:h-[700px] flex flex-col text-white justify-end p-5 md:p-20 "
        >
          <h2 className="text-3xl  uppercase tracking-widest">Contact Us</h2>
          <p className="mt-5 text-base font-extralight">
            Feel free to reach out for any further information or a direct
            booking.
          </p>
          <div>
            <Button className="bg-transparent hover:bg-transparent border border-white text-white rounded-none font-normal uppercase mt-5">
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('${reachUsBackground.src}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[400px] md:h-[500px]  lg:h-[700px] flex flex-col text-white justify-end p-5 md:p-20 "
        >
          <h2 className="text-3xl  uppercase tracking-widest">
            Reach us through
          </h2>
          <div className="font-extralight font-base space-y-2 mt-5">
            <p>747 Thunder Gate Crossing, Tampa, NM 27699</p>
            <p>(116) 918-9296 </p>
            <p>info@wellness.com </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
