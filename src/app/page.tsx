import { ServicesComponent } from "../components/ServicesComponent/ServicesComponent";
import { Hero } from "../ui/Hero/Hero";
import { News } from "../ui/News/News";
import { Offers } from "../ui/Offers/Offers";
import { Partners } from "../ui/Partners/Partners";
import { Why } from "../ui/Why/Why";

export default function Main() {
  return (
    <>
      <Hero />
      <News />
      <Why />
      <ServicesComponent />
      <Offers />
      <Partners />
    </>
  );
}
