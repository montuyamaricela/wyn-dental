import { Container } from "./Container";
import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial-image.png";
import quote from "@/public/images/quote.svg";
import star from "@/public/images/star.svg";
export default function Testimonial() {
  return (
    <Container styling={{ backgroundColor: "#FAF6EA" }}>
      <div>
        <div className="w-32 h-0.5 mx-auto bg-orange mb-5" />
        <h2 className="text-xl text-center text-orange uppercase tracking-widest">
          INCREDIBLE DENTAL EXPERIENCE
        </h2>
        <div className="md:w-2/4 lg:w-3/4 mx-auto mt-16">
          <swiper-container
            speed={1500}
            autoplay={true}
            loop={true}
            slides-per-view={1}
          >
            {testimonial.map((item: any) => {
              return (
                <swiper-slide key={item.id}>
                  <div className="grid lg:grid-cols-2">
                    <Image
                      src={item?.image}
                      className="w-full lg:w-80 mx-auto"
                      alt={item?.name}
                    />
                    <div className="relative">
                      <div className="absolute top-0 -left-12 hidden lg:block">
                        <Image src={quote} alt="quote" />
                      </div>
                      <div className="mt-5">
                        <p>{item.description}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        {/* loop div based on item.ratings */}
                        {Array.from({ length: item.rating }, (_, i) => (
                          <div key={i}>
                            <Image src={star} alt="star" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-2">
                        <p>-{item.name}</p>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
      </div>
    </Container>
  );
}

const testimonial = [
  {
    id: 1,
    name: "Jean Grey",
    image: TestimonialImage,

    description:
      "Fringilla orci, euismod accumsan elementum massa. Velit massmpor, duis habitant orci auctor. Pharetran amet habitasse cras est, malesuada elementum. Nisl, eu ultricies lorem nunc. Dolor eu ultricies amet habitant sem non.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Doe",
    image: TestimonialImage,

    description:
      "In sed pulvinar purus feugiat volutpat massa. Eu proin est interdum at magna dapibus vitae duis. Egestas sollicitudin nisl netus morbi odio auctor tortor. Non purus duis vitae pellentesque id vivamus suspendisse sed consectetur.",
    rating: 5,
  },
  {
    id: 1,
    name: "Jean Blue",
    image: TestimonialImage,
    description:
      "Ut fames tempus venenatis facilisis tempus, egestas. Lacinia bibendum viverra odio aliquam, id pharetra pellentesque. A felis amet neque ultrices id mattis senectus vitae pellentesque. Feugiat sed nunc at elit cursus sed viverra amet risus.",
    rating: 5,
  },
];
