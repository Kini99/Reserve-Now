import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FlightCarouselItem from "./FlightCarouselItem";

export default function FlightCarousel({data}) {
  const flight = data.map((item) => (
    <FlightCarouselItem
      url={item.imageurl}
      destination={item.destination}
      dates={item.dates}
      key={item.imageurl}
    />
  ));

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel showDots={false} responsive={responsive}>
        {flight}
      </Carousel>
    </>
  );
}