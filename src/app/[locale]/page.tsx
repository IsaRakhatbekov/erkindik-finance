import { Hero } from "@/src/homePageUIComponents/Hero/Hero";
import { News } from "@/src/homePageUIComponents/News/News";
import { Why } from "@/src/homePageUIComponents/Why/Why";
import { ServicesComponent } from "@/src/components/ServicesComponent/ServicesComponent";
import { Offers } from "@/src/homePageUIComponents/Offers/Offers";
import { Partners } from "@/src/homePageUIComponents/Partners/Partners";

export default function HomePage() {
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
