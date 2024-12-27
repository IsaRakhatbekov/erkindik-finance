import { Hero } from "./ui/Hero/Hero";
import { News } from "./ui/News/News";
import { Why } from "./ui/Why/Why";
import { Offers } from "./ui/Offers/Offers";
import { Partners } from "./ui/Partners/Partners";
import { ServicesComponent } from "@/src/components/ServicesComponent/ServicesComponent";

const Home = () => {
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
};
export default Home;
